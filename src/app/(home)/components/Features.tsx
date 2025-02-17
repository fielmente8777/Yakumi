"use client";
import { FeaturesDataProps } from "@/@types/types";
import {
  FeatureCard,
  MainHeading,
  Paragraph,
  SectionWithContainer,
} from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";

const Features: React.FC<FeaturesDataProps> = ({ title, desc, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary" sectionId="features">
      <div className="flex flex-col w-full overflow-hidden bg-primary">
        <MainHeading
          title={title}
          className="text-white text-center mediumHeading font_go uppercase letter_spacing font-semibold"
        />
        <Paragraph text={desc} className="text-center heading1 text-white" />
        <div className="lg:grid hidden grid-cols-3 gap-20  mt-12 relative">
          {cards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
          <div className="border-t-2 border-secondary border-dashed w-full absolute top-[4.5rem]"/>
        </div>
        <div className="w-full mt-12 lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className=""
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <FeatureCard key={card.id} {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Features;
