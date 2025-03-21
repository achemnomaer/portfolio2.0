import blogCreateImg from "@/assets/projects/gec-admin/blog-create.png";
import blogImg from "@/assets/projects/gec-admin/blog.png";
import courseImg from "@/assets/projects/gec-admin/course.png";
import dashboardImg from "@/assets/projects/gec-admin/dashboard.png";
import counselingImg from "@/assets/projects/gec-admin/free-counseling.png";
import studentApplicationsImg from "@/assets/projects/gec-admin/student-applications.png";
import studentProfileImg from "@/assets/projects/gec-admin/student-profile.png";
import studentsImg from "@/assets/projects/gec-admin/students.png";
import successImg from "@/assets/projects/gec-admin/success-stories.png";

export const gecAdminPanel = {
  title: "CMS for Education Consultancy",
  description:
    "A robust CMS for managing student profiles, applications, dynamic content, and system operations. Built with a secure role-based authentication system and intuitive dashboard for easy management.",
  techStack: ["Tailwindcss", "Nextjs", "Node.js", "Express", "MongoDB"],
  githubLink: null,
  liveLink: null,
  projectImages: [
    dashboardImg,
    counselingImg,
    studentsImg,
    studentProfileImg,
    studentApplicationsImg,
    courseImg,
    successImg,
    blogImg,
    blogCreateImg,
  ],

  overview: {
    problemStatement:
      "The consultancy required a CMS to manage student profiles, applications, and course data, create and edit dynamic content, and oversee system operations. It needed to be secure, scalable, and easy to use for non-technical administrators.",
    solution:
      "Built a secure CMS with role-based access control and an intuitive interface. The CMS allows administrators to manage student profiles, track applications, monitor counseling bookings, and create dynamic content for the user-facing platform.",
  },
  keyFeatures: [
    "Student profile management with detailed academic and personal information",
    "Application management with real-time updates and tracking",
    "Content management for blogs, testimonials, and study destination pages",
    "Secure role-based authentication for admin and staff access",
    "Analytics dashboard for tracking user activity and system performance",
    "Dynamic content updates reflecting instantly on the user-facing website",
  ],
  challenges: [
    "Implementing secure role-based access control for different admin roles",
    "Designing a user-friendly CMS for non-technical staff",
    "Ensuring seamless integration between the admin panel and user-facing platform",
    "Optimizing application tracking workflows for administrators",
  ],
  learnings: [
    "Enhanced skills in designing and developing secure, role-based admin panels",
    "Gained experience in building scalable content and application management systems",
    "Learned best practices for syncing dynamic content and application data between systems",
  ],
};
