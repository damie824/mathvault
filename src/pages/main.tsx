import { Helmet } from "react-helmet";
import "../styles/main.scss";

export default function MainPage() {
  return (
    <main>
      <Helmet>
        <title>메인 - MathVault</title>
      </Helmet>
      <section className="main-title">
        <div className="main-title-contents">
          <span>MATHVAULT - 당신의 스마트한 학습 도구</span>
          <h1>
            누구든지 수학을
            <br />
            더욱 쉽게 가르치고
            <br />
            배워보세요.
          </h1>
          <p>
            MathVault는 당신의 수학적 능력 향상을 위해 여러 학습용 도구들을
            제공합니다.
          </p>
          <div className="main-title-buttons">
            <a className="highlight" href="/play">
              학습 도구
            </a>
            <a href="https://github.com/damie824">깃허브</a>
          </div>
        </div>
        <img src="/assets/tree.png" />
      </section>
      <section className="section-2">
        <h3>누구에게나 무료로 제공되는 수학 교구</h3>
        <p>
          Mathvault는 누구에게나 무료로 수학 교구를 제공합니다. <br />
          어떠한 제약도 없이, 누구나 쉽게 사용하실 수 있어요.
        </p>
        <div className="section-2-buttons">
          <a href="https://github.com/damie824/mathvault">소스코드</a>
          <a href="https://damie.works/">개발자 정보</a>
        </div>
      </section>
    </main>
  );
}
