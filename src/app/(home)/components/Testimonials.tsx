"use client";
import { SectionWithContainer, TestimonialCard } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <SectionWithContainer
      sectionId="reviews"
      containerClassName="relative"
    >
      <div className="w-full h-full lg:p-8 max-sm:pt-7 max-sm:pb-14 rounded-lg box_shadow relative z-10 our_features_swiper">
        <SliderSwip
          data={[{
            id: 1,
            name: "Ashish",
            text:
              "Every dish from Yakumi bursts with authentic, mouthwatering flavors that transport you straight to the heart of traditional cuisine. From savory stir-fries to delicate dim sum, every bite is a delicious experience you won’t forget!",
          },
          {
            id: 2,
            name: "Ananya Patel",
            text:
              "Yakumi never disappoints! The flavors are bold and authentic, and the quality of ingredients is top-notch. I ordered their sushi rolls and the crispy chicken bao buns, and both were absolutely fantastic. Every bite was bursting with flavor! Delivery was quick and everything arrived fresh",
          },
          {
            id: 1,
            name: "Priya Sharma",
            text:
              "I’ve been ordering from Yakumi for the past few weeks, and I’m hooked! The ramen is rich and savory, and the dumplings are always so perfectly cooked. I also love their fusion dishes, like the Korean BBQ tacos. It’s such a fun mix of flavors",
          },
          {
            id: 1,
            name: "Ravi Kumar",
            text:
              "Yakumi is my new favorite spot for Asian food! The sushi rolls were so fresh, and the teriyaki chicken was absolutely divine. I ordered for delivery, and everything arrived hot and fresh",
          },
          {
            id: 1,
            name: "Amit Desai",
            text:
              "I had a wonderful dinner experience with Yakumi. The Pad Thai was perfectly balanced with just the right amount of spice, and the sushi rolls were a treat. I was impressed by the portion sizes and the freshness of everything",
          },]}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true, el: ".pagination_3" }}
        >
          {data => (
            <TestimonialCard
              key={data.id}
              name={data.name}
              id={data.id}
              text={data.text}
            />
          )}
        </SliderSwip>
        {/* <TestimonialCard /> */}
        <div className="absolute w-max left-5 lg:left-[38%] lg:bottom-16 bottom-8 z-50">
          <div className="pagination_3 flex items-center justify-center gap-2"></div>
        </div>
      </div>
      <div className="absolute lg:top-0 -top-4 lg:left-2 left-10 lg:rotate-3 -rotate-3 max-width1 h-[22rem] w-full bg-primary rounded-lg"></div>
    </SectionWithContainer>
  );
};

export default Testimonials;
