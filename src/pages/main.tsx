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
            MathVault는 당신의 미적분 수업을 위해 여러 학습용 도구들을
            제공합니다.
          </p>
          <div className="main-title-buttons">
            <a className="highlight" href="/tools">
              학습 도구
            </a>
            <a href="https://github.com/damie824">깃허브</a>
          </div>
        </div>
        <img src="/assets/newton.png" />
      </section>
    </main>
  );
}
