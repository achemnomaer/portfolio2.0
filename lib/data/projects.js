// real estate images
import realEstateAddProperty from "@/assets/projects/anproperty/add_property.png";
import adminHome from "@/assets/projects/anproperty/admin_panel.png";
import adminAddProperty from "@/assets/projects/anproperty/admin_property_add.png";
import adminPropertyListing from "@/assets/projects/anproperty/admin_property_list.png";
import realEstateGetInTouch from "@/assets/projects/anproperty/get_in_touch.png";
import realEstateLanding from "@/assets/projects/anproperty/landing.png";
import realEstatePropertyDetails from "@/assets/projects/anproperty/property_details.png";
import {
  default as realEstatePropertyFilter,
  default as realEstatePropertyListing,
} from "@/assets/projects/anproperty/property_listing.png";

// Education consultancy images
import gecCourse from "@/assets/projects/gec/course.png";
import gecLanding from "@/assets/projects/gec/landing.png";

const projectsData = [
  {
    title: "Real Estate Website",
    description:
      "A dynamic real estate platform offering multi-language support and intuitive property browsing. The website includes property listings, filtering, and admin management features for seamless user and administrator experiences.",
    techStack: [
      "Tailwindcss",
      "Nextjs",
      "Python",
      "Django",
      "Django REST",
      "PostgreSQL",
    ],
    githubLink: null,
    liveLink: "https://realestate.anproperty.com",
    projectImages: [
      realEstateLanding,
      realEstatePropertyListing,
      realEstatePropertyFilter,
      realEstatePropertyDetails,
      realEstateAddProperty,
      realEstateGetInTouch,
      adminHome,
      adminAddProperty,
      adminPropertyListing,
    ],

    // Additional details for Project Details page
    overview: {
      problemStatement:
        "The client needed a bilingual real estate website where users could browse property listings, search by location, and contact agents. Additionally, they wanted an admin panel for managing listings and generating reports.",
      solution:
        "Developed a responsive real estate platform with two language support (English and Bangla). Implemented filtering and search features for users to easily find properties, along with a custom admin panel for the real estate company to manage listings.",
    },
    keyFeatures: [
      "Multi-language support (English and Bangla)",
      "Responsive design for mobile and desktop",
      "Advanced property search and filtering",
      "Custom admin panel for managing listings",
      "Property details page with gallery and map integration",
    ],
    challenges: [
      "Handling multi-language support with both static and dynamic content",
      "Optimizing database queries for fast property search results",
      "Ensuring cross-device compatibility for a smooth browsing experience",
    ],
    learnings: [
      "Gained experience in optimizing multi-language support for a real-world application",
      "Learned how to integrate efficient database indexing to improve search performance",
    ],
    architecture: {
      frontend: "Next.js for dynamic page generation and fast loading times",
      backend:
        "Django and Django REST Framework to manage property listings and API calls",
      database: "PostgreSQL for storing and retrieving property data",
      externalAPIs:
        "Integrated Google Maps API for displaying property locations",
    },
  },

  {
    title: "Education Consultancy Website",
    description:
      "A dynamic real estate platform offering multi-language support and intuitive property browsing. The website includes property listings, filtering, and admin management features for seamless user and administrator experiences.",
    techStack: [
      "Tailwindcss",
      "Nextjs",
      "Python",
      "Django",
      "Django REST",
      "PostgreSQL",
    ],
    githubLink: null,
    liveLink: "https://realestate.anproperty.com",
    projectImages: [gecLanding, gecCourse],

    // Additional details for Project Details page
    overview: {
      problemStatement:
        "The client needed a bilingual real estate website where users could browse property listings, search by location, and contact agents. Additionally, they wanted an admin panel for managing listings and generating reports.",
      solution:
        "Developed a responsive real estate platform with two language support (English and Bangla). Implemented filtering and search features for users to easily find properties, along with a custom admin panel for the real estate company to manage listings.",
    },
    keyFeatures: [
      "Multi-language support (English and Bangla)",
      "Responsive design for mobile and desktop",
      "Advanced property search and filtering",
      "Custom admin panel for managing listings",
      "Property details page with gallery and map integration",
    ],
    challenges: [
      "Handling multi-language support with both static and dynamic content",
      "Optimizing database queries for fast property search results",
      "Ensuring cross-device compatibility for a smooth browsing experience",
    ],
    learnings: [
      "Gained experience in optimizing multi-language support for a real-world application",
      "Learned how to integrate efficient database indexing to improve search performance",
    ],
    architecture: {
      frontend: "Next.js for dynamic page generation and fast loading times",
      backend:
        "Django and Django REST Framework to manage property listings and API calls",
      database: "PostgreSQL for storing and retrieving property data",
      externalAPIs:
        "Integrated Google Maps API for displaying property locations",
    },
  },
];

export default projectsData;

const hello = [
  {
    title: "Gift Store - eCommerce Website",
    description:
      "It is a comprehensive and secure eCommerce gift store, offering a seamless shopping experience. The platform includes an authentication system for secure logins, a fully functional cart, and smooth checkout and payment options, ensuring a user-friendly and efficient shopping journey. This was a personal project created to showcase in my portfolio.",
    techStack: ["Tailwindcss", "Nextjs", "Python", "Django", "Django Rest"],
    githubLink: "https://github.com/achemnomaer/gift-store-frontend", // replace with actual link
    liveLink: "https://gift-store-phi.vercel.app/", // replace with actual live link
    //projectImage: giftImg, // project image

    // Additional details for Project Details page
    overview: {
      problemStatement:
        "To showcase a personal eCommerce project demonstrating secure shopping features like user authentication, a functional cart, and smooth payment integration.",
      solution:
        "Developed a user-friendly and secure eCommerce platform with an emphasis on efficient shopping processes, seamless checkout, and user account management.",
    },
    keyFeatures: [
      "User authentication with secure login and registration",
      "Fully functional cart and checkout process",
      "Payment gateway integration",
      "Responsive design for optimal experience on all devices",
      "Account management for order history and address management",
    ],
    challenges: [
      "Implementing secure user authentication and payment integration",
      "Ensuring smooth state management for cart items and user sessions",
      "Optimizing the site for both mobile and desktop experiences",
    ],
    learnings: [
      "Gained experience in building secure authentication systems",
      "Enhanced skills in integrating third-party payment gateways",
      "Improved state management practices for eCommerce platforms",
    ],
    architecture: {
      frontend: "Next.js for dynamic rendering and fast page load times",
      backend:
        "Django and Django REST Framework for handling product data and API",
      database: "PostgreSQL for storing user and product data",
      externalAPIs: "Integrated Stripe API for payment processing",
    },

    futureImprovements: [
      "Adding more advanced search and filtering options",
      "Implementing product reviews and ratings",
      "Introducing a loyalty program for frequent buyers",
    ],
  },
  {
    title: "Weather website",
    description:
      "It is a dynamic and responsive weather forecasting website designed to provide users with real-time weather information. ",
    techStack: ["Tailwindcss", "Nextjs", "Open-Meteo API"],
    githubLink: "https://github.com/achemnomaer/weather",
    liveLink: "https://weather-rho-ashen.vercel.app/",
    //projectImage: weatherImg,
  },
  {
    title: "Portfolio website",
    description:
      "It is a dynamic and responsive portfolio website designed to showcase my projects, skills, and professional journey. ",
    techStack: ["Tailwindcss", "Nextjs", "Framer Motion"],
    githubLink: "https://github.com/achemnomaer/ahn",
    liveLink: "#",
    //projectImage: portfolioImg,
  },
];
