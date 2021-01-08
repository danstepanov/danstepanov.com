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
            }
        ]
    }
}