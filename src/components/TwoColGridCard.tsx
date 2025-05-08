import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button";
import { AboutUsDataProps } from "@/@types/types";
import Link from "next/link";
import { DownloadIcon } from "@/icons/icons";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  src,
  label,
  href,
  index = 0,
}) => {
  return (
    <>
      <div
        className={`lg:grid grid-cols-2 lg:items-center gap-6 ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-1 mb-5 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
        >
          {src && (
            <div
              className={` relative w-full aspect-[4/2.88] rounded-lg overflow-hidden `}
            >
              <Image
                src={src}
                alt="Image 1"
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          )}
        </div>
        <div
          className={` flex flex-col gap-4 col-span-1  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          {title && (
            <div className="flex flex-col gap-2">
              <h2 className="capitalize font_go text-primary mediumHeading ">
                {title}
              </h2>
              <h3 className="capitalize text-secondary heading1 font-semibold">
                {subtitle}
              </h3>
            </div>
          )}
          {desc && <Paragraph text={desc} />}
          <div className="flex items-center gap-4">
            {label && href && (
              <Button
                label={label}
                href={href}
                className="bg-secondary !rounded-full w-fit px-6"
              />
            )}
            <Link href="/menu.pdf" target="_blank" className="flex items-center gap-2 text-primary font-medium hover:text-secondary inter">
              <span className="sr-only">Download Menu</span>{" "}
              <span>
                <DownloadIcon />
              </span>
              Download Menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;
