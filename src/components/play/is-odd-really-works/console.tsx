import { useEffect, useRef, useState } from "react";

export default function OddCheckConsole({
  count,
  itemTypes,
}: {
  count: number;
  itemTypes: oddItem[];
}) {
  const [consoleTexts, setConsoleTexts] = useState<string[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0); // 시도 횟수 상태 추가
  const [isPlaying, setIsPlaying] = useState(true); // 플레이 상태 추가
  const consoleRef = useRef<HTMLDivElement>(null);

  const play = async () => {
    setIsPlaying(true);
    const totalItems = itemTypes.flatMap(({ type, quantity, probability }) =>
      new Array(quantity).fill({ type, probability })
    );

    const totalProbability = itemTypes.reduce(
      (sum, item) => sum + item.probability,
      0
    );

    for (let i = 0; i < count; i++) {
      const pickedItems: string[] = [];
      for (let j = 0; j < totalProbability; j++) {
        const randomIndex = Math.floor(Math.random() * totalItems.length);
        pickedItems.push(totalItems[randomIndex].type);
      }

      const isMatch = () => {
        let isMatch = true;
        for (let item of itemTypes) {
          let count = 0;
          for (let pickedItem of pickedItems) {
            if (pickedItem === item.type) {
              count++;
            }
          }
          if (count !== item.probability) {
            isMatch = false;
          }
        }
        return isMatch;
      };

      const isSameFlavor = isMatch();

      const newText = `Picked items: ${pickedItems.join(", ")} - ${
        isSameFlavor ? "Same number" : "Different numbers"
      }`;

      setConsoleTexts((prevTexts) => {
        const updatedTexts = [...prevTexts, newText];
        if (isSameFlavor) {
          setCorrectCount((prevCount) => prevCount + 1);
        }
        setAttemptCount((prevCount) => prevCount + 1); // 시도 횟수 증가
        setTimeout(() => {
          if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
          }
        }, 0);
        return updatedTexts;
      });

      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    setIsPlaying(false);
  };

  const isValidItemTypes = itemTypes.every(
    (item) => item.type && typeof item.type === "string"
  );

  return (
    <div className="odd-console">
      <div
        className={
          "odd-console-body" +
          (consoleTexts.length > 0 ? " odd-console-activated" : "")
        }
        ref={consoleRef}
      >
        {consoleTexts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <button
        className="odd-console-play"
        onClick={play}
        disabled={!isValidItemTypes}
      >
        Play
      </button>
      <p>Correct Count: {correctCount}</p>
      <p>Attempt Count: {attemptCount}</p> {/* 시도 횟수 표시 */}
    </div>
  );
}
