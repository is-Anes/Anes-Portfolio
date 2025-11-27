import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);

  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />

      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>

            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                {/* ---------------- AQUASSIST ---------------- */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/logo/aq.png"
                      />
                    </div>

                    <div className="details">
                      <span className="category">Mobile & Web App</span>
                      <h3 className="title">
                        <span>Aquassist – Water Treatment Platform</span>
                      </h3>
                    </div>

                    <a
                      className="orido_tm_full_link"
                      href="https://apps.apple.com/ca/app/aquassist/id1578564758"
                      target="_blank"
                    />
                  </div>
                </SwiperSlide>

                {/* ---------------- PlayPro ---------------- */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/logo/pp.png"
                      />
                    </div>

                    <div className="details">
                      <span className="category">Mobile App</span>
                      <h3 className="title">
                        <span>PlayPro – Sports Booking & Management</span>
                      </h3>
                    </div>

                    <a
                      className="orido_tm_full_link"
                      href="https://apps.apple.com/ca/app/playpro-booking-tournaments/id6612028849"
                      target="_blank"
                    />
                  </div>
                </SwiperSlide>

                {/* ---------------- MyGAT Assurances ---------------- */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/logo/gat.png"
                      />
                    </div>

                    <div className="details">
                      <span className="category">iOS App</span>
                      <h3 className="title">
                        <span>MyGAT Assurances – Insurance App</span>
                      </h3>
                    </div>

                    <a
                      className="orido_tm_full_link"
                      href="https://apps.apple.com/ca/app/mygat-assurances/id1542620842?l=fr-CA"
                      target="_blank"
                    />
                  </div>
                </SwiperSlide>

                {/* ---------------- MyGAT Android ---------------- */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/logo/gat.png"
                      />
                    </div>

                    <div className="details">
                      <span className="category">Android App</span>
                      <h3 className="title">
                        <span>MyGAT Assurances – Android Version</span>
                      </h3>
                    </div>

                    <a
                      className="orido_tm_full_link"
                      href="https://play.google.com/store/apps/details?id=com.gatassurances"
                      target="_blank"
                    />
                  </div>
                </SwiperSlide>

                {/* ---------------- Details Popup Example ---------------- */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div className="main" data-img-url="img/portfolio/details.jpg" />
                    </div>

                    <div className="details">
                      <span className="category">More Details</span>
                      <h3 className="title">
                        <span>Project Details</span>
                      </h3>
                    </div>

                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
