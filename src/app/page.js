"use client";
import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Container from "./components/Container"
import ProjectCard from "./components/ProjectCard"
import Timeline from "./components/Timeline"

const Header = () => (
	<>
		<h1 className="animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-400% bg-clip-text md:text-5xl text-4xl font-bold text-transparent">Oh hai, I'm Dan</h1>
		<div className="flex flex-row flex-wrap mt-4">
			<p className="text-gray-500 dark:text-white text-xl italic">I'm exploring new projects&nbsp;</p>
		</div>
		<a className="text-[#0089D0] text-xl" href="https://twitter.com/danstepanov">Let's chat</a>
	</>
);

const CurrentProjectsSection = () => {
	const [currentProjects] = useState([
		// {
		// 	id: 0,
		// 	title: "NativeWindUI",
		// 	description: "Coming soon...",
		// 	href: "https://nativewindui.com",
		// 	icon: "nativewind",
		// 	oss: false
		// },
		{
			id: 0,
			title: "The Next Thing",
			description: "Ship apps fast af with Expo and Next.js.",
			href: "https://thenextth.ing",
			icon: "nextthing",
			type: "devtools",
			labelTitle: "Creator"
		},
		{
			id: 1,
			title: "Create Expo Stack",
			description: "The most configurable way to create a React Native app with Expo.",
			href: "https://createexpostack.com",
			icon: "ces",
			type: "oss",
			labelTitle: "Creator"
		},
		{
			id: 2,
			title: "Snackify",
			description: "Turn any local Expo project into a sharable url via Expo Snack.",
			href: "https://github.com/danstepanov/expo-snackify",
			icon: "expo",
			type: "oss",
			labelTitle: "Creator"
		},
		{
			id: 3,
			title: "Ambrook",
			description: "Accounting software that helps you run a better farm",
			href: "https://ambrook.com/",
			icon: "ambrook",
			type: "client"
		},
		{
			id: 4,
			title: "Expo (YC S16)",
			description: "Make any app. Run it everywhere. Build one project that runs natively on all your users' devices.",
			href: "https://www.expo.dev/",
			icon: "expo",
			type: "yc"
		},
		{
			id: 5,
			title: "Topline Pro (YC W21)",
			description: "Topline Pro makes it easier to grow your business and spend more time in the field, rather than the office.",
			href: "https://www.toplinepro.com/",
			icon: "prophone",
			type: "yc",
			labelTitle: "Founder"
		},
		{
			id: 6,
			title: "Marble (YC S19)",
			description: "Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization.",
			href: "https://apps.apple.com/us/app/marble-kiosk/id1495734829",
			icon: "marble",
			type: "yc"
		},
		{
			id: 7,
			title: "Sondors EV",
			description: "An electric self- and remote-driving vehicle that is aimed at being affordable for the average person.",
			href: "https://www.sondors.com/",
			icon: "sondors",
			type: "other",
		},
		{
			id: 8,
			title: "Slice Capital",
			description: "SEC and FINRA-approved funding platform providing startup investment to the masses.",
			href: null,
			icon: "slice",
			type: "other",
			labelTitle: "Founder"
		},
	])
	return (
		<>
			<h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 text-black dark:text-white">Recent work</h2>
			<h3 className="font-bold text-xl mt-5 mb-1 ml-[2px] text-gray-400">Developer Tools</h3>
			<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
				At the moment, I'm focused on helping developers build better and faster.
			</p>
			{currentProjects.map(project => {
				if (project.type === "devtools") {
					return (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							href={project.href}
							icon={project.icon}
							labelTitle={project.labelTitle}
						/>
					)
				} else {
					return null;
				}
			})}
			<h3 className="font-bold text-xl mt-5 mb-1 ml-[2px] text-gray-400">Client Work</h3>
			<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
				I'm always looking for new opportunities to make impactful contributions to developer and user experiences. If you're interested in working together,{' '}
				<a className="text-[#0089D0]" href="mailto:dan@danstepanov.com">shoot me a message</a>.
			</p>
			{currentProjects.map(project => {
				if (project.type === "client") {
					return (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							href={project.href}
							icon={project.icon}
							labelTitle={project.labelTitle}
						/>
					)
				} else {
					return null;
				}
			})}
			<h3 className="font-bold text-xl mt-5 mb-1 ml-[2px] text-gray-400">Open Source</h3>
			<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
				{'I strongly believe in contributing to community tooling, '}
				<a className="text-[#0089D0]" href="https://github.com/sponsors/danstepanov" target="_blank" rel="noopener noreferrer">you can support my work here</a>.
			</p>
			{currentProjects.map(project => {
				if (project.type === "oss") {
					return (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							href={project.href}
							icon={project.icon}
							labelTitle={project.labelTitle}
						/>
					)
				} else {
					return null;
				}
			})}
			<h3 className="font-bold text-xl mt-5 mb-1 ml-[2px] text-[#f26625]">YC Startups</h3>
			<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
				I seem to have a tendency to do YC stuff...
			</p>
			{currentProjects.map(project => {
				if (project.type === "yc") {
					return (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							href={project.href}
							icon={project.icon}
							labelTitle={project.labelTitle}
						/>
					)
				} else {
					return null;
				}
			})}
			<h3 className="font-bold text-xl mt-5 mb-1 ml-[2px] text-gray-400">Other Startups</h3>
			<p className="text-base mb-3 ml-[2px] text-black dark:text-white">
				Occasionally, I'll do some non-YC stuff though.
			</p>
			{currentProjects.map(project => {
				if (project.type === "other") {
					return (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							href={project.href}
							icon={project.icon}
							labelTitle={project.labelTitle}
						/>
					)
				} else {
					return null;
				}
			})}
		</>
	)
};

