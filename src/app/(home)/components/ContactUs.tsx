import { Section } from "@/components";
import Form from "@/components/Form";
import { imageUrl } from "@/data/links";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Section>
      <Section className="bg-primary !py-8" id="contact_us">
        <div className="lg:grid flex flex-col-reverse grid-cols-2 lg:gap-10 gap-8 max-md:px-4">
          <div className="col-span-1 w-full flex justify-end relative max-sm:h-[9.5rem]">
            <div className="absolute lg:-top-[40%] -top-[28%] max-sm:-right-8 w-full">
              <div className="relative w-full lg:aspect-[4/4.8] aspect-[4/4]">
                <Image
                  src={imageUrl + "img5.webp"}
                  alt="contact"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[41rem]">
              <Form />
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactUs;
