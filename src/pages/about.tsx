import "../styles/about.scss";

export default function AboutPage() {
  return (
    <main className="about">
      <h1>About MathVault</h1>
      <div className="about-contents">
        <h2>Who am I?</h2>
        <p>대평고등학교 3학년에 재직중인 고등학생이에요!</p>
        <p>코딩을 좋아하고, 제 기술들로 다른 사람을 돕는 것에 재미를 느껴요.</p>
        <p>
          자세한 정보는 <a href="https://damie.works/">제 포트폴리오 사이트</a>
          에서 확인해 주세요!
        </p>
        <h2>What is MathVault?</h2>
        <p>
          고등학교 *미적분 발표*를 위해 제작된 웹사이트이자 제 개인
          프로젝트에요.
        </p>
        <p>
          오픈 소스로 운영되며, 교육에 도움이 되는 여러 자료들을 제공하는 것을
          목표로 해요.
        </p>
        <br />
        <p>이 프로젝트가 언제까지 운영될지는 개발자인 저도 잘 모르겠지만,</p>
        <p>제가 할 수 있는 최대한 오래 운영해볼 생각이에요.</p>
      </div>
    </main>
  );
}