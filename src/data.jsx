// import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/svg/illustration-1.svg";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import IllustrationHero from "../src/assets/svg/illustration-hero.svg";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

// export const navigationData = [
//   {
//     name: "About",
//     href: "#",
//   },
//   {
//     name: "Help",
//     href: "#",
//   },
//   {
//     name: "Features",
//     href: "#",
//   },
//   {
//     name: "Signup",
//     href: "#",
//   },
// ];

export const heroData = {
  title: `Welcome to Ky Accessories`,
  subtitle:
    "Discover a world where elegance meets innovation. At Ky Accessories, we redefine the art of accessorizing, offering a curated collection of meticulously crafted pieces that elevate your style effortlessly.",
  btnText: "Shop Now",
  image: IllustrationHero,
};

export const aboutData = {
  image: AboutImg,
  title: "Ky Accessories - Elevate Your Style",
  subtitle:
    "From timeless classics to contemporary designs, we invite you to explore the realm of accessories that make every moment memorable. Unveil your unique charm with Ky Accessories.",
};

export const featuresData = {
  title: "Our Categories",
  subtitle:
    "We provide our client with different categories of accessories form necklaces to wristwatches to rings etc, this section enables you to shop effectively with us.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Fade animations",
      description:
        "Using 'fade-up' for this grid. Other Fade animation include fade-up, fade-down,fade-left, fade-right, fade-up-right, fade-up-left, fade-down-right, fade-down-left",
      linkText: "Learn more",
      delay: "400",
      animation: "fade-up",
      linkUrl: "https://github.com/michalsnik/aos",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Flip animations",
      description:
        "Using 'flip-up' for this grid. other Flip animation includes flip-up, flip-down, flip-left, flip-right",
      linkText: "Learn more",
      delay: "700",
      animation: "flip-up",
      linkUrl: "https://github.com/michalsnik/aos",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Slide animations",
      description:
        "Using 'slide-left' for this grid. other Slide animation includes slide-up, slide-down, slide-left, slide-right",
      linkText: "Learn more",
      delay: "1000",
      animation: "slide-left",
      linkUrl: "https://github.com/michalsnik/aos",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Zoom animations",
      description:
        "Using 'zoom-in-left' for this grid. other Zoom animation includes zoom-in, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right, zoom-out, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right",
      linkText: "Learn more",
      delay: "1300",
      animation: "zoom-in-right",
      linkUrl: "https://github.com/michalsnik/aos",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Ramgolam Mahima",
    web: "mahima.ramgolam.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Mahita Ramgo",
    web: "mahita.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Sandeep",
    web: "sandeep.ramgolam.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Try for free!",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Warehouse Society, 234 Bahagia Ave Street PRBW 29281",
  email: "info@warehouse.project",
  phone: "1-232-3434 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "©Copyright 2023, Ramgolam Mahima",
  icon: <BsChatDotsFill />,
};
