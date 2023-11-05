import Head from 'next/head'
import Image from 'next/image'

import Container from '../components/Container'

export default function Lucky() {
    const data = [
        `For my uncle, my older brother.`,
        `I was born in 1990, 2 weeks after my pregnant and 18 year old mother landed alone in the US, from the collapsing Soviet Union. At the cost of her 20s, my young mother was incredibly busy raising 2 kids while going to school on a full scholarship given to only 2 women. She wasn’t back from classes before my sister and I finished school, so I ended up spending a lot of time with my uncle Kon. My earliest memories of this time are from around 1995, which would put him at about 16 years old, an age when you really start to come into your own, creatively. I like to think that all children are born curious about the world around them. At 5 years old, I sure was.`,
        `Throughout the 90s, consumer electronics were rapidly evolving and, although we were very poor, I was fortunate enough to get my hands on a couple of these magical devices. Meanwhile, Kon was studying art and exploring the advent of digital animation through various shorts, video games, and what seemed to me like a mountain of magazines and books covering a vast array of topics such as anime, graffiti, computer parts, popular rendering software, and the art styles of people like H.R. Geiger and George Miller. I spent a lot of time, perhaps a bit too much time, with Kon playing games via an emulator called Mame32 that he installed on my great grandfather’s computer. I still remember pissing off my parents because I would occasionally launch MSDOS trying to find those same games on my parents’ computer. They had no idea how to exit the shell and had to call my uncle to figure it out. I never ended up finding any games on their computer.`,
        `As I approached my teenage years, Kon began to expose me to the metal that made these video games and digital animations work. He taught me about transistors, GPUs, and he took me to the parking lots of local malls where they’d set up shelves filled to the brim with assorted computer parts that you could purchase. He sat there with an incredibly impatient 12 year old as we assembled my first computer, painstakingly attaching the heat sink to the single core Pentium processor. In between screenings of Terminator 2 and listening to The Police, he walked me through installing Windows XP and partitioning the hard drive, all the way through to that glorious first boot up. Although it was a frustrating process, I recognized a strong desire to push through and understand how it worked.`, `That first boot up meant everything to me, I finally had my own way to play video games and explore the internet. Building that computer is the earliest memory I have of my desire to build things, a huge part of who I am today. Soon after, Kon moved to NY to work with a company after college, and I saw him a lot less. In the time we had spent together, he had taken my childish curiosity and molded it into an inherent desire to build, things that the internet would allow me to share with humanity. I am eternally grateful to him for that.`,
        `I don’t think I’ll ever be able to properly put my gratitude to words… but I do hope that I came close. Thank you so much for my desire to break, build, and share with the world.`
    ];

    return (
        <>
            <Head>
                <title>Dan Stepanov</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="description"
                    content="For my uncle, my older brother."
                    key={'description'}
                />
                <meta
                    property="og:title"
                    content="Lucky"
                    key={'ogtitle'}
                />
                <meta
                    property="og:description"
                    content="For my uncle, my older brother."
                    key={'ogdescription'}
                />
                <meta
                    property="og:url"
                    content="https://onlydans.gg/lucky"
                    key={'ogurl'}
                />
                <meta
                    property="og:image"
                    content="https://onlydans.gg/api/lucky"
                    key={'ogimage'}
                />
                <meta
                    property="og:image:alt"
                    content="Lucky"
                    key={'ogimagealt'}
                />
                <meta
                    property="og:image:type"
                    content="image/png"
                    key={'ogimagetype'}
                />
                <meta
                    property="og:image:width"
                    content="1200"
                    key={'ogimagewidth'}
                />
                <meta
                    property="og:image:height"
                    content="630"
                    key={'ogimageheight'}
                />
                <meta
                    property="twitter:image"
                    content="https://onlydans.gg/api/lucky"
                    key={'twitterimage'}
                />
                <meta
                    property="twitter:card" content="summary_large_image"
                    key={'twittercard'}
                />
                <meta
                    property="twitter:title"
                    content="Lucky"
                    key='twittertitle'
                />
                <meta
                    property="twitter:description"
                    content="For my uncle, my older brother."
                    key="twitterdescription"
                />
            </Head>
            <Container>
                <div className="flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">Lucky</h2>
                    <br></br>
                    <p className="text-black dark:text-white italic">November 2023</p>
                    <br></br>
                    {data.map((paragraph) => (
                        <>
                            <p className="text-black dark:text-white">{paragraph}</p>
                            <br />
                        </>
                    ))}
                    <Image
                        src="/kon.png"
                        alt="Kon"
                        width={4032}
                        height={3024}
                        layout="responsive"
                    />
                </div>
            </Container>
        </>
    )
}