module.exports = {
    async rewrites() {
        return [
            {
              source: '/resume',
              destination: '/resume.pdf',
            },
          ]
    },
    async redirects() {
        return [
            {
                source: '/connect',
                destination: 'https://calendly.com/fullcalendar',
                permanent: true
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/XS9qS2mvTR',
                permanent: true
            },
            {
                source: '/masterplan',
                destination: 'https://link.excalidraw.com/l/398AFcdY0wd/7YTJYwQift',
                permanent: true
            }
        ]
    },
}