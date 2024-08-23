import React from 'react';

import ProjectCard from './ProjectCard';

const SpeakingEvent = ({ id, title, description, href, icon, labelTitle }) => (
	<div className="mb-4">
		<ProjectCard
			key={id}
			title={title}
			description={description}
			href={href}
			icon={icon}
			labelTitle={labelTitle}
		/>
	</div>
	);

const SpeakingSection = () => {
  const talks = [
    {
		id: 0,
      	title: "Chain React 2024",
      	description: "I talk about the importance of building native feeling experiences.",
      	href: "https://www.youtube.com/watch?v=3UEQhdaWwus",
		icon: 'chain-react',
    },
    {
		id: 1,
      	title: "React Native Radio",
      	description: "I chat building developer tooling with Mazen, from the Infinite Red team.",
      	href: "https://www.youtube.com/watch?v=zJ584RPF3EE",
		icon: 'react-native',
    }
  ];

  return (
    <div className="mt-8 w-full">
      	{talks.map((talk, index) => <SpeakingEvent key={index} {...talk} />)}
    </div>
  );
};

export default SpeakingSection;
