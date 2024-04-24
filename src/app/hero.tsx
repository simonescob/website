"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  const goToExperience = () => {
    window.location.href = "#skills"
  }
  const goToProjects = () => {
    window.location.href = "#projects"
  }
  return (
    <header className="bg-white pt-4 lg:pt-7 2xl:pt-28 ">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Frontend <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Hey there! I'm Simon Escobar, your go-to frontend wizard! With 3+ years of crafting stunning web experiences, I dive into design, backend, Linux & terminal magic. Let's rock ReactJS, Angular, TailwindCSS & Sass together!
          </Typography>
          {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div> */}
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
          <div className="flex space-x-5">
            <Button onClick={goToExperience} color="gray" className="px-4 w-[10rem]">
              See Skills
            </Button>
            <Button onClick={goToProjects} color="cyan" className="px-4 w-[10rem]">
              See Projects
            </Button>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avatar-simon.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
