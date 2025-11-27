const CopyRight = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by{" "}
                <a href="https://anesismail.com" target="_blank" rel="noreferrer">
                  Anes Ismail.
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
