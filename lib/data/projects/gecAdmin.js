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
  imageCaptions: [
    "Admin dashboard with key metrics",
    "Counseling session management",
    "Student profile management interface",
    "Individual student profile details",
    "Student application tracking system",
    "Course management panel",
    "Success stories content management",
    "Blog management interface",
    "Blog creation and editing tools"
  ],
  keyFeatures: [
    "Student profile management with detailed academic and personal information",
    "Application management with real-time updates and tracking",
    "Content management for blogs, testimonials, and study destination pages",
    "Secure role-based authentication for admin and staff access",
    "Analytics dashboard for tracking user activity and system performance",
    "Dynamic content updates reflecting instantly on the user-facing website",
  ],
};