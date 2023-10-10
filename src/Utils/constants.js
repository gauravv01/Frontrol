import messages from "../Utils/icons/messages.jpg";
import hash_key from "../Utils/icons/hash_key.png";
import window from "../Utils/icons/windows.png";
import android from "../Utils/icons/android.webp";
import cloud from "./icons/cloud.png";
import open_book from "./icons/open_book.png";
import telephone from "./icons/phone.png";
import twitter from "./icons/twitter.png";
import facebook from "./icons/facebook.png";
import google from "./icons/social.png";

export const navbarUtil = {
  // heading
  heading: "Grow",

  // options
  options: ["Tour", "Prices", "About", "F.A.Q.", "Support"],
};

export const mainUtil = {
  // heading
  heading: "Sample content can be shown here",

  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, arcu eget congue luctus, mauris nisi dignissim ligula.",

  exploreButton: "Explore",

  actionItems: {
    left: {
      messages: {
        icon: messages,
        heading: "Lorem ipsum dolor",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet",
      },
      social: {
        icon: hash_key,
        heading: "Lorem ipsum dolor",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet",
      },
    },
    right: {
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, arcu eget congue luctus, mauris nisi dignissim ligula.",
      button: "Get Started",
      icons: [android, window, hash_key],
    },
  },
};

export const learnMoreUtil = {
  // heading
  heading: "Lorem ipsum dolor sit amet, consectetur",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, arcu eget congue luctus, mauris nisi dignissim",
  button: "Learn More",

  options: [
    {
      icon: cloud,
      heading: "Lorem ipsum dolor",
      content:
        "You'll get description of each component and learn how to connect and use them",
    },
    {
      icon: open_book,
      heading: "Lorem ipsum dolor",
      content:
        "At length one of them called out in a clear,polite,smooth dialect,not unlike in sound.",
    },
  ],
};

export const pricingUtil = {
  heading: "Simple & flexible pricing built for everyone",
  content: "Start with 14-day trial. No credit card needed. Cancel at anytime.",
  box: {
    heading: "Enterprise",
    perUser: "per user",
    perMonth: "per month",
    description:
      "All the features you need to keep your personal file safe,accessible, and easy to share.",
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
      "Advanced client billing",
    ],
    button: "Start Free Trial",
  },
};

export const contactUtil = {
  heading: "We'd Love to Hear from You",
  content:
    "Please submit your information and a Designmodo representative will get in touch with you",
  call: "Call sales at +1 555 505 5050",
  icon: telephone,
  helpHeading: "Help",
  help: "Need help? Don't hesitate to ask us anything. Email us directly info@designmodo.com or call us at 1-347-523-34-90.You can checkout out F.A.Q. and Help page to get more information about our products.",
  button: "Send a Message",
};

export const footerUtil = {
  // heading
  heading: "Grow",
  content: "Be sure to take a look at our Terms of Use and Privacy Policy",
  icons: [twitter, facebook, google],

  options: [
    { heading: "Product", features: ["Features", "Pricing", "Tour"] },
    { heading: "Work", features: ["Our Portfolio", "Latest Work", "Brands"] },
    { heading: "Stuff", features: ["Privacy", "Support", "Help Desk", "FAQ"] },
    {
      heading: "Product",
      features: ["About us", "Blog", "Team", "Career", "Contact"],
    },
  ],
};
