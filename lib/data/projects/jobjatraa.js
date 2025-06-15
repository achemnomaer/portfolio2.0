import courseImg from "@/assets/projects/jobjatraa/course.png";
import enrollImg from "@/assets/projects/jobjatraa/enroll.png";
import landingImg from "@/assets/projects/jobjatraa/landing.png";
import syllabusImg from "@/assets/projects/jobjatraa/syllabus.png";
import whyChooseUsImg from "@/assets/projects/jobjatraa/why-choose-us.png";

export const jobJatraaProject = {
  title: "Job Jatraa – Career Preparation Platform",
  description:
    "Job Jatraa is a Bangladesh-based career development platform offering structured bootcamps, expert mentorship, and community support to help job seekers excel in multinational recruitment processes.",
  techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
  liveLink: "https://jobjatraa.com",
  projectImages: [
    {
      src: landingImg,
      caption: "Homepage with bootcamp overview",
    },
    {
      src: whyChooseUsImg,
      caption: "Why choose us section highlighting benefits",
    },
    {
      src: courseImg,
      caption: "Course details and curriculum breakdown",
    },
    {
      src: syllabusImg,
      caption: "Detailed syllabus and learning outcomes",
    },
    {
      src: enrollImg,
      caption: "Enrollment process and pricing",
    },
  ],
  keyFeatures: [
    "4-week bootcamp covering every stage of MNC recruitment",
    "Expert-led live sessions on ATS-optimized CVs, assessments, and interviews",
    "Practical skill-building with mock tests and real-time feedback",
    "Access to a community of peers and mentors for networking and support",
    "Affordable pricing with high-quality content",
    "Responsive design for seamless access across devices",
    "Dedicated support via WhatsApp and email",
  ],
};
