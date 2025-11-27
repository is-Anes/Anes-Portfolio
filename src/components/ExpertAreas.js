import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Mobile Apps Published", value: 3 },
  { name: "Years of Experience", value: 5 },
  { name: "Companies Worked With", value: 3 },
  { name: "Projects Delivered", value: 6 },
];

const skills = [
  { name: "React Native", value: 95, icon: "img/logo/rn.png" },
  { name: "React", value: 90, icon: "img/logo/r.png" },
  { name: "Angular", value: 80, icon: "img/logo/angular.png" },
  { name: "TypeScript", value: 90, icon: "img/logo/ts.png" },
  { name: "JavaScript", value: 95, icon: "img/logo/js.png" },
  { name: "Redux", value: 90, icon: "img/logo/redux.png" },
  { name: "Firebase", value: 85, icon: "img/logo/fb.png" },
  { name: "Stripe", value: 70, icon: "img/logo/stripe.png" },
  { name: "REST APIs", value: 90, icon: "img/logo/api.png" },
  { name: "Git", value: 95, icon: "img/logo/github.png" },
];

const experiences = [
  {
    company: "Aquassist – Montreal, Canada",
    designation: "Mobile Developer (React Native)",
    time: "2024 – Present",
  },
  {
    company: "Nehos Group – Sousse, Tunisia",
    designation: "React Native Developer",
    time: "2023 – 2024",
  },
  {
    company: "Reactit – Sousse, Tunisia",
    designation: "Front-End Developer",
    time: "2020 – 2023",
  },
];

const educations = [
  {
    institution: "EPI – International Multidisciplinary School",
    certificate: "National Engineering Degree in Computer Science",
    time: "2018 – 2021",
  },
  {
    institution: "Higher Institute of Applied Sciences and Technology",
    certificate: "Applied Bachelor's in Computer Science",
    time: "2015 – 2018",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    I specialize in front-end and cross-platform mobile
                    development, with strong expertise in React Native, React,
                    Angular, TypeScript, JavaScript, Redux, Firebase, and modern
                    web/mobile technologies. I build performant, scalable, and
                    user-focused applications.
                  </p>
                  <p>
                    I enjoy solving complex technical challenges, improving user
                    experience, and collaborating with teams to deliver reliable
                    and impactful digital products.
                  </p>
                </div>
              </div>

              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>

                <div className="content">
                  {/* Skills */}
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img className="svg" src={skill.icon} alt="" />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Experience */}
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /content */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTERS */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpertAreas;
