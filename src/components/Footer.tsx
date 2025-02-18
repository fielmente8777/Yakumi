"use client";
import { FooterLink, imageUrl, SocialLink } from "@/data/links";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FillSwiggy, FillZomato } from "@/icons/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = React.useState(0);

  return (
    <footer className="max-screen w-full">
      <SectionWithContainer sectionClassName="bg-extra !lg:py-8 !py-4">
        <div className="flex flex-col w-full items-center justify-center gap-6">
          <div className="relative aspect-[4/3] w-[10rem]">
            <Image
              src={imageUrl + "logo.webp"}
              alt="yakumi"
              fill
              className="object-contain"
            />
          </div>
          <ul className="flex flex-wrap max-sm:flex-col  max-w-xl w-full items-center justify-center gap-4 lg:mt-4">
            {FooterLink[1].links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  key={link.id}
                  target={link.title === "quick links" ? "_self" : "_blank"}
                  className="flex w-full text-center gap-2 description2 text-light transition-all"
                >
                  <span className="">{link.icon}</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 items-center mt-4">
            <li className="">
              <Link
                href={"#"}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(1)}
                onMouseLeave={() => setIsHovered(0)}
              >
                <FillSwiggy bg={isHovered === 1 ? "white" : "#2A2A2A"} />
              </Link>
            </li>
            <li className="">
              <Link
                href={"#"}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(2)}
                onMouseLeave={() => setIsHovered(0)}
              >
                <FillZomato bg={isHovered === 2 ? "white" : "#2A2A2A"} />
              </Link>
            </li>
            {SocialLink.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-white bg-secondary w-8 hover:bg-white h-8 aspect-square rounded-[0.25rem] flex justify-center items-center  hover:text-secondary transition-colors duration-300 ease-in-out`}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="lg:flex hidden gap-16">
            {FooterLink[0].links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  key={link.id}
                  className="description2 text-light transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-secondary !py-4 text-white">
        <div className="flex max-md:flex-col items-center lg:justify-between gap-4">
          <p className="text-center">
            © {currentYear} Yakumi. <br className="lg:hidden" />
            All Rights Reserved. <br className="lg:hidden" />
            Designed & Developed by{" "}
            <Link href="https://eazotel.com" className="font-bold">
              Eazotel
            </Link>
          </p>
          <p className="">Terms of Service Privacy Policy</p>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
