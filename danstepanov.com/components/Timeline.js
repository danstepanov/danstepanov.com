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
            <Step title="Launched Westside Story">
                Built a close-knit community of 50+ good humans that really helped me get through a personally challenging year.
            </Step>
        </ul>
        <Year>2018</Year>
        <ul>
            <Step title="Moved to LA">
                It was really cold in New York.
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
            <Year>2020</Year>
            <ul>
                <Step title="Joined Marble">
                    Led the complete overhaul and full rewrite of Marble's user-facing application, moving it from Objective-C to React-Native and Typescript.
                </Step>
                <Step title="Supply LA Hospitals with Over 20k Face Shields">
                    Joined Crash Space in their efforts to centralize everyone in LA with a 3D printer to mass produce face shields during a nationwide shortage. The group now uses injection moldings which is way more effective.
                </Step>
                <Step title="Moved to Santa Monica 🌴">
                    Who doesn't love living right by the beach? Watching the sunset from Palisades Park is heavenly.
                </Step>
                <Step title="On Deck Fellowship">
                    Honored to join this incredibly supportive community of makers. I'm regularly inspired by the people I talk to within On Deck.
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