import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Oh hai, I'm Dan</h1>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Projects</h3>
        <ProjectCard title="ProPhone (YC W21)" description="ProPhone makes it easier to grow your business and spend more time in the field not in the office." href="https://www.prophone.com/" icon="prophone" />
        <ProjectCard title="Marble (YC S19)" description="Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization." href="https://www.marbletech.co/" icon="marble" />
        <ProjectCard title="CRASH Covid" description="A distributed network of people with 3D printers working to provide PPE to hospitals in the greater LA area." href="https://covid.crashspace.org/" icon="crashCovid" />
        <ProjectCard title="Slice Capital (acquired)" description="SEC and FINRA-approved funding platform providing startup investment to the masses." href="https://slice.capital" icon="slice" />
        <Timeline />
      </div>
    </Container>
  )
}
