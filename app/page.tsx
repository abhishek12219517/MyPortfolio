"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Play,
  Pause,
  Code,
  Award,
  Briefcase,
  User,
  Cpu,
  FileText,
  Video,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NeonButton from "@/components/neon-button"
import NeonText from "@/components/neon-text"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import CertificationCard from "@/components/certification-card"
import ProgrammingProfile from "@/components/programming-profile"
import HackathonCard from "@/components/hackathon-card"
import ContactForm from "@/components/contact-form"
import NavMenu from "@/components/nav-menu"
import CosmicBackground from "@/components/cosmic-background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // const handleVideoToggle = () => {
  //   if (videoRef.current) {
  //     if (isVideoPlaying) {
  //       videoRef.current.pause()
  //     } else {
  //       videoRef.current.play()
  //     }
  //     setIsVideoPlaying(!isVideoPlaying)
  //   }
  // }
  const handleVideoToggle = async () => {
    if (!videoRef.current) return;
  
    try {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        await videoRef.current.play();
      }
    } catch (e) {
      console.error("Video playback error:", e);
    }
  };
  

  const sections = [
    { id: "home", label: "Home", icon: <User className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Cpu className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-4 h-4" /> },
    { id: "programming", label: "Programming", icon: <Code className="w-4 h-4" /> },
    { id: "hackathons", label: "Hackathons", icon: <Award className="w-4 h-4" /> },
    { id: "resume", label: "Resume", icon: <FileText className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
    // { id: "video", label: "Video CV", icon: <Video className="w-4 h-4" /> },
  ]

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Git/GitHub", level: 85 },
    { name: "CPP", level: 90 },
    { name: "Java", level: 75 },
    
    { name: "Problem Solving", level: 85 },
  ]

  const projects = [
    {
      title: "TechXpert",
      description: "A technology expertise showcase platform highlighting various tech skills and projects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/Techxpert.png?height=300&width=500",
      link: "https://techxpert.onrender.com/",
      github: "https://github.com/abhishek12219517/TechXpert",
    },
    // {
      //   title: "Railway Booking Website",
      //   description: "A basic railway booking website interface built using HTML and CSS in my first year.",
      //   technologies: ["HTML", "CSS"],
      //   image: "/placeholder.svg?height=300&width=500",
      //   link: "https://github.com/abhishek12219517/Railway-booking-website",
      //   github: "https://github.com/abhishek12219517/Railway-booking-website",
      // },
      {
        title: "Saarthi",
        description: "A community-centric platform designed to foster local engagement, support small businesses, and streamline emergency assistance through technology.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/Sarthi.png?height=300&width=500",
        link: "https://github.com/abhishek12219517/Saarthi",
        github: "https://github.com/abhishek12219517/Saarthi",
      },
      {
        title: "Sanrakshak",
        description: "A smart safety platform with real-time monitoring, face recognition, and instant alert features for secure movement.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/Sanrakshak.png?height=300&width=500",
        link: " https://klpyh-jqaaa-aaaao-a3mfq-cai.icp0.io/",
        github: "https://github.com/abhishek12219517/Sanrakshak",
      },
    // {
    //   title: "Express Hello World",
    //   description: "A simple Express.js application demonstrating basic server setup and routing.",
    //   technologies: ["JavaScript", "Express.js", "Node.js"],
    //   image: "/placeholder.svg?height=300&width=500",
    //   link: "https://github.com/abhishek12219517/express-hello-world",
    //   github: "https://github.com/abhishek12219517/express-hello-world",
    // },
  ]

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      image: "/NPTEL.png?height=100&width=100",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S157020010204430122",
    },
    {
      title: "Server side JavaScript with Node.js",
      issuer: "Coursera",
      date: "2024",
      image: "/Coursera.png?height=100&width=100",
      link: "https://www.coursera.org/account/accomplishments/certificate/JH9J6BTPZGAW",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "2024",
      image: "/Coursera.png?height=100&width=100",
      link: "https://www.coursera.org/account/accomplishments/certificate/ANXM5JMV9UGA",
    },
  ]

  // const programmingProfiles = [
  //   {
  //     platform: "LeetCode",
  //     username: "abhishek12219517",
  //     rating: "1700+",
  //     problems: "700+",
  //     link: "https://leetcode.com/u/abhishek12219517/",
  //     icon: "/Leetcode.png?height=50&width=50",
  //   },
  //   {
  //     platform: "GeeksforGeeks",
  //     username: "bhaska2nbn",
  //     score: "380",
  //     problem: "150+",
  //     link: "https://www.geeksforgeeks.org/user/bhaska2nbn/?_gl=1*1q26e1o*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwwqfABhBcEiwAZJjC3oaYOxreoZJSebWfLSJCzGJvB3cikXa1ndZ13o9-cqjx-ZuBwDEWFRoCPiwQAvD_BwE&gbraid=0AAAAAC9yBkDqLQjO9BONlOTP_a_a6SZDV",
  //     icon: "/gfg.png?height=50&width=50",
  //   },
  //   {
  //     platform: "Codeforces",
  //     username: "bhaskara941",
  //     rating: "1032",
  //     contests: "30+",
  //     link: "https://codeforces.com/profile/bhaskara941",
  //     icon: "/codeforces.png?height=50&width=50",
  //   },
  // ]
  const programmingProfiles = [
    {
      platform: "LeetCode",
      username: "abhishek12219517",
      rating: "1700+",
      problems: "700+",
      link: "https://leetcode.com/u/abhishek12219517/",
      icon: "/Leetcode.png?height=50&width=50",
    },
    {
      platform: "GeeksforGeeks",
      username: "bhaska2nbn",
      rating: "380",
      problems: "150+",
      link: "https://www.geeksforgeeks.org/user/bhaska2nbn/",
      icon: "/gfg.png?height=50&width=50",
    },
    {
      platform: "Codeforces",
      username: "bhaskara941",
      rating: "1032",
      problems: "30+",
      link: "https://codeforces.com/profile/bhaskara941",
      icon: "/codeforces.png?height=50&width=50",
    },
  ];
  
  const hackathons = [
    {
      name: "CODE-A-HAUNT",
      date: "March 2024",
      project: "Smart Learning Platform",
      achievement: "Gold-Medalist",
      description: "Developed an AI-powered learning assistant that helps students with personalized learning paths.",
      image: "/codeahaunt.png?height=200&width=300",
    },
    {
      name: "Kriyeta 3.0",
      date: "June 2024",
      project: "Community Engagement Platform",
      achievement: "Top 10 Finalist",
      description: "A platform fostering local engagement, supporting small businesses,and emergency assistance.",
      image: "/Kriyeta.jpg?height=200&width=300",
    },
    {
      name: "Code Cubicle 2.0",
      date: "August 2024",
      project: "Study Buddy",
      achievement: "3rd Runner-up",
      description: "Built an AI-driven study companion that tailors learning resources based on individual student needs and progress.",
      image: "/GeekRoom.png?height=200&width=300",
    },
    {
      name: "DevFest",
      date: "December 2024",
      project: "Health Buddy",
      achievement: "Gold-Medalist",
      description: " An AI-powered web app for disease prediction using deep learning and integrated web technologies",
      image: "/devfest.JPG?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Fixed navigation */}
      <NavMenu sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-8 inline-block">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Abhishek.png?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 blur-xl opacity-50 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>

            <NeonText text="Abhishek Kumar" className="text-5xl md:text-7xl font-bold mb-4" color="cyan" />

            <motion.h2
              className="text-2xl md:text-3xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Quick Learner, Coder, and Enthusiast
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
             Pre-final year CSE student passionate about problem-solving and full-stack development. Skilled in MERN stack, experienced in building scalable web apps. Actively seeking opportunities to apply my skills in real-world projects and internships.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <NeonButton href="#contact" color="cyan">
                Contact Me
              </NeonButton>
              <NeonButton href="#projects" color="purple" variant="outline">
                View Projects
              </NeonButton>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.a
                href="https://github.com/abhishek12219517"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://x.com/Abhishe76361532"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:bhaskara941@gmail.com"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-cyan-400"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                setActiveSection("about")
              }}
            >
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Scroll Down
              </motion.div>
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="About Me" className="text-4xl md:text-5xl font-bold mb-4" color="purple" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="relative z-10 rounded-lg overflow-hidden border-2 border-cyan-500">
                    <Image
                      src="/Abhi.jpg?height=600&width=500"
                      alt="About Me"
                      width={500}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg blur-xl opacity-30 z-0"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </motion.div> */}
              <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  <div className="relative">
    <div className="relative z-10 overflow-hidden border-4 border-cyan-500 rounded-full w-[200px] h-[200px] mx-auto">
      <Image
        src="/Abhi.jpg?height=600&width=500"
        alt="About Me"
        width={200}
        height={200}
        className="object-cover rounded-full w-full h-full"
      />
    </div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full blur-xl opacity-30 z-0"
      animate={{
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  </div>
</motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Who am I?
                </h3>

                <p className="text-gray-300 mb-4">
                  I'm Abhishek Kumar, a passionate web developer and coding enthusiast. I love learning new technologies
                  and applying them to create innovative solutions. My journey in tech began with HTML and CSS, and I've
                  been expanding my skills ever since.
                </p>

                <p className="text-gray-300 mb-6">
                  I specialize in front-end development with a growing expertise in back-end technologies. I believe in
                  writing clean, maintainable code and staying up-to-date with the latest industry trends and best
                  practices.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Name:</h4>
                    <p className="text-gray-300">Abhishek Kumar</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Email:</h4>
                    <p className="text-gray-300">bhaskara941@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">GitHub:</h4>
                    <p className="text-gray-300">abhishek12219517</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Availability:</h4>
                    <p className="text-gray-300">Full-time</p>
                  </div>
                </div>

                
            {/* sample */}
            <div>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
                  <NeonButton href="#contact" color="purple" variant="outline">
                  Hire Me
                </NeonButton>
            </motion.div>
            </div>

                
              </motion.div>
            </div>

          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Skills & Technologies" className="text-4xl md:text-5xl font-bold mb-4" color="cyan" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Other Technologies I Work With
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Bootstrap",
                  "MySQL",
                  "PHP",
                  "Python",
                  "RESTful APIs",
                  "VS Code",
                  "Netlify",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 8px rgba(34, 211, 238, 0.5)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Projects" className="text-4xl md:text-5xl font-bold mb-4" color="purple" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Here are some of my projects from GitHub. Each project represents a unique challenge and solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    link={project.link}
                    github={project.github}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <NeonButton href="https://github.com/abhishek12219517" color="cyan" target="_blank">
                View More on GitHub
              </NeonButton>
            </motion.div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Certifications" className="text-4xl md:text-5xl font-bold mb-4" color="cyan" />
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Professional certifications that validate my skills and expertise in various technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CertificationCard
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    image={cert.image}
                    link={cert.link}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Programming Profiles Section */}
        <section id="programming" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Programming Profiles" className="text-4xl md:text-5xl font-bold mb-4" color="purple" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                My competitive programming profiles across various platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programmingProfiles.map((profile, index) => (
                <motion.div
                  key={profile.platform}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProgrammingProfile
                    platform={profile.platform}
                    username={profile.username}
                    rating={profile.rating}
                    problems={profile.problems}
                    contests={profile.contests}
                    link={profile.link}
                    icon={profile.icon}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center">
                Problem Solving Approach
              </h3>

              <p className="text-gray-300 mb-4">
                My approach to problem-solving involves breaking down complex problems into smaller, manageable parts. I
                focus on understanding the problem thoroughly before diving into solutions, which helps me develop
                efficient algorithms and optimize for both time and space complexity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <h4 className="font-semibold text-cyan-400 mb-2">Algorithm Design</h4>
                  <p className="text-gray-400 text-sm">
                    Proficient in designing efficient algorithms for complex problems
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                  <h4 className="font-semibold text-purple-400 mb-2">Data Structures</h4>
                  <p className="text-gray-400 text-sm">
                    Strong understanding of advanced data structures and their applications
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <h4 className="font-semibold text-cyan-400 mb-2">Optimization</h4>
                  <p className="text-gray-400 text-sm">
                    Skilled at optimizing solutions for both time and space complexity to create efficient code
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Hackathons" className="text-4xl md:text-5xl font-bold mb-4" color="cyan" />
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Highlights from hackathons I've participated in and the innovative projects I've built.
              </p>
            </div>

            <div className="space-y-10">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <HackathonCard
                    name={hackathon.name}
                    date={hackathon.date}
                    project={hackathon.project}
                    achievement={hackathon.achievement}
                    description={hackathon.description}
                    image={hackathon.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}

        {/* Resume Section */}
        <section id="resume" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Resume" className="text-4xl md:text-5xl font-bold mb-4" color="cyan" />
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Download my resume to learn more about my experience, education, and skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
             
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Experience
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                    <h4 className="font-bold text-white">Web Developer Intern</h4>
                    <p className="text-cyan-400 mb-2">Tech Solutions Inc. | 2022 - 2023</p>
                    <p className="text-gray-300 text-sm">
                      Developed responsive web applications using HTML, CSS, and JavaScript. Collaborated with senior
                      developers to implement new features and fix bugs.
                    </p>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <h4 className="font-bold text-white">Freelance Web Developer</h4>
                    <p className="text-purple-400 mb-2">Self-employed | 2021 - 2022</p>
                    <p className="text-gray-300 text-sm">
                      Created websites for small businesses and individuals. Focused on delivering user-friendly
                      interfaces and responsive designs.
                    </p>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                    <h4 className="font-bold text-white">Teaching Assistant</h4>
                    <p className="text-cyan-400 mb-2">University Computer Science Dept. | 2020 - 2021</p>
                    <p className="text-gray-300 text-sm">
                      Assisted professors in teaching programming fundamentals. Conducted lab sessions and helped
                      students with assignments and projects.
                    </p>
                  </div>
                </div>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Education
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <h4 className="font-bold text-white">Bachelor of Technology in Computer Science</h4>
                    <p className="text-purple-400 mb-2">Lovely Professional University | 2022 - 2026</p>
                    <p className="text-gray-300 text-sm">
                      Focused on web development, algorithms, and data structures. Participated in coding competitions
                      and hackathons.
                    </p>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                    <h4 className="font-bold text-white">High School </h4>
                    <p className="text-cyan-400 mb-2">St. Xavier's College | 2019 - 2021</p>
                    <p className="text-gray-300 text-sm">
                      Specialized in Mathematics, Physics and Chemistry . 
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Languages
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">English</span>
                      <span className="text-gray-400">Fluent</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Hindi</span>
                      <span className="text-gray-400">Native</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <NeonButton href="https://drive.google.com/file/d/1P8nb1VhwOTKED6PDWoI15cWjB9aW1NRT/view" color="purple" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume (PDF)
              </NeonButton>
            </motion.div>
          </motion.div>
        </section>
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Contact Me" className="text-4xl md:text-5xl font-bold mb-4" color="purple" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Have a project in mind or want to discuss a potential collaboration? Get in touch!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-300">bhaskara941@gmail.com</p>
                    </div>
                  </div>
{/* 
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Work Inquiries</h4>
                      <p className="text-gray-300">bhaskara941@gmail.com</p>
                    </div>
                  </div> */}

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Github className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">GitHub</h4>
                      <p className="text-gray-300">github.com/abhishek12219517</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Linkedin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                      <p className="text-gray-300">linkedin.com/in/abhishekkumar9870</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/abhishek12219517"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/abhishekkumar9870/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="mailto:bhaskara941@gmail.com"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Video CV Section
        <section id="video" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <NeonText text="Video CV" className="text-4xl md:text-5xl font-bold mb-4" color="purple" />
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Watch my video resume to learn more about my personality, communication skills, and passion for
                technology.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden border-2 border-purple-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/50 backdrop-blur-sm border-cyan-500 text-white hover:bg-black/70 hover:text-cyan-400"
                  onClick={handleVideoToggle}
                >
                  {isVideoPlaying ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      Pause Video
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Play Video
                    </>
                  )}
                </Button>
              </div>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/VideoCV.mp4?height=720&width=1280"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src="/video-placeholder.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl blur-xl opacity-30 z-0"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            <motion.div
              className="mt-10 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Video Highlights
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <h4 className="font-semibold text-cyan-400 mb-2">Introduction</h4>
                  <p className="text-gray-400 text-sm">0:00 - 1:30</p>
                  <p className="text-gray-300 text-sm mt-2">Personal background and career overview</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                  <h4 className="font-semibold text-purple-400 mb-2">Technical Skills</h4>
                  <p className="text-gray-400 text-sm">1:31 - 3:15</p>
                  <p className="text-gray-300 text-sm mt-2">Detailed overview of my technical expertise</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <h4 className="font-semibold text-cyan-400 mb-2">Project Showcase</h4>
                  <p className="text-gray-400 text-sm">3:16 - 5:00</p>
                  <p className="text-gray-300 text-sm mt-2">Demonstration of key projects and achievements</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section> */}
      </main>
    </div>
  )
}
