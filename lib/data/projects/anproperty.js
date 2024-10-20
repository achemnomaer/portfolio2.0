import addProperty from "@/assets/projects/anproperty/add_property.png";
import adminHome from "@/assets/projects/anproperty/admin_panel.png";
import adminAddProperty from "@/assets/projects/anproperty/admin_property_add.png";
import adminPropertyListing from "@/assets/projects/anproperty/admin_property_list.png";
import details from "@/assets/projects/anproperty/details.png";
import filter from "@/assets/projects/anproperty/filter.png";
import getInTouch from "@/assets/projects/anproperty/get_in_touch.png";
import landing from "@/assets/projects/anproperty/landing.png";

export const anpropertyProject = {
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
    landing,
    filter,
    details,
    getInTouch,
    addProperty,
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
};
