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
  liveLink: "https://www.anpropertybd.com/en",
  projectImages: [
    {
      src: landing,
      caption: "Homepage with property search and featured listings",
    },
    {
      src: filter,
      caption: "Advanced property filtering and search results",
    },
    {
      src: details,
      caption: "Detailed property view with gallery and specifications",
    },
    {
      src: getInTouch,
      caption: "Contact form for property inquiries",
    },
    {
      src: addProperty,
      caption: "Property submission form for sellers",
    },
    {
      src: adminHome,
      caption: "Admin dashboard overview",
    },
    {
      src: adminAddProperty,
      caption: "Admin property management interface",
    },
    {
      src: adminPropertyListing,
      caption: "Property listing management panel",
    },
  ],
  keyFeatures: [
    "Multi-language support (English and Bangla)",
    "Responsive design for mobile and desktop",
    "Advanced property search and filtering",
    "Custom admin panel for managing listings",
    "Property details page with gallery and map integration",
  ],
};
