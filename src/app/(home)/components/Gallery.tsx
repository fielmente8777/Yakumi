"use client";
import { GalleryDataProps } from "@/@types/types";
import { Button, MainHeading, SectionWithContainer } from "@/components";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Gallery: React.FC<GalleryDataProps> = ({ title, images }) => {
  const displayImages = images.length < 5 ? [...images, ...images] : images;

  return (
    <SectionWithContainer sectionId="gallery">
      <div className="flex flex-col items-center justify-center w-full lg:gap-14 gap-7 our_features_swiper">
        <MainHeading
          title={title}
          className="text-tertiary text-center mediumHeading thiket uppercase letter_spacing font-semibold"
        />
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination,Navigation]}
            navigation
            pagination={{ clickable: true, el: ".pagination_1" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {displayImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="w-full lg:aspect-[4/3] aspect-[4/3] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={title + index}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination_1 flex items-center justify-center gap-1 w-full"></div>

        <Button href="https://www.instagram.com/burgergullykolkata/?hl=en" label="View Instagram" newTabe className="bg-secondary " />
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
