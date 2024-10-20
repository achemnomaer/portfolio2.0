import courseImg from "@/assets/projects/gec/course.png";
import landingImg from "@/assets/projects/gec/landing.png";
import statImg from "@/assets/projects/gec/stat.png";
import successImg from "@/assets/projects/gec/success.png";

export const gecProject = {
  title: "Education Consultancy Website",
  description:
    "A comprehensive platform designed to assist students in finding study abroad programs. The website includes course listings and an admin panel for managing course information and student inquiries.",
  techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
  liveLink: "Insert live link here",
  projectImages: [landingImg, courseImg, statImg, successImg],
  overview: {
    problemStatement:
      "The consultancy needed a platform where students could explore study abroad opportunities, find courses, and contact consultants for guidance. Additionally, they required an admin panel to manage the course data and student inquiries effectively.",
    solution:
      "Built a responsive platform where students can search for courses by country, field of study, and university. The admin panel enables easy management of course information and student inquiries.",
  },
  keyFeatures: [
    "Advanced course search and filtering options for students",
    "User-friendly inquiry form for students to get consultation",
    "Admin panel for managing courses, student inquiries, and generating reports",
    "Responsive design for both mobile and desktop users",
  ],
  challenges: [
    "Managing large datasets manually while maintaining a smooth user experience",
    "Creating an intuitive admin panel for non-technical staff to manage courses and inquiries",
  ],
  learnings: [
    "Enhanced understanding of backend and frontend collaboration in a team environment",
    "Gained experience in creating admin interfaces that are user-friendly for non-technical users",
  ],
  architecture: {
    frontend: "React.js for building dynamic and responsive user interfaces.",
    backend:
      "Express.js and Node.js for handling server requests and managing data flow between the frontend and the database.",
    database: "MongoDB for storing course and student data.",
  },
};
