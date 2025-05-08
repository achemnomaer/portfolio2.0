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
    landingImg,
    whyChooseUsImg,
    courseImg,
    syllabusImg,
    enrollImg,
  ],

  overview: {
    problemStatement:
      "Many Bangladeshi job seekers struggle with navigating the complex recruitment processes of multinational corporations due to a lack of structured preparation and guidance.",
    solution:
      "Job Jatraa offers a comprehensive bootcamp—'Mastering MNC Assessments'—that provides expert-led sessions, practical training, and community support to equip candidates with the necessary skills and confidence to succeed.",
  },
  keyFeatures: [
    "4-week bootcamp covering every stage of MNC recruitment",
    "Expert-led live sessions on ATS-optimized CVs, assessments, and interviews",
    "Practical skill-building with mock tests and real-time feedback",
    "Access to a community of peers and mentors for networking and support",
    "Affordable pricing with high-quality content",
    "Responsive design for seamless access across devices",
    "Dedicated support via WhatsApp and email",
  ],
  challenges: [
    "Designing a curriculum that effectively addresses the nuances of MNC hiring processes",
    "Ensuring engagement and retention in a fully online learning environment",
    "Building a scalable platform to accommodate growing user demand",
    "Maintaining affordability without compromising on content quality",
  ],
  learnings: [
    "Gained insights into the specific challenges faced by job seekers in Bangladesh",
    "Developed strategies for delivering impactful online training programs",
    "Enhanced understanding of user engagement in virtual learning platforms",
    "Learned to balance cost-effectiveness with high-quality content delivery",
  ],
};
