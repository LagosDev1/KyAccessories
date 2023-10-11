import React from "react";
import { featuresData } from "../data";

import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  const { title, subtitle, list } = featuresData;

  return (
    <section className="feature  my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        <div className="feature-title text-center">
          <h2
            className="mb-6 xl-mb-12"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {title}
          </h2>
          <p
            className="lead max-w-[584px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {subtitle}
          </p>
        </div>
        <div className="feature-list grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          {list.map((feature, index) => {
            const {
              image,
              bgImage,
              title,
              description,
              linkText,
              delay,
              animation,
              linkUrl,
            } = feature;
            return (
              <div
                className="feature-list-wrapper w-full max-w-[540px] mx-auto h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start"
                key={index}
                data-aos={animation}
                data-aos-offset="100"
                data-aos-delay={delay}
              >
                <div className="bg-image hidden lg:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} alt="" />
                </div>
                <div
                  className="illustration max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img src={image} alt="" />
                </div>
                <div className="description max-w-[220px]">
                  <h3 className="mb-4">{title}</h3>
                  <p className="font-light italic mb-4 text-sm">
                    {description}
                  </p>
                  <div className="flex items-center gap-x-2 group">
                    <a href={linkUrl} className=" text-primary font-bold">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
