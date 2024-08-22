import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, description, projects }) => (
	<>
		<h3 className={`font-bold text-xl mt-5 mb-1 ml-[2px] ${title.color ? `text-[${title.color}]` : "text-gray-400"}`}>{title.text}</h3>
		<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
			{description.text}
			<a className="text-[#0089D0]" href={description.href} target="_blank" rel="noopener noreferrer">{description.hrefText}</a>.
		</p>
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