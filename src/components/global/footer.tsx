export default function GlobalFooter() {
  return (
    <footer>
      <div className="global-footer-body">
        <div className="logo">
          <a href="/">
            <h1>MATHVAULT®</h1>
            <p className="copyright">
              Copyright © {new Date().getFullYear()} MathVault.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
