import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projects }) => (
	<>
		<h3 className={`font-bold text-xl mt-5 mb-1 ml-[2px] ${title.color ? `text-[${title.color}]` : "text-gray-400"}`}>{title.text}</h3>

		{projects.map(project => (
			<ProjectCard
				key={project.id}
				title={project.title}
				description={project.description}
				href={project.href}
				icon={project.icon}
				labelTitle={project.labelTitle}
			/>
		))}
	</>
);

export default ProjectSection;