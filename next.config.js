const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
    async redirects() {
        return [
            {
                source: '/connect',
                destination: 'https://calendly.com/fullcalendar',
                permanent: true
            },
            {
                source: '/meet',
                destination: 'https://cal.polymail.io/danhstepanov/meet',
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