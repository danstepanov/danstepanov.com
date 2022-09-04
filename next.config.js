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
                source: '/job',
                destination: 'https://www.notion.so/Dan-s-Ideal-Job-8ff4e381a05e49e293ded913e213017b',
                permanent: true
            }
        ]
    }
}