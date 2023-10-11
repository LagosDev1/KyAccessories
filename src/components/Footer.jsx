import React from "react";
import { copyrightData } from "../data";

const Footer = () => {
  const { text, icon } = copyrightData;
  return (
    <footer className="mt-24 py-8" data-aos="fade-up">
      <div className="container mx-auto opacity-80">
        <div className="flex flex-col items-center justify-between text-center md:text-left lg:flex-row gap-4">
          <div className="text-sm font-light italic max-w-[360px]">{text}</div>
          <div className="-order-1 md:order-1">
            <div className="w-[60px] h-[60px] bg-accent-primary/20 flex items-center justify-center rounded-full cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
