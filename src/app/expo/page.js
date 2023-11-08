import Image from 'next/image'

import Container from '../components/Container'

export const metadata = {
	title: 'Expo',
	description: 'This is React! I know this!',
	openGraph: {
		title: 'Expo',
		description: 'This is React! I know this!',
		url: 'https://onlydans.gg/expo',
		images: {
			url: 'https://onlydans.gg/api/expo',
			alt: 'Expo',
			type: 'image/png',
			width: '1200',
			height: '630'
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Expo',
			description: 'This is React! I know this!',
			images: {
				url: 'https://onlydans.gg/api/expo',
			}
		}
	}
}

export default function Lucky() {
	const data = [
		`Building meaningful native experiences requires a certain model of thinking. A non trivial part of this model is understanding, for any given task, what chunk of the work is native and what chunk is business logic. Native work commands a knowledge of the given platform and its nuances while business logic pertains to how you want users to experience your application.`,
		`People generally come to Expo because they value spending most (if not all) of their time on the business logic, rather than the native work. They want to build/share something and Expo promises them that they can do so, without thinking too much about how these native platforms function.`,
		`Many of these people are developers. They might be mobile developers, web developers, or backend developers, but they’re all already on some developer journey. Being on a developer journey means that you have some understanding that things take time and that you won’t get it on the first try, learning is an iterative process. Even so, you will have a limit on the amount of friction that you encounter before you decide, at best, to pursue a different approach or, at worst, stop building altogether.`,
		`Mobile developers are best equipped to minimize this risk because they already have some framework of how these platforms work and how to break down a given task. Furthermore, they are the best equipped to understand the value that a tool like Expo brings. These are the folks most likely to advocate for Expo, become power users, and perhaps even contribute to Expo. This is the ideal journey/relationship between Expo and its users.`,
		`Web developers, particularly react developers, present the largest challenge to Expo’s customer journey and, subsequently, its image/brand. This is because web developers will generally hear the mobile developers singing Expo’s praise, how they’ll “never go back,” and the web devs will come to expect that Expo will completely abstract away everything for them, leaving only what they already know…React business logic. This is, at best, misleading and, at worst, incredibly damaging to Expo’s brand. Backend developers and those just getting started on their developer journey experience this as well, to varying degrees.`,
		``,
		`There is an incredible amount of opportunity, to craft iconic experiences, that lies between the above ideal experience and the experience that Expo currently delivers to people that are not seasoned mobile developers. These opportunities are not documentation and guides, they are products and tools that deliver on the vast potential of Expo tooling, with a focus on intuitive design/developer experience.`,
		`Create Expo Stack is one of these tools. There are many others still to build…`
	];

	return (
		<Container>
			<div className="flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<h2 className="text-2xl font-bold leading-7 text-[#0089D0] sm:truncate sm:text-3xl sm:tracking-tight">Expo</h2>
				<br></br>
				<p className="text-gray-500 dark:text-white italic">November 2023</p>
				<br></br>
				{data.map((paragraph, index) => (
					<>
						{index === 5 ? (
							<Image
								src="/react.png"
								alt="React"
								width={1920}
								height={1280}
								layout="responsive"
							/>
						) : (
							<>
								<p className="text-gray-500 dark:text-white">{paragraph}</p>
								<br />
							</>
						)}
					</>
				))}
			</div>
		</Container>
	)
}