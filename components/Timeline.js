import { useState } from 'react'

const Divider = () => (
    <div className="border border-gray-200 w-full my-8" />
)

const Year = ({ children }) => (
    <h3 className="text-lg md:text-lg font-bold mb-4 tracking-tight text-gray-900">
        {children}
    </h3>
)

const Step = ({ title, children }) => (
    <li className="mb-4 ml-2">
        <div className="flex items-center mb-2 text-green-700">
            <span className="sr-only">Check</span>
            <svg className="h4 w-4 mr-2" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                </g>
            </svg>
            <p className="font-medium text-gray-900">{title}</p>
        </div>
        <p className="text-gray-700 ml-6">{children}</p>
    </li>
)

const FullTimeline = () => (
    <>
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
            <Step title="Moved to LA 🏝️" />
        </ul>
        <Divider />
        <Year>2017</Year>
        <ul>
            <Step title="Joined Slice Capital 🍊">
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
        </ul>
        <Divider />
        <Year>2008</Year>
        <ul>
            <Step title="Built my First Game 🎮">
                I wasn't aware of it at the time but I used BASIC to build a Family Guy themed text-based adventure game on my TI-83 Plus calculator. Afterwards, a classmate deleted 30 lines of code and I stopped coding until college.  
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
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">Timeline</h3>
            <Year>2021</Year>
            <ul>
                <Step title="Launched New Website 🎉">
                    New website, who dis? This website is built using NextJS, TailwindCSS, and is deployed via Vercel. I'm looking forward to adding a lot more to it over the coming weeks!
                </Step>
            </ul>
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
            {isShowingFullTimeline ? (
                <FullTimeline />
            ) : (
                    <button type="button" className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900" onClick={() => showFullTimeline(true)}>
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