const ExternalLink = ({ href, children }) => (
    <a className="text-sm text-gray-500 hover:text-gray-600 transition dark:text-white" target="_blank" rel="noopener noreferrer" href={href}>
        {children}
    </a>
)

const Footer = () => (
    <footer className="flex flex-col items-center mb-8">
        <div className="flex space-x-4 mb-4">
            <ExternalLink href="https://twitter.com/danstepanov">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </g>
                </svg>
            </ExternalLink>
            <ExternalLink href="https://github.com/danstepanov">
                <span className="sr-only">Github</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </g>
                </svg>
            </ExternalLink>
            <ExternalLink href="mailto:dan+website@danstepanov.com">
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </g>
                </svg>
            </ExternalLink>
        </div>
    </footer>
)

export default Footer