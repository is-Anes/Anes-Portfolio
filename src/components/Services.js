import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Mobile App Development (React Native)",
    img: "img/service/1.png",
    description: [
      "I build high-quality, cross-platform mobile applications using React Native. My work includes creating reusable components, implementing complex features, managing state with Redux or React Query, and ensuring smooth user experiences on both iOS and Android.",
      "I have experience working with Firebase Cloud Messaging, Stripe integration, push notifications, authentication flows, and application performance optimization.",
      "I also collaborate with QA, designers, and backend teams to deliver stable, scalable, and user-friendly mobile apps."
    ],
  },
  {
    name: "Front-End Web Development",
    img: "img/service/2.jpg",
    description: [
      "I develop responsive, modern, and optimized web applications using React and Angular. I translate UI/UX designs into clean and maintainable code while ensuring consistency and accessibility across pages.",
      "My front-end development experience includes API integrations, reusable component architecture, state management, and performance improvements.",
      "I follow best practices, write clean code, and collaborate in agile environments to deliver high-quality user interfaces."
    ],
  },
  {
    name: "API Integration & Backend Communication",
    img: "img/service/api.jpg",
    description: [
      "I implement secure and efficient communication between front-end/mobile apps and backend servers using RESTful APIs, Axios, React Query, and modern data-fetching patterns.",
      "I ensure proper error handling, caching, data validation, and performance-centric API usage.",
      "My experience includes integrating Stripe for payments, Firebase for notifications and analytics, and other external services."
    ],
  },
  {
    name: "Performance Optimization & Code Refactoring",
    img: "img/service/optimization.jpg",
    description: [
      "I analyze application performance, identify bottlenecks, and refactor code to ensure fast load times, smooth interactions, and efficient resource usage.",
      "This includes improving rendering strategies, optimizing data fetching, refactoring large components, and applying best practices for scalability.",
      "My goal is always to enhance user satisfaction and ensure long-term project maintainability."
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />

      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>

            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>

                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>

                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />

                      <img
                        className="popup_service_image"
                        src={service.img}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
