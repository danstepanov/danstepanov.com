"use client";
import { useState } from 'react'

const Divider = () => (
	<div className="border border-gray-200 w-full my-8 dark:border-gray-600" />
)

const Year = ({ children }) => (
	<h3 className="text-lg md:text-lg font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
		{children}
	</h3>
)

const Step = ({ title, children }) => (
	<li className="mb-4 ml-2">
		<div className="flex items-center mb-2 text-green-700 dark:text-green-300">
			<span className="sr-only">Check</span>
			<svg className="h4 w-4 mr-2" viewBox="0 0 24 24">
				<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
					<path d="M22 4L12 14.01l-3-3" />
				</g>
			</svg>
			<p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
		</div>
		<p className="text-gray-700 ml-6 dark:text-gray-400">{children}</p>
	</li>
)

const FullTimeline = () => (
	<>
		<Divider />
		<Year>2020</Year>
		<ul>
			<Step title="On Deck Fellowship 🙌">
				Honored to join this incredibly supportive community of makers. I'm regularly inspired by the people I talk to within On Deck.
			</Step>
			<Step title="Moved to Santa Monica 🌴">
				Who doesn't love living right by the beach? Watching the sunset from Palisades Park is heavenly.
			</Step>
			<Step title="Supply LA Hospitals with Over 20k Face Shields 😷">
				Joined Crash Space in their efforts to centralize everyone in LA with a 3D printer to mass produce face shields during a nationwide shortage. The group now uses injection moldings which is way more effective.
			</Step>
			<Step title="Joined Marble (YC S19) 👨‍💻">
				Led the complete overhaul and full rewrite of Marble's user-facing application, moving it from Objective-C to React-Native and Typescript.
			</Step>
		</ul>
		<Divider />
		<Year>2019</Year>
		<ul>
			<Step title="Launched Westside Story 🤗">
				Built a close-knit community of 50+ good humans that really helped me get through a personally challenging year.
			</Step>
		</ul>
		<Divider />
		<Year>2018</Year>
		<ul>
			<Step title="Product of the Day on Product Hunt 🚀">
				Upon launching Slice Capital on Product Hunt, we got over 1k upvotes!
			</Step>
			<Step title="Moved to LA 🏝️" />
		</ul>
		<Divider />
		<Year>2017</Year>
		<ul>
			<Step title="Started Slice Capital 🍊">
				Recent regulations made it possible for regular people to invest in startups and I set out to make that possible. This was my first time building out an entire platform from scratch. I used React, Apollo, GraphQL, Serverless, and Postgres.
			</Step>
		</ul>
		<Divider />
		<Year>2016</Year>
		<ul>
			<Step title="Traveled through Asia with Hacker Paradise 🌏">
				Traveled with a group of about 40 through Korea, Japan, Thailand, and Indonesia. This was one of the most fun experiences of my life.
			</Step>
			<Step title="Joined Make School (YC W12) 🕹️">
				Taught high school students how to build games with Swift in order to prepare them for working at FAANG companies or starting their own companies.
			</Step>
		</ul>
		<Divider />
		<Year>2015</Year>
		<ul>
			<Step title="Moved to Palo Alto 🦄" />
			<Step title="Graduated from Penn State 🎓">
				Got my chemical engineering degree and my student debt, I was now a full-fledged adult.
			</Step>
			<Step title="Won the Evernote API Prize and placed top 10 at MHacks 3 (University of Michigan) 🎊" />
		</ul>
		<Divider />
		<Year>2014</Year>
		<ul>
			<Step title="Won the Whisper API Prize at Hacktech (Caltech) 🎉" />
			<Step title="Won the Top Cash Prize at MHacks 2 (University of Michigan) 🤯">
				MHacks 2 was my first hackathon and my first dive back into coding since highschool. Hackathons were an eye-opening experience for me. For the first time in my life, it seemed like the adults were coming to the kids for answers. I was inspired by the notion that regardless of your age, gender, personal beliefs, etc, if you were good at programming, people listened. It seemed that for every hour I put into developing this skill, it propelled me forward. <a style={{ color: 'blue' }} href="https://medium.com/this-side-of-park/five-months-of-innovation-dbc49f52dad0">I was hooked</a>. RIP to my GPA.
			</Step>
			<Step title="Raised $5K for my First Company 💰">
				I spent a summer in Seattle working with a community of angel investors called ZINO Society. After pitching my college startup idea (Amplified) around, I was able to land a $5K angel investment from 2 of the members. This may not seem like much but, to me, it was world changing. That startup eventually failed but the lessons I learned in both that summer and in running Amplified became the foundation of my entrepreneurial journey. A massive thank you to Maureen and Robert O'Hara for taking a chance on me, it meant the world.
			</Step>
		</ul>
		<Divider />
		<Year>2008</Year>
		<ul>
			<Step title="Built my First Game 🎮">
				I wasn't aware of it at the time but I used BASIC to build a Family Guy themed text-based adventure game on my TI-83 Plus calculator. Afterwards, a classmate deleted 30 lines of code and I stopped coding until college.
			</Step>
		</ul>
		<Divider />
		<Year>2006</Year>
		<ul>
			<Step title="Early Tumor Detection Research at the University of Pennsylvania 🔬">
				The key to curing cancer is early detection. When it comes to detecting early tumor development, a trademark indicator is low oxygen levels. I got the chance to work alongside <a style={{ color: 'blue' }} href="https://www.chem.upenn.edu/profile/sergei-vinogradov">Dr. Sergei Vinogradov</a> and his team of brilliant researchers at the Stellar Chance Labs to 3D map oxygen distribution throughout the body based on <a style={{ color: 'blue' }} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2440920/">his work with phosphorescence quenching</a>. I am incredibly thankful to have had this opportunity.
			</Step>
		</ul>
		<Divider />
		<Year>2002</Year>
		<ul>
			<Step title="Built my First Computer 🖥️">
				With my uncle's help, I scoured the shelves of spare parts being sold by pop-up vendors in massive parking lots. Used what I could afford to assemble my first tower with a whopping 32gb hard drive!
			</Step>
		</ul>
		<Divider />
		<Year>1990</Year>
		<ul>
			<Step title="Born 👶🏼" />
		</ul>
	</>
)

