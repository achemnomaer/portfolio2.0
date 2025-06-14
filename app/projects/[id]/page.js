import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const project = projects[Number.parseInt(params.id)];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Achem - Full Stack Developer`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const projectIndex = Number.parseInt(params.id);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
