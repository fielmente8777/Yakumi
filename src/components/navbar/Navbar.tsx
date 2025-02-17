"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import { imageUrl, NavLink, SocialLink } from "@/data/links";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="lg:hidden block">
            {isOpen ? (
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <CiMenuBurger
                onClick={() => setIsOpen(true)}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
          <div className="">
            <Link
              href="#"
              className="relative h-[6rem] w-[8rem] aspect-auto block"
            >
              <Image
                src={imageUrl + "logo.webp"}
                alt="yakumi"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
          <ul className="lg:flex hidden items-center gap-4">
            {NavLink.slice(1, NavLink.length).map((link) => (
              <li key={link.id} className="">
                <Link
                  href={link.href}
                  className={`${pathname === link.href ? "text-secondary" : ""} capitalize`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="">
            <ul className="flex items-center gap-4">
              {SocialLink?.map((link) => (
                <li key={link.id} className="">
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-secondary border-2 border-secondary w-8 h-8 aspect-square rounded-[0.25rem] flex justify-center items-center hover:bg-white hover:text-secondary transition-colors duration-300 ease-in-out"
                  >
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
