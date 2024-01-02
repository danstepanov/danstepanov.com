import { Libre_Baskerville } from '@next/font/google'

import Container from '../components/Container'

const baskerville = Libre_Baskerville({
	subsets: ['latin-ext'],
	weight: "400",
});

export const metadata = {
	title: 'The Room',
	description: 'An elusive environment.',
	openGraph: {
		title: 'The Room',
		description: 'An elusive environment.',
		url: 'https://onlydans.gg/theroom',
		images: {
			url: 'https://onlydans.gg/api/theroom',
			alt: 'The Room',
			type: 'image/png',
			width: '1200',
			height: '630'
		},
		twitter: {
			card: 'summary_large_image',
			title: 'The Room',
			description: 'An elusive environment.',
			images: {
				url: 'https://onlydans.gg/api/theroom',
			}
		}
	}
}

export default function TheRoom() {
	const data = [
		`In the realm of startups and ambitious endeavors, there exists a concept known as "The Room." It is an elusive group of exceptionally talented individuals working on something of profound significance within a specific vertical or industry. The essence of The Room is not apparent from the outset; it reveals itself during the crucial period of “crunch time”, approximately two to three months before the anticipated launch. It is during this intense phase that the lofty ideals and grand visions initially set forth encounter the harsh realities and constraints that shape the final form of the product.`,
		`The Room is not bound by any particular industry, although notable examples from the gaming world come to mind. Think of the legendary Id Software team, whose groundbreaking work on Wolfenstein 3D and Doom forever transformed the landscape of first-person shooters. Consider also the iconic Bungie team, responsible for creating the seminal Halo trilogy, or the relentlessly dedicated individuals who brought us the first Xbox. The Room, however, transcends gaming, as it encompasses any field in which remarkable achievements are sought.`,
		`I personally experienced the transformative power of The Room while working on a startup called Evolve. Our mission was to revolutionize the fitness and nutrition landscape by delivering an unparalleled user experience. Operating out of a living room in Marina Del Rey, Los Angeles, the entire team gathered around a single table, pouring their collective talents into crafting an app that would set new standards in the industry. We devised a go-to-market strategy centered around partnering with influencers such as Sommer Ray, tailoring bespoke fitness and nutrition plans aligned with their personal brands. These plans would then be shared with their vast followings, amplifying our reach and impact.`,
		`As the launch deadline loomed closer, the weight of our promises and the magnitude of our endeavor became palpable. We discovered inconsistencies across various aspects of our product, including design, engineering, and content. The realization dawned upon us that delivering everything we had envisioned within the next few months was an impossible task. Faced with this challenge, we made the difficult decision to slash significant portions of functionality while focusing intensely on perfecting the core features that remained. The clock ticked relentlessly as we immersed ourselves in marathon work sessions, fueled by Chick-Fil-A orders and occasional PUBG gaming breaks, initiated by a team member shouting “Squad up!”`,
		`And then, in those final days, a magical moment unfolded. The realization swept through our tired yet exhilarated minds: "Holy shit, this is actually going to ship!" Our product was launched to the followers of our partnering influencers, and we reveled in the joy of witnessing our user base skyrocket from thousands to tens of thousands, then hundreds of thousands, and eventually surpassing a million. It was a triumph, a testament to the immense potential of what we had built and its profound impact on the fitness industry.`,
		`However, as success enveloped us, an unexpected challenge emerged—the birth of the War Room. Our overwhelming success strained our backend infrastructure to its limits, bringing our app to a grinding halt. Users were unable to create accounts or access the app, and reports of failures flooded in from the influencers we had collaborated with. In this moment of crisis, time stood still, the air filled with an eerie stillness and an overwhelming sense of stress. The team huddled together, their focus laser-like, as they sought a solution to this unexpected obstacle.`,
		`This predicament, the War Room, became a pivotal extension of The Room. It was a crucible where everyone scrambled, united by the shared objective of resolving the issue and saving our hard-earned success. The atmosphere mirrored the intensity depicted in an episode from HBO's Silicon Valley, titled “Two Days of the Condor,” where a viral tweet threatened to derail the launch of the team's streaming service. Swift code reworking in real-time became our salvation, enabling us to scale our infrastructure to cope with the deluge of requests. Looking back, I often ponder what could have been if the founders had skillfully managed the team and business beyond that initial triumph. Unfortunately, Y Combinator is correct in its assertion that a huge number of startups fail due to founder conflicts.`,
		`Those fortunate enough to have experienced The Room recognize it unmistakably. It is a feeling that permeates the air—a rare alchemy of talent, ambition, and purpose. The Room cannot be artificially created; it is a convergence of exceptional individuals who share an unwavering commitment to making a profound impact. Once you have been in The Room, it becomes challenging to find satisfaction in any other team dynamic. The rest of your life is spent in pursuit of that elusive state, forever yearning to return to The Room.`
	]

	return (
		<Container>
			<div className={`${baskerville.className} flex-col justify-center items-start max-w-2xl mx-auto mb-16`}>
				<h2 className="text-2xl font-bold leading-7 text-[#0089D0] sm:truncate sm:text-3xl sm:tracking-tight">The Room</h2>
				<br></br>
				<p className="text-gray-500 dark:text-white italic">June 2023</p>
				<br></br>
				{data.map((paragraph, index) => (
					<>
						{index === 6 ? (
							<>
								<p className="text-gray-500 dark:text-white">
									{`This predicament, the War Room, became a pivotal extension of The Room. It was a crucible where everyone scrambled, united by the shared objective of resolving the issue and saving our hard-earned success. The atmosphere mirrored the intensity depicted in an episode from HBO's Silicon Valley, titled `}
									<a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/watch?v=0a2lv4IwZFY&t=1s&ab_channel=StreetFXMotorsportTV">{paragraph.match(/ “Two Days of the Condor,”/g)}</a>
									{` where a viral tweet threatened to derail the launch of the team's streaming service. Similar to this episode, reworking the code in real-time became our salvation, enabling us to scale our infrastructure to cope with the deluge of requests. Looking back, I often ponder what could have been if the founders had skillfully managed the team and business beyond that initial triumph. Unfortunately, Y Combinator is correct in its assertion that a huge number of startups fail due to founder conflicts.`}
								</p>
								<br />
							</>
						)
							: (
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