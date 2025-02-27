"use client";
import { OurFeaturesDataProps } from "@/@types/types";
import { MainHeading, Paragraph, SectionWithContainer } from "@/components";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurFeatures: React.FC<OurFeaturesDataProps> = ({
  title,
  desc,
  images,
}) => {
  return (
    <SectionWithContainer sectionId="our_featured_dishes">
      <div className="flex flex-col items-center justify-center w-full lg:gap-14 gap-7 our_features_swiper">
        <div className="flex flex-col items-center justify-center gap-2">
          <MainHeading
            title={title}
            className="!text-primary text-center mediumHeading font_go uppercase letter_spacing font-semibold"
          />
          <Paragraph
            text={desc}
            className="text-secondary text-center lg:heading1"
          />
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true, el: ".pagination" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
            }}
            className="w-full "
          >
            {images.map((image) => (
              <SwiperSlide
                key={image.id}
                className="w-full relative lg:aspect-[4/2.2] aspect-[4/2.5] rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <p className="absolute bottom-4 right-4 text-white description1 text-sm font-semibold bg-primary/50 px-2 py-1 rounded-md">
                  {image.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pagination flex items-center justify-center gap-1 mt-8"></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurFeatures;
