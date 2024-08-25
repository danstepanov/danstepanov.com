"use client";
import React from 'react'

import Container from "./components/Container"
import Essay from "./components/Essay"
import ProjectSection from './components/ProjectSection';
import SpeakingSection from './components/SpeakingSection';

const sections = [
	{
		title: {
			text: "Current Projects",
		},
		description: {
			text: "At the moment, I'm focused on helping developers build better and faster",
			href: undefined,
			hrefText: undefined
		},
		projects: [
			{
				id: 0,
				title: "NativeWindUI",
				description: "Carefully crafted components & templates that strive for a native look & feel.",
				href: "https://nativewindui.com",
				icon: "nativewindui",
				labelTitle: "Author",
				oss: false
			},
			{
				id: 1,
				title: "NativeWind",
				description: "Tailwind CSS for React Native.",
				href: "https://nativewind.dev",
				icon: "react-native",
				labelTitle: "Maintainer"
			},
		]
	},
	{
		title: {
			text: "Client Work",
		},
		description: {
			text: "I'm always looking for new opportunities to make impactful contributions to developer and user experiences. If you're interested in working together, ",
			href: "mailto: dan@danstepanov.com",
			hrefText: "shoot me a message"
		},
		projects: [
			{
				id: 2,
				title: "Sole Retriever",
				description: "All things sneakers, all in one place.",
				href: "https://soleretriever.com/",
				icon: "sole-retriever",
			},
			{
				id: 3,
				title: "Ambrook",
				description: "Accounting software that helps you run a better farm.",
				href: "https://ambrook.com/",
				icon: "ambrook",
			},
		],

	},
	{
		title: {
			text: "Open Source"
		},
		description: {
			text: "I strongly believe in contributing to community tooling, you can ",
			href: "https://github.com/sponsors/danstepanov",
			hrefText: "support my work here"
		},
		projects: [
			{
				id: 4,
				title: "NativeWind",
				description: "Tailwind CSS for React Native.",
				href: "https://nativewind.dev",
				icon: "nativewind",
				labelTitle: "Maintainer"
			},
			{
				id: 5,
				title: "Create Expo Stack",
				description: "The most configurable way to create a React Native app with Expo.",
				href: "https://rn.new",
				icon: "ces",
				labelTitle: "Author"
			}
		],
	},
	{
		title: {
			text: "YC Companies",
			color: "#f26625"
		},
		description: {
			text: "I seem to have a tendency to do YC stuff",
			href: undefined,
			hrefText: undefined
		},
		projects: [
			{
				id: 7,
				title: "Expo (YC S16)",
				description: "Make any app. Run it everywhere. Build one project that runs natively on all your users' devices.",
				href: "https://www.expo.dev/",
				icon: "expo",
			},
			{
				id: 8,
				title: "Topline Pro (YC W21)",
				description: "Topline Pro makes it easier to grow your business and spend more time in the field, rather than the office.",
				href: "https://www.toplinepro.com/",
				icon: "prophone",
				labelTitle: "Founder"
			},
			{
				id: 9,
				title: "Marble (YC S19)",
				description: "Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization.",
				href: null,
				icon: "marble",
			},
		],
	},
	{
		title: {
			text: "Startups",
		},
		description: {
			text: "Occasionally, I'll do some non-YC stuff though",
			href: undefined,
			hrefText: undefined
		},
		projects: [
			{
				id: 10,
				title: "Sondors EV",
				description: "An electric self- and remote-driving vehicle that is aimed at being affordable for the average person.",
				href: null,
				icon: "sondors",
			},
			{
				id: 11,
				title: "Slice Capital",
				description: "SEC and FINRA-approved funding platform providing startup investment to the masses.",
				href: null,
				icon: "slice",
				labelTitle: "Founder"
			},
		],
	}
];

const essays = [
	{
		title: "Lucky",
		description: "I was born in 1990, 2 weeks after my pregnant and 18 year old mother landed alone in the US, from the collapsing Soviet Union. At the cost of her 20s, my young mother was incredibly busy raising 2 kids",
		href: "/lucky"
	},
	{
		title: "The Room",
		description: "In the realm of startups and ambitious endeavors, there exists a concept known as \"The Room.\" It is an elusive group of exceptionally talented  individuals working on something of profound significance",
		href: "/room"
	}
];

const Header = () => (
	<>
		<h1 className="animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-400% bg-clip-text md:text-5xl text-4xl font-bold text-transparent">Oh hai, I'm Dan</h1>
		<div className="flex flex-row flex-wrap mt-4">
			<div className="text-gray-500 dark:text-white text-lg">
				I’ve been building apps for over 10 years. I primarily focus on empowering people through technology and I care a lot about crafting incredible user and developer experiences. While I’ve built products in fintech, political tech, I prefer to focus on developer tooling. I’ve founded and worked at numerous YC companies.
			</div>
			<div className="text-gray-500 dark:text-white text-lg mt-4">
				Over the last 8 years, I’ve been building with and contributing to <a href="https://expo.dev" className="text-[#0089D0]">Expo</a> and <a href="https://reactnative.dev" className="text-[#0089D0]">React Native</a>.&nbsp; Over the last 2 years, I’ve been focused on making the process of building with these technologies simpler and more powerful.</div>
		</div>
	</>
);

const Home = () => (
	<Container>
		<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
			<Header />
			
			<h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-6 text-black dark:text-white">
				I'm currently taking on new clients and projects.{' '}
				<a className="text-[#0089D0]" href={'mailto: dan@danstepanov.com'} target="_blank" rel="noopener noreferrer">Get in touch</a>
			</h2>

			<h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 text-black dark:text-white">Recent work</h2>

			{/* Projects Section */}
			{sections.map(section => <ProjectSection title={section.title} description={section.description} projects={section.projects} />)}

			<h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 text-black dark:text-white">Speaking events</h2>

			<SpeakingSection />

			{/* Essays Section */}
			<h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 text-black dark:text-white">Get to know me</h2>
			<h3 className="font-bold text-xl mt-5 mb-4 ml-[2px] text-gray-400">Blog</h3>
			{essays.map(essay => <Essay title={essay.title} description={essay.description} href={essay.href} />)}
			{/* <Timeline /> */}
			<h3 className="font-bold text-xl mt-5 ml-[2px] text-gray-400">Timeline</h3>
			<p className="text-base mb-3 mt-1 ml-[2px] text-black dark:text-white">
				{'Like a resume but with more words, '}
				<a className="text-[#0089D0]" href='/timeline' target="_blank" rel="noopener noreferrer">check it out</a>.
			</p>
		</div>
	</Container>
);

export default Home;