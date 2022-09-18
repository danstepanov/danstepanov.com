import React, { useState } from 'react'
import Container from "../components/Container"
import ProjectCard from "../components/ProjectCard"
import Timeline from "../components/Timeline"

export default function Home() {
  const [projects] = useState([
    {
      id: 0,
      title: "Snack for That",
      description: "A collection of Expo Snacks from various developers that explore useful and compelling functionality.",
      href: "https://snackforthat.com/",
      icon: "expo"
    },
    {
      id: 1,
      title: "Expo (YC S16)",
      description: "Make any app. Run it everywhere. Build one project that runs natively on all your users' devices.",
      href: "https://www.expo.dev/",
      icon: "expo"
    },
    {
      id: 2,
      title: "Sondors EV",
      description: "An electric self- and remote-driving vehicle that is aimed at being affordable for the average person.",
      href: "https://www.sondorsx.com/",
      icon: "sondors"
    },
    {
      id: 3,
      title: "ProPhone (YC W21)",
      description: "ProPhone makes it easier to grow your business and spend more time in the field, rather than the office.",
      href: "https://www.prophone.com/",
      icon: "prophone"
    },
    {
      id: 4,
      title: "Marble (YC S19)",
      description: "Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization.",
      href: "https://apps.apple.com/us/app/marble-kiosk/id1495734829",
      icon: "marble"
    },
    {
      id: 5,
      title: "CRASH Covid",
      description: "A distributed network of people with 3D printers working to provide PPE to hospitals in the greater LA area.",
      href: "https://covid.crashspace.org/",
      icon: "crashCovid"
    },
    {
      id: 6,
      title: "Slice Capital",
      description: "SEC and FINRA-approved funding platform providing startup investment to the masses.",
      href: null,
      icon: "slice"
    },
  ])

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-400% bg-clip-text md:text-5xl text-4xl font-bold text-transparent">Oh hai, I'm Dan</h1>
        <div className="flex flex-row flex-wrap mt-4">
          <p className="text-black dark:text-white text-xl">I'm exploring new projects&nbsp;</p>
        </div>
        <a className="text-blue-600 text-xl" href="https://twitter.com/danstepanov">Let's chat</a>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Projects</h3>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={project.href}
            icon={project.icon}
          />
        ))}
        <Timeline />
      </div>
    </Container>
  )
}
