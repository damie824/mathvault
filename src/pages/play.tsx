import { Helmet } from "react-helmet";
import "../styles/tools.scss";

export default function PlayPage() {
  const playFiles = (require as any).context("./play", false, /\.tsx$/);

  const playInfos: playInfo[] = playFiles.keys().map((key: string) => {
    const module = playFiles(key);
    return module.info;
  });

  return (
    <main>
      <Helmet>
        <title>도구 - MathVault</title>
      </Helmet>
      <div className="tools-title">
        <h1>Mathvault Tools</h1>
        <p>당신의 수업에 도움이 될 만한 여러 도구들을 모아봤어요.</p>
      </div>
      <div className="tools-items">
        {playInfos.map((play, i) => (
          <a key={i} className="tools-play" href={`/play/${play.path}`}>
            <div>
              <img src={play.thumbnail} />
              <div>
                <h4>{play.title}</h4>
                <p>{play.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
