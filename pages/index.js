import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">Oh hai, I'm Dan</h1>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8">Projects</h3>
        <ProjectCard title="Marble Kiosk" description="Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization." href="https://marblekiosk.com" icon="marble" />
        <ProjectCard title="CRASH Covid" description="A distributed network of people with 3D printers working to provide PPE to hospitals in the greater LA area." href="https://covid.crashspace.org/" icon="crashCovid" />
        <Timeline />
      </div>
    </Container>
  )
}
