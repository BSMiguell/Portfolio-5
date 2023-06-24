import React from "react";
import "./services.css";
import { services as servicesData } from "../../Data";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {servicesData.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description ">{description}</p>
              <a href="" className="link">
                See Pricing
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
