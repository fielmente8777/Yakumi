// import Image from "next/image";
import LazyLoadedVideo from "../LazyLoadedVideo";

interface BannerProps {
  title: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({ title, src }) => {
  return (
    <section className="max-w-[1600px] mx-auto bg-primary text-white lg:mb-10">
      <div className="">
        <div className="relative w-full lg:aspect-[4/1.6] aspect-[4/3]">
          <LazyLoadedVideo src={src} poster={src} controls={false} />

          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <div className="flex flex-col gap-4 max-w-lg w-full">
              <h1 className="largeHeading font_go uppercase letter_spacing font-semibold max-sm:text-center">
                {title}
              </h1>
              {/* <Paragraph
                className={"mt-4 description1 text-white max-sm:text-center"}
                text={desc}
              /> */}
              {/* <div className="flex items-center max-sm:justify-center gap-5 mt-4">
                {buttons.map((button, i) => (
                  <Button
                    key={i}
                    label={button.label}
                    href={button.href}
                    className={`px-6 text-center ${i === 0 ? "bg-secondary" : "bg-white !text-secondary"} `}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
