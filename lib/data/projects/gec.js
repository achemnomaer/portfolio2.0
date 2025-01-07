import blogImg from "@/assets/projects/gec/blog.png";
import courseImg from "@/assets/projects/gec/course.png";
import landingImg from "@/assets/projects/gec/landing.png";
import statImg from "@/assets/projects/gec/stat.png";
import successImg from "@/assets/projects/gec/success.png";
import dashboardImg from "@/assets/projects/gec/user-dashboard.png";

export const gecProject = {
  title: "Education Consultancy Website",
  description:
    "A platform designed to help students explore study destinations, find courses, create profiles, and apply for programs. Built with a responsive, modern design and seamless user experience.",

  techStack: ["Tailwindcss", "Nextjs", "Node.js", "Express", "MongoDB"],
  liveLink: "https://gecare.co.uk",
  projectImages: [
    landingImg,
    courseImg,
    statImg,
    successImg,
    dashboardImg,
    blogImg,
  ],

  overview: {
    problemStatement:
      "The consultancy needed a single platform where students could create profiles, explore courses, shortlist programs, and apply to their desired universities. The platform also needed to provide information about study destinations and allow users to book counseling sessions.",
    solution:
      "Developed an intuitive platform that allows users to create personal profiles, manage shortlisted courses, and apply for programs. The platform also offers features like course search, study destination guides, and counseling bookings.",
  },
  keyFeatures: [
    "Dynamic course finder with advanced search and filter options",
    "Study destination guides for countries like the USA, UK, Canada, and Australia",
    "User profile creation for managing personal, academic, and test score information",
    "Ability to shortlist courses and track them in the user dashboard",
    "Application creation for shortlisted courses with real-time updates",
    "Counseling booking system with real-time availability",
    "Testimonials from past students to build trust",
    "Responsive and modern UI/UX for mobile and desktop users",
  ],
  challenges: [
    "Designing an intuitive profile creation process for users",
    "Ensuring seamless integration of profile data with course shortlisting and application management",
    "Building a scalable application tracking system",
    "Maintaining responsive design across different devices and browsers",
  ],
  learnings: [
    "Gained expertise in designing user-friendly profile and application management systems",
    "Enhanced skills in building scalable and efficient data flows for multi-step user interactions",
    "Improved knowledge of maintaining responsive, dynamic user interfaces for complex workflows",
  ],
};
