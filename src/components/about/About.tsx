// import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody";
// import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden mt-10"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"Get to know me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <Image
            src={"/imageProfile.jpg"}
            width={150}
            height={150}
            priority
            alt="Gifriend Yedija talumingan"
            className="relative h-[50px] w-[50px] rounded-full object-cover grayscale hover:grayscale-0 md:w-[100px] md:h-[100px] lg:w-[145px] lg:h-[145px]"
          />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[23px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[25px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="My name is Gifriend Yedija Talumingan, a final-year Informatics Engineering student at Sam Ratulangi University with a strong passion for Software Development. I enjoy building scalable, user-focused digital solutions across multiple platforms including web and mobile applications. Throughout my academic journey and project experience, I have worked on various systems ranging from real-time applications and organizational platforms to operational tools used in real industry environments."
              delay={0.2}
            />
            <AnimateParagraph
              paragraph="My technical experience includes developing mobile applications using Flutter and Dart, building modern web interfaces with Next.js and React, and designing backend services using technologies such as NestJS and PostgreSQL. I have hands-on experience integrating RESTful APIs, implementing structured state management, and applying clean and maintainable development practices to create reliable and scalable software systems."
              delay={0.3}
            />
            <AnimateParagraph
              paragraph="I am passionate about continuous learning and exploring new technologies across the software development ecosystem. My goal is to grow as a versatile Software Developer who can contribute to impactful products by building efficient, scalable, and meaningful digital solutions."
              delay={0.3}
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          {/* <GithubGraph /> */}
          <SocialMedia />
          <AnimateBody text={"Skills"} />
        </div>
      </div>
    </section>
  );
}
