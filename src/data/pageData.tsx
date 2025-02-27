import {
  AuthenticAsianFlavors,
  EffortlessOnlineOrdering,
  PremiumQuality
} from "@/icons/icons";
import { imageUrl } from "./links";

export const pageData = {
  bannerData: {
    title: "Bringing the Flavors of Asia to Your Plate",
    src: imageUrl + "img1.webp",
    desc: "Immerse yourself in the vibrant world of Asian flavors.Our dishes are designed to bring the best of Asia directly to your plate.",
    buttons: [
      {
        label: "Get in Touch",
        href: "#contact-us",
      },
      {
        label: "View Menu",
        href: "#",
      },
    ],
  },
  aboutUsData: {
    title: "About Us",
    subtitle: "Savor restaurant-quality dining, at home!",
    desc: "At Yakumi, we bring the authentic taste of Asian cuisine straight to your doorstep. As a modern cloud kitchen, we focus on delivering exceptional flavors, crafted with the finest ingredients, and made with traditional recipes that have been perfected over time. Our team of skilled chefs uses the freshest local produce, paired with premium spices and sauces, to create dishes that reflect the true essence of Chinese cooking. Come taste the tradition, convenience, and passion behind every dish – only at Yakumi.",
    src: imageUrl + "img2.webp",
    label: "contact us",
    href: "#contact-us",
  },
  features: {
    title: "Features",
    desc: "Premium Asian Cuisine Crafted to Your Cravings!",
    cards: [
      {
        id: 1,
        title: "Premium Quality",
        subtitle:
          "The quality and safety of our products is our top priority. We continue to quest for even greater product quality",
        icon: <PremiumQuality />,
      },
      {
        id: 2,
        title: "Authentic Asian Flavors",
        subtitle:
          "njoy bold, authentic Asian flavors expertly crafted with traditional ingredients and timeless recipes.",
        icon: <AuthenticAsianFlavors />,
      },
      {
        id: 3,
        title: "Effortless Online Ordering",
        subtitle:
          "Order your favorite Asian dishes with a few clicks on Swiggy & Zomato. Fast, simple, and delivered right to your door!",
        icon: <EffortlessOnlineOrdering />,
      },
    ],
  },
  ourFeatures: {
    title: "our FEATUREd dishes",
    desc: "Discover our signature dishes, expertly crafted for an unforgettable flavor experience!",
    images: [
      {
        id: 1,
        src: imageUrl + "img3.webp",
        title: "Non Veg Deluxe Ramen",
      },
      {
        id: 2,
        src: imageUrl + "img4.webp",
        title: "Non Veg Deluxe Ramen",
      },
      {
        id: 3,
        src: imageUrl + "img3.webp",
        title: "Non Veg Deluxe Ramen",
      },
    ],
  },
  testimonials: [
    {
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
    },

  ],
  gallery: {
    title: "Photo Gallery",
    images: [
      imageUrl + "img6.webp",
      imageUrl + "img7.webp",
      imageUrl + "img8.webp",
    ],
  },
};
