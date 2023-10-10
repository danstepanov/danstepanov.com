import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Container from "../components/Container"
import ProjectCard from "../components/ProjectCard"
import Timeline from "../components/Timeline"
import Label from '@/components/Label'

export default function Home() {
  const [projects] = useState([
    {
      id: 0,
      title: "Create Expo Stack",
      description: "The easiest  and quickest way to initialize a typesafe React Native application with Expo.",
      href: "https://expostack.dev",
      icon: "expo"
    },
    {
      id: 1,
      title: "Snack for That",
      description: "A collection of Expo Snacks from various developers that explore useful and compelling functionality.",
      href: "https://snackforthat.com/",
      icon: "expo"
    },
    {
      id: 2,
      title: "Expo (YC S16)",
      description: "Make any app. Run it everywhere. Build one project that runs natively on all your users' devices.",
      href: "https://www.expo.dev/",
      icon: "expo"
    },
    {
      id: 3,
      title: "Sondors EV",
      description: "An electric self- and remote-driving vehicle that is aimed at being affordable for the average person.",
      href: "https://www.sondors.com/",
      icon: "sondors"
    },
    {
      id: 4,
      title: "Topline Pro (YC W21)",
      description: "Topline Pro makes it easier to grow your business and spend more time in the field, rather than the office.",
      href: "https://www.toplinepro.com/",
      icon: "prophone"
    },
    {
      id: 5,
      title: "Marble (YC S19)",
      description: "Cashier-free checkout at restaurants via elegant kiosks that allow thematic customization.",
      href: "https://apps.apple.com/us/app/marble-kiosk/id1495734829",
      icon: "marble"
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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Blog</h3>
        <a href="/theroom" className="flex flex-row min-w-0 py-4 px-6 border-gray-200 hover:shadow border rounded dark:border-gray-800 w-full justify-between">
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className="text-lg font-bold leading-6 text-black dark:text-white">The Room</p>
              <Label />
            </div>
            <div className="mt-1 flex items-center gap-x-2 leading-5 text-gray-700 dark:text-gray-500">
              <p className="max-w-xs md:max-w-sm">
                <p className='line-clamp-3'>In the realm of startups and ambitious endeavors, there exists a concept known as "The Room." It is an elusive group of exceptionally talented  individuals working on something of profound significance</p>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon className="h-6 w-6 flex-none text-black dark:text-white" aria-hidden="true" />
          </div>
        </a>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Projects</h3>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={project.href}
            icon={project.icon}
            isNew={project.title === "Create Expo Stack"}
          />
        ))}
        <Timeline />
      </div>
    </Container>
  )
}
