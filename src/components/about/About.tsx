import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import SocialMedia from "./SocialMedia"
import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden mt-10"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
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
              paragraph="Nama saya adalah Gifriend Yedija Talumingan, saya adalah seorang programmer yang tertarik dalam bidang web dan mobile. Saat ini, saya sedang menempuh pendidikan di Universitas Sam Ratulangi, Program Studi Teknik Informatika."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="Keahlian teknis saya melibatkan penguasaan beberapa bahasa pemrograman dan erangka kerja seperti FLutter, React, NextJS dan NestJS. Selain itu, saya juga memiliki pengalaman dengan database seperti MySQL dan PostgreSQL, serta pemahaman mendalam tentang penggunaan alat-alat produktivitas seperti VSCode, XAMPP, Ms Office, Postman dan Git. Dengan kombinasi keterampilan teknis dan kemampuan berkomunikasi yang baik, saya siap untuk menghadirkan kontribusi positif dalam setiap proyek yang saya jalani. Saya sangat antusisas untuk belajar da berkembang dalam dunia tenologi. Terima kasih atas kunjungan Anda ke portofolio saya, saya berharap dapat berkontribusi dalam proyek-proyek yang dapat memberikan manfaat di masa mendatang."
              delay={1.8}
            />

          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          {/* <GithubGraph /> */}
          <SocialMedia />
          <AnimateBody text={"Skills"}/>
        </div>
      </div>
    </section>
  )
}
