const ProjectCard = ({ title, description, href, icon }) => (
    <a className="mb-4 hover:shadow" href={href} target="_blank" rel="noopener norefrerrer" aria-label={title}>
        <div className="flex items-center border border-gray-200 rounded p-4">
            {icon == "marble" && (
                <div className="h-8 w-8 ml-2 mr-4">
                    <span className="sr-only">Marble Kiosk</span>
                    <svg className="h-8 w-8 min-w-lg text-gray-900" viewBox="0 0 51 51" fill="none">
                        <g fill="currentColor">
                            <rect width="50" height="50" rx="25" />
                            <path d="M26.448 20.2118C28.8613 15.6638 28.6642 10.1737 25.931 5.81055L19.1423 18.4707C16.6857 23.052 16.8855 28.6011 19.6652 32.9939L26.448 20.2118ZM31.2558 32.4081C33.6691 27.8602 33.472 22.3701 30.7388 18.0069L23.9501 30.667C21.4935 35.2484 21.6933 40.7975 24.473 45.1903L31.2558 32.4081Z" fill="white" />
                        </g>
                    </svg>
                </div>
            )}
            {icon == "crashCovid" && (
                <div className="h-8 w-8 ml-2 mr-4">
                    <span className="sr-only">Crash COVID</span>
                    <svg className="h-8 w-8 min-w-sm text-gray-900" viewBox="0 0 51 51">
                        <g>
                            <path fill="none" d="M23.5,2.90635884 L44.3448863,37.5 L2.65511366,37.5 L23.5,2.90635884 Z" stroke="#000000" strokeWidth="3"></path>
                            <polygon points="20.5257845 15 19 21.8434902 23.505414 21.8434902 22.1540102 28 25.4780193 28 27 21.1394596 22.5901556 21.1394596 23.8783988 15"></polygon>
                            <polygon points="20 29 28 29 23.4728638 34"></polygon>
                        </g>
                    </svg>
                </div>
            )}
            <div>
                <h4 className="text-lg font-bold tracking-tight text-gray-900">{title}</h4>
                <p className="leading-5 text-gray-700">{description}</p>
            </div>
        </div>
    </a>
)

export default ProjectCard