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
  gallery: {
    title: "Photo Gallery",
    images: [
      imageUrl + "img6.webp",
      imageUrl + "img7.webp",
      imageUrl + "img8.webp",
    ],
  },
};
