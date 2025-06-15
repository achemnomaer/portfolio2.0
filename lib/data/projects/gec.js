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
    {
      src: landingImg,
      caption: "Homepage showcasing services and destinations",
    },
    {
      src: courseImg,
      caption: "Course finder with search and filter options",
    },
    {
      src: statImg,
      caption: "Statistics and success metrics display",
    },
    {
      src: successImg,
      caption: "Student success stories and testimonials",
    },
    {
      src: dashboardImg,
      caption: "User dashboard for profile and applications",
    },
    {
      src: blogImg,
      caption: "Blog section with educational content",
    },
  ],
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
};
