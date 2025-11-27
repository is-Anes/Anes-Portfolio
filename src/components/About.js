const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">5</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Anes Ismail</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                With over 5 years of experience as a Front-End and React Native developer,
                I have built modern, high-quality mobile and web applications using
                technologies like React Native, React, Expo, TypeScript, and Redux.
                I’m passionate about creating smooth user experiences, solving complex
                problems, and collaborating with teams to deliver impactful digital products.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="https://drive.google.com/file/d/1YyMOKmReLgnYMnaQRAYWReKfz3ftr2U5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
