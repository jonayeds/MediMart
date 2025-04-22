import Image from "next/image";
import highlight from "@/assets/svgs/hero-text-highlight.svg";
import highlightWhite from "@/assets/svgs/hero-text-highlight-white.svg"
const HeroSection = () => {
  return (
    <div className="bg-hero min-h-screen flex relative rounded-b-3xl md:rounded-b-none">
      <div className="md:hidden absolute h-screen w-full bg-[#02020265] rounded-b-3xl " />
      <div className="flex-1 h-screen justify-center flex flex-col items-center">
        <div className="absolute md:relative  left-[7vw] md:left-0 text-white px-4 md:text-black">
          <h1 className="text-4xl">
            Your Trusted Partner in Health and{" "}
            <span className="relative inline-flex max-w-max">
              Wellness
              <Image
                src={highlight}
                alt="nothing"
                className="absolute -bottom-6 w-full hidden md:flex"
                width={100}
              />{" "}
              <Image
                src={highlightWhite}
                alt="nothing"
                className="absolute -bottom-6 w-full  md:hidden"
                width={100}
              />{" "}
            </span>
          </h1>
          <p className="text-xs md:max-w-[40vw] mt-8 max-w-[80vw]">
            At MediMart, we provide a wide range of high-quality medicines and
            healthcare products to help you stay healthy and feel your best.
            With expert advice, fast delivery, and affordable prices, we are
            committed to making healthcare convenient and accessible. Whether
            you need prescription medications, over-the-counter solutions, or
            wellness essentials, we`ve got you covered. Your health is our
            priority.
          </p>
        </div>
      </div>
      <div className="bg-hero-image md:rounded-b-none rounded-b-3xl lg:w-[40vw] md:w-[60vw] w-[100vw] md:rounded-tl-4xl shadow-2xl"></div>
    </div>
  );
};

export default HeroSection;
