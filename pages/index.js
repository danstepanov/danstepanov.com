import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-400% bg-clip-text md:text-5xl text-4xl font-bold text-transparent">Oh hai, I'm Dan</h1>
        <div className="flex flex-row flex-wrap mt-4">
          <p className="text-black dark:text-white">I'm exploring new projects, particularly in biotech and longevity&nbsp;</p>
        </div>
        <a className="text-blue-600" href="https://twitter.com/danstepanov">Let's chat</a>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Projects</h3>
        <ProjectCard title="Expo" description="Make any app. Run it everywhere. Build one project that runs natively on all your users' devices." href="https://www.expo.dev/" icon="expo" />
        <ProjectCard title="Sondors EV" description="An electric self- and remote-driving vehicle that is aimed at being affordable for the average person." href="https://www.sondorsx.com/" icon="sondors" />
        <ProjectCard title="ProPhone (YC W21)" description="ProPhone makes it easier to grow your business and spend more time in the field, rather than the office." href="https://www.prophone.com/" icon="prophone" />
        <ProjectCard title="Marble (YC S19)" description="Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization." href="https://apps.apple.com/us/app/marble-kiosk/id1495734829" icon="marble" />
        <ProjectCard title="CRASH Covid" description="A distributed network of people with 3D printers working to provide PPE to hospitals in the greater LA area." href="https://covid.crashspace.org/" icon="crashCovid" />
        <ProjectCard title="Slice Capital" description="SEC and FINRA-approved funding platform providing startup investment to the masses." icon="slice" />
        <Timeline />
      </div>
    </Container>
  )
}
