const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">

          <div className="infobox">
            <div className="video_button">
              <img
                className="anim_circle"
                src="img/hero/avatar.png"
                alt=""
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                I’m always open to discussing new opportunities, collaborations,
                or exciting projects in mobile and web development. Feel free to
                reach out and I’ll get back to you as soon as possible.
              </p>
            </div>

            <div className="orido_tm_boxed_button">
              <a href="mailto:is.anes@outlook.com">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="tel:+14384674067">
                      +1 (438) 467-4067
                    </a>
                  </p>
                </li>

                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:is.anes@outlook.com">
                      is.anes@outlook.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anasis"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="svg" src="img/svg/social/be.svg" alt="" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/anasis" target="_blank" rel="noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Contact;