const EssaysSection = () => (
	<>
		<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Essays</h3>
		<a href="/lucky" className="flex flex-row min-w-0 py-4 px-6 border-gray-200 hover:shadow border rounded dark:border-gray-800 w-full justify-between">
			<div className="flex flex-col">
				<div className="flex items-center">
					<p className="text-lg font-bold leading-6 text-[#0089D0] dark:text-white">Lucky</p>
				</div>
				<div className="mt-1 flex items-center gap-x-2 leading-5 text-gray-700 dark:text-gray-500">
					<div className="max-w-xs md:max-w-sm">
						<p className='line-clamp-3 text-gray-500 dark:text-gray-400'>I was born in 1990, 2 weeks after my pregnant and 18 year old mother landed alone in the US, from the collapsing Soviet Union. At the cost of her 20s, my young mother was incredibly busy raising 2 kids</p>
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<ChevronRightIcon className="h-6 w-6 flex-none text-gray-500 dark:text-white" aria-hidden="true" />
			</div>
		</a>
		<a href="/theroom" className="mt-4 flex flex-row min-w-0 py-4 px-6 border-gray-200 hover:shadow border rounded dark:border-gray-800 w-full justify-between">
			<div className="flex flex-col">
				<div className="flex items-center">
					<p className="text-lg font-bold leading-6 text-[#0089D0] dark:text-white">The Room</p>
				</div>
				<div className="mt-1 flex items-center gap-x-2 leading-5 text-gray-700 dark:text-gray-500">
					<div className="max-w-xs md:max-w-sm">
						<p className='line-clamp-3 text-gray-500 dark:text-gray-400'>In the realm of startups and ambitious endeavors, there exists a concept known as "The Room." It is an elusive group of exceptionally talented  individuals working on something of profound significance</p>
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<ChevronRightIcon className="h-6 w-6 flex-none text-gray-500 dark:text-white" aria-hidden="true" />
			</div>
		</a>
	</>
);


export default function Home() {
	return (
		<Container>
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<Header />
				<CurrentProjectsSection />
				<EssaysSection />
				<Timeline />
			</div>

		</Container>
	)
}
