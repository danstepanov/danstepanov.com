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
            },
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1buW1HhZNYH_oCLu-MTRBPlC0M3N3U9_h/view?usp=sharing',
                permanent: true
            }
        ]
    }
}