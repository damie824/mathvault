export default function GlobalHeader() {
  return (
    <header>
      <div className="global-header-body">
        <div className="logo">
          <a href="/">
            <h1>MATHVAULT®</h1>
          </a>
        </div>
        <div className="global-header-links">
          <a href="/about">정보</a>
          <a href="/play">학습 도구</a>
          <a href="https://github.com/damie824/mathvault">오픈 소스</a>
        </div>
      </div>
    </header>
  );
}
