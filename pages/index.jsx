import Head from "next/head";
import Image from 'next/image'
import {motion, AnimatePresence} from "framer-motion";
import {Img} from "@chakra-ui/react";
import Script from 'next/script' //Olspe: imported this in so I could import fontawesome on line 23-27
import lifejs from '../public/lifejs.gif'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"></link>
                
            </Head>
            {/*Olspe: Added Script tag to access fontawesome */}
            <Script
              src="https://kit.fontawesome.com/a076d05399.js"
              integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
              crossOrigin="anonymous"
          ></Script>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .20,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .25
                    }
                }
            }}>

            <div className="header" id="header">

                <img src="https://avatars.githubusercontent.com/certifiedrice" alt="profile picture" className="profile-picture"/>
                <h1 className="underline">Certified Rice</h1>

                <h3>Indie game developer and Front-end Web Developer</h3>
                <ul>
                <li>Programmer</li>
                <li>Game Developer</li>
                <li>Designer</li>
                </ul>

                <Image
                    src={lifejs}
                    alt="life.js"
                />
            </div>

            </motion.div>

            <a href="./about">
                <button>About me!</button>
            </a>

            <div className="work" id="work">
                <h3 className="underline">Work</h3>

                <li>Freelancer and Indie developer</li>

                    <p>Certified_Rice is a Freelance/Indie game developer and Full-Stack web developer.</p>
                    <p>Based in Columbus, Ohio, Certified_Rice is making opensource projects with passion!</p>
                    <p>He is great with working in a team and is always looking for new challenges!</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Is currently contributing to <a href="https://tacobyte.dev" className="anchor-text">TacoByte's</a> Projects</p>
            {/*Olspe: Added anchor-text class to target for css styling */}

                <a href="./portfolio">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <button><h6>My portfolio and past work</h6>  <i className="fas fa-angle-right"></i></button> 
                    {/*Olspe: RemovedAdded '->' sign  and added  fontawesome's chevron instead */}
                </a>
            </div>

            <h3 className="underline">Socials</h3>
            <div className="social">
                <a href="https://github.com/certifiedrice">
                    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></img>
                </a>

                <a href="./discord">
                    <img src="https://img.shields.io/badge/Discord Server-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"></img>
                </a>

                <a href="https://twitter.com/Certified_Rice">
                    <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white"></img>
                </a>

                <a href="https://www.youtube.com/channel/UCoJd_OYsv7BEpKD36z__7Uw">
                    <img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white"></img>
                </a>

                <a href="https://www.reddit.com/user/certified_rice">
                    <img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white"></img>
                </a>

                <a href="https://www.tiktok.com/@certified_rice">
                    <img src="https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white"></img>
                </a>

                <a href="https://www.twitch.tv/certified_rice">
                    <Img src="https://camo.githubusercontent.com/345fb5079dd2ac8710149fd95c02b20217ae34be08d2329a64e5983143e9be8e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5477697463682d2532333931343646462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d547769746368266c6f676f436f6c6f723d7768697465"></Img>
                </a>

                <a href="mailto:certifiedricee@gmail.com">
                    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img>
                </a>
            </div>
        </div>
    )
}
