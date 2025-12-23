import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Your Actual Project Name",
      description: "Your actual project description",
      tech: ["Your", "Actual", "Tech", "Stack"],
      github: "https://github.com/yourusername/your-actual-repo",
      live: "https://your-actual-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const skills = {
    "Programming Languages": ["Your", "Actual", "Languages"],
    Frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Vercel", "Postman"],
  }

  const achievements = [
    "🏆 Winner - College Hackathon 2024",
    "⭐ 500+ problems solved on LeetCode",
    "🥇 1st Place - Coding Competition",
    "📚 Contributor to Open Source Projects",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Your Name</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="text-primary">Your Actual Name</span>
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl">
                Computer Science Student & Aspiring Software Engineer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Third-year B.Tech student passionate about building scalable web applications and solving complex
                problems through code. Currently seeking SDE internship opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Link
                href="https://github.com/youractualusername"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/youractualusername"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:your.actual.email@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm a passionate Computer Science student with a strong foundation in software development and a keen
            interest in building innovative solutions. My journey in tech has been driven by curiosity and a desire to
            create meaningful applications that solve real-world problems.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center rounded-lg bg-background p-4">
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Link href={project.github} className="text-muted-foreground hover:text-foreground">
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link href={project.live} className="text-muted-foreground hover:text-foreground">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {category === "Programming Languages" && <Code className="h-5 w-5" />}
                    {category === "Frontend" && <Globe className="h-5 w-5" />}
                    {category === "Backend" && <Database className="h-5 w-5" />}
                    {category === "Database" && <Database className="h-5 w-5" />}
                    {category === "Tools & Technologies" && <Smartphone className="h-5 w-5" />}
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" asChild>
              <Link href="mailto:your.actual.email@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com/in/youractualusername">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © 2024 Your Name.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
