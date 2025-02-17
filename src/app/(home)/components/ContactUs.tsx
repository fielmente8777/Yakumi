import { Section } from "@/components";
import Form from "@/components/Form";
import { imageUrl } from "@/data/links";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Section>
      <Section className="bg-primary !py-8" id="contact_us">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8">
          <div className="col-span-1 w-full flex justify-end relative">
            <div className="absolute -top-[40%] w-full">
              <div className="relative w-full aspect-[4/4.8]">
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