const Timeline = () => {
	const [isShowingFullTimeline, showFullTimeline] = useState(false)

	return (
		<>
			<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-gray-500 dark:text-white">Timeline</h3>
			<Year>2022</Year>
			<ul>
				<Step title="Started working on Expo">
					After using Expo for years both for myself and to teach kids, I was excited to join the team and help build the future of mobile development.
				</Step>
				<Step title="Created Snack for That">
					Over the years, I've found myself reusing a lot of the same components and patterns in my apps. I wanted to create a place where I could share these with the community and learn from others.
				</Step>
			</ul>
			<Divider />
			<Year>2021</Year>
			<ul>
				<Step title="Started working on an electric car ⚡">
					After putting everything I had into ProPhone, I found myself working with some amazing engineers on a self-driving electric car for the LA Auto Show. It felt amazing to hear people say it was the most innovative thing at the car show and we're now working to bring it into production.
				</Step>
				<Step title="Graduated Y-Combinator W21 and launched ProPhone 🚀">
					After 12 weeks of the hardest work I've ever done, we launched a platform that solves the massive communication problem faced by home-service professionals.
				</Step>
				<Step title="Joined Y-Combinator W21 🟧">
					Fulfilled a dream I had since college by being accepted into Y-Combinator! Such an incredibly rewarding experience.
				</Step>
				<Step title="Launched New Website 🎉">
					New website, who dis? This website is built using NextJS, TailwindCSS, and is deployed via Vercel. I'm looking forward to adding a lot more to it over the coming weeks!
				</Step>
			</ul>
			{isShowingFullTimeline ? (
				<FullTimeline />
			) : (
				<button type="button" className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100" onClick={() => showFullTimeline(true)}>
					See More
					<svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>
			)}
		</>
	)
}

export default Timeline