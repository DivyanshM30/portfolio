"use client";

import React, { useEffect } from "react";

// Particle Connect Animation - ported from portfolio/files/particles.js
class ParticleConnect {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseRadius: number;
  }[] = [];
  private mouse = { x: 0, y: 0 };
  private animationId: number | null = null;
  private width = 0;
  private height = 0;

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;
    this.canvas = canvas;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;
    this.ctx = ctx;

    this.setupCanvas();
    this.createParticles();
    this.animate = this.animate.bind(this);
    this.animate();
    this.bindEvents();

    window.addEventListener("resize", this.handleResize);
  }

  private handleResize = () => {
    this.setupCanvas();
    this.createParticles();
  };

  private setupCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  private createParticles() {
    this.particles = [];
    const particleCount = Math.floor((this.width * this.height) / 15000);

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 1 + Math.random() * 1.5,
        baseRadius: 1 + Math.random() * 1.5,
      });
    }
  }

  private bindEvents() {
    this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
  }

  private update() {
    this.particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(this.width, particle.x));
      }
      if (particle.y < 0 || particle.y > this.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(this.height, particle.y));
      }

      // Mouse interaction - particles react to mouse
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.05;
        particle.vy -= (dy / distance) * force * 0.05;
        particle.radius = particle.baseRadius * (1 + force * 0.5);
      } else {
        particle.radius = particle.baseRadius;
      }

      // Reduced damping for faster, more continuous movement
      particle.vx *= 0.998;
      particle.vy *= 0.998;
    });
  }

  private draw() {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    this.ctx.fillStyle = isDark ? "#0a0a0a" : "#ffffff";
    this.ctx.fillRect(0, 0, this.width, this.height);

    const lineColor = isDark
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.15)";
    const particleColor = isDark
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.25)";
    const mouseLineColor = isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.2)";

    // Draw connections between particles
    this.ctx.strokeStyle = lineColor;
    const maxDistance = 120;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const baseOpacity = isDark ? 0.3 : 0.4;
          const opacity = (1 - distance / maxDistance) * baseOpacity;
          this.ctx.globalAlpha = opacity;
          this.ctx.lineWidth = isDark ? 0.5 : 0.7;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }

      // Draw connections to mouse
      if (this.mouse.x > 0 && this.mouse.y > 0) {
        const dx = this.mouse.x - this.particles[i].x;
        const dy = this.mouse.y - this.particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const baseOpacity = isDark ? 0.2 : 0.3;
          const opacity = (1 - distance / 150) * baseOpacity;
          this.ctx.strokeStyle = mouseLineColor;
          this.ctx.globalAlpha = opacity;
          this.ctx.lineWidth = isDark ? 0.5 : 0.7;
          this.ctx.beginPath();
          this.ctx.moveTo(this.mouse.x, this.mouse.y);
          this.ctx.lineTo(this.particles[i].x, this.particles[i].y);
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    this.ctx.fillStyle = particleColor;
    this.ctx.globalAlpha = 1;
    this.particles.forEach((particle) => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Draw mouse particle
    if (this.mouse.x > 0 && this.mouse.y > 0) {
      this.ctx.fillStyle = isDark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.15)";
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, isDark ? 3 : 4, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private animate() {
    this.update();
    this.draw();
    this.animationId = window.requestAnimationFrame(this.animate);
  }

  public destroy() {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener("resize", this.handleResize);
  }
}

// Network Animation - ported from portfolio/files/network.js
class NetworkAnimation {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private nodes: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }[] = [];
  private connections: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    distance: number;
    opacity: number;
  }[] = [];
  private animationId: number | null = null;
  private width = 0;
  private height = 0;

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;
    this.canvas = canvas;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;
    this.ctx = ctx;

    this.setupCanvas();
    this.createNodes();
    this.animate = this.animate.bind(this);
    this.animate();

    window.addEventListener("resize", this.handleResize);
  }

  private handleResize = () => {
    this.setupCanvas();
    this.createNodes();
  };

  private setupCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  private createNodes() {
    this.nodes = [];
    const nodeCount = Math.floor((this.width * this.height) / 40000);

    for (let i = 0; i < nodeCount; i++) {
      let x: number;
      let y: number;

      if (Math.random() < 0.3) {
        x = this.width * (0.6 + Math.random() * 0.4);
        y = this.height * (0.2 + Math.random() * 0.6);
      } else {
        x = Math.random() * this.width;
        y = Math.random() * this.height;
      }

      this.nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        radius: 1.5 + Math.random() * 1,
      });
    }

    this.updateConnections();
  }

  private updateConnections() {
    this.connections = [];
    const maxDistance = 150;

    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          this.connections.push({
            from: this.nodes[i],
            to: this.nodes[j],
            distance,
            opacity: 1 - distance / maxDistance,
          });
        }
      }
    }
  }

  private update() {
    this.nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > this.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.height) node.vy *= -1;

      node.x = Math.max(0, Math.min(this.width, node.x));
      node.y = Math.max(0, Math.min(this.height, node.y));
    });

    this.updateConnections();
  }

  private draw() {
    // Clear canvas with slight transparency for trail effect
    this.ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
    this.ctx.fillRect(0, 0, this.width, this.height);

    const isDark = document.body.getAttribute("data-theme") === "dark";
    const lineColor = isDark
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.08)";
    const nodeColor = isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.15)";

    // Draw connections
    this.ctx.strokeStyle = lineColor;
    this.connections.forEach((conn) => {
      this.ctx.globalAlpha = conn.opacity * 0.3;
      this.ctx.lineWidth = 0.5;
      this.ctx.beginPath();
      this.ctx.moveTo(conn.from.x, conn.from.y);
      this.ctx.lineTo(conn.to.x, conn.to.y);
      this.ctx.stroke();
    });

    // Draw nodes
    this.ctx.fillStyle = nodeColor;
    this.ctx.globalAlpha = 1;
    this.nodes.forEach((node) => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private animate() {
    this.update();
    this.draw();
    this.animationId = window.requestAnimationFrame(this.animate);
  }

  public destroy() {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener("resize", this.handleResize);
  }
}

export default function Page() {
  useEffect(() => {
    // Dark mode toggle functionality (ported from script.js) with system preference support
    const themeToggle = document.getElementById(
      "themeToggle"
    ) as HTMLButtonElement | null;
    const body = document.body;
    const icon = themeToggle?.querySelector("i");

    const updateIcon = (theme: string) => {
      if (!icon) return;
      if (theme === "dark") {
        icon.className = "fas fa-sun";
      } else {
        icon.className = "fas fa-moon";
      }
    };

    const storedTheme = window.localStorage.getItem("theme");
    let initialTheme = storedTheme;
    if (!initialTheme) {
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    body.setAttribute("data-theme", initialTheme);
    updateIcon(initialTheme);

    const handleThemeToggle = () => {
      const currentTheme = body.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", newTheme);
      window.localStorage.setItem("theme", newTheme);
      updateIcon(newTheme);
    };

    themeToggle?.addEventListener("click", handleThemeToggle);

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling for navigation links
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );
    const clickHandlers: Array<{
      el: HTMLAnchorElement;
      handler: (e: MouseEvent) => void;
    }> = [];

    anchors.forEach((anchor) => {
      const handler = (e: MouseEvent) => {
        e.preventDefault();
        const targetSelector = anchor.getAttribute("href");
        if (!targetSelector) return;
        const target = document.querySelector(targetSelector);
        if (target) {
          (target as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
      anchor.addEventListener("click", handler);
      clickHandlers.push({ el: anchor, handler });
    });

    // Form submission handling (ported from script.js)
    const contactForm = document.getElementById(
      "contactForm"
    ) as HTMLFormElement | null;
    const formMessage = document.getElementById(
      "formMessage"
    ) as HTMLDivElement | null;
    const submitBtn = document.getElementById(
      "submitBtn"
    ) as HTMLButtonElement | null;

    const handleSubmit = async (e: Event) => {
      if (!contactForm || !formMessage || !submitBtn) return;
      e.preventDefault();

      // Reset previous message state for a fresh submission
      formMessage.textContent = "";
      formMessage.className = "form-message";
      formMessage.style.display = "none";

      const nameInput = contactForm.querySelector("#name") as
        | HTMLInputElement
        | null;
      const emailInput = contactForm.querySelector("#email") as
        | HTMLInputElement
        | null;
      const messageInput = contactForm.querySelector("#message") as
        | HTMLTextAreaElement
        | null;

      const name = (nameInput?.value || "").trim();
      const email = (emailInput?.value || "").trim();
      const message = (messageInput?.value || "").trim();

      const errors: string[] = [];

      if (!name) errors.push("Name is required.");
      if (!email) {
        errors.push("Email is required.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Please enter a valid email address.");
      }
      if (!message) errors.push("Message is required.");

      if (errors.length > 0) {
        formMessage.textContent = errors.join(" ");
        formMessage.className = "form-message error";
        formMessage.style.display = "block";
        return;
      }

      // Show loading state
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          formMessage.textContent =
            "Thank you! Your message has been sent successfully.";
          formMessage.className = "form-message success";
          formMessage.style.display = "block";
          contactForm.reset();
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        formMessage.textContent =
          "Oops! There was a problem sending your message. Please try again.";
        formMessage.className = "form-message error";
        formMessage.style.display = "block";
      }

      // Remove loading state
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    };

    contactForm?.addEventListener("submit", handleSubmit);

    // Subtle fade-in on scroll
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
        }
      });
    }, observerOptions);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section")
    );
    sections.forEach((section) => {
      section.style.opacity = "0.3";
      section.style.transition = "opacity 0.8s ease";
      observer.observe(section);
    });

    // Initialize animations
    const particleAnimation = new ParticleConnect("networkCanvas");
    const networkAnimation = new NetworkAnimation("networkCanvas");

    return () => {
      themeToggle?.removeEventListener("click", handleThemeToggle);
      window.removeEventListener("scroll", handleScroll);
      clickHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("click", handler)
      );
      contactForm?.removeEventListener("submit", handleSubmit);
      observer.disconnect();
      particleAnimation.destroy();
      networkAnimation.destroy();
    };
  }, []);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            Divyansh Mishra
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="theme-toggle" id="themeToggle" title="Toggle dark mode">
            <i className="fas fa-moon" />
          </button>
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <canvas id="networkCanvas" className="network-canvas" />
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Available for Opportunities</div>
            <a
              href="https://drive.google.com/file/d/1m3e7TsVruyN8xYYz04arEtYiOlxkeGwJ/view"
              target="_blank"
              rel="noreferrer"
              download
            >
              <div className="hero-badge">Resume</div>
            </a>
            <h1>Divyansh Mishra</h1>
            <p className="subtitle">Developer | Problem Solver</p>
            <p className="description">
              B.Tech Computer Science student passionate about building scalable software solutions.
              Experienced in full-stack development, algorithms, and problem-solving.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">DSA Problems</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">DSA Problems Solved</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8.5</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Coding</div>
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm a Computer Science undergraduate with a solid foundation in problem-solving, data structures, and
                full-stack development. Over the past few years, I've built real-world applications including a
                desktop-based Digital Wellbeing Tracker with ML integration, reflecting my passion for solving
                meaningful problems through code.
              </p>
              <p>
                I specialize in modern web technologies like React, Node.js, and Python, and I'm constantly refining my
                skills by solving 500+ DSA problems across platforms like LeetCode and Codeforces. I aim to secure SDE
                internships at product-based companies where I can build scalable, impactful software used by real
                users.
              </p>
              <p>
                Outside of academics, I spend time building personal projects, exploring new technologies, and
                strengthening my problem-solving skills. I enjoy building side projects, staying up-to-date with
                industry trends in software development, AI, and cloud technologies. I also like playing chess in my
                free time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-number">01</div>
                <h3 className="project-title">Digital Wellbeing Tracker</h3>
              </div>
              <p className="project-description">
                A desktop application that tracks screen time and app usage in real-time, offering visual insights and
                usage patterns. Utilizes K-Means clustering to identify unhealthy digital behavior and promote mindful
                tech habits through data-driven feedback.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Tkinter</span>
                <span className="tech-tag">Matplotlib</span>
                <span className="tech-tag">K-Means</span>
              </div>
              <div className="project-links">
                <a
                  href="https://divyanshm30.github.io/digital-wellbeing-tracker/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <span>View Project</span>
                  <i className="fas fa-arrow-right" />
                </a>
                <a
                  href="https://github.com/divyanshm30/digital-wellbeing-tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-number">02</div>
                <h3 className="project-title">Blockchain-based Decentralized VPN</h3>
              </div>
              <p className="project-description">
                A decentralized VPN leveraging <strong>blockchain technology</strong> for secure, anonymous, and
                censorship-resistant browsing. Uses cryptographic encryption to ensure data privacy while eliminating
                central points of failure, providing trustless peer-to-peer connectivity.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Blockchain</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Smart Contracts</span>
                <span className="tech-tag">Encryption</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer" className="project-link">
                  <span>View Project</span>
                  <i className="fas fa-arrow-right" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="project-link secondary">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-number">03</div>
                <h3 className="project-title">Real-Time AI Based News Summarizer Web App</h3>
              </div>
              <p className="project-description">
                Built a responsive web app that generates concise real-time news summaries using{" "}
                <strong>Google Gemini API</strong>. Includes category-based filters (Tech, Politics, Sports) for
                personalized feeds. Implemented a <strong>Flask backend</strong> for API calls, user flow, and error
                handling, while optimizing API usage for scalability and token efficiency.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Google Gemini API</span>
                <span className="tech-tag">NLP</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer" className="project-link">
                  <span>View Project</span>
                  <i className="fas fa-arrow-right" />
                </a>
                <a
                  href="https://github.com/DivyanshM30/summarizer_ai"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-number">04</div>
                <h3 className="project-title">Smart Route</h3>
              </div>
              <p className="project-description">
                A cloud-based intelligent routing system designed to suggest optimal travel routes by considering
                real-time traffic data, shortest paths, and dynamic conditions. Integrated <strong>Maps API</strong>{" "}
                with AI-powered optimization algorithms for smarter navigation and faster decision-making.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Maps API</span>
                <span className="tech-tag">AWS (Deployment)</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer" className="project-link">
                  <span>View Project</span>
                  <i className="fas fa-arrow-right" />
                </a>
                <a
                  href="https://github.com/DivyanshM30/smartroute"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-code" />
                <h3>Languages</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-laptop-code" />
                <h3>Frontend</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-server" />
                <h3>Backend</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-database" />
                <h3>Databases</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-tools" />
                <h3>Tools &amp; Cloud</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-header">
                <i className="fas fa-brain" />
                <h3>Core Concepts</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Algorithms</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">System Design</span>
                <span className="skill-tag">DBMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="container">
          <h2 className="section-title">Experience &amp; Achievements</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="experience-title">IBM GenAI Certification</h3>
                <div className="experience-company">IBM watsonx.ai</div>
                <div className="experience-date">May 2025 - July 2025</div>
                <p className="experience-description">
                  Earned a certification from IBM in Generative Artificial Intelligence while gaining hands-on
                  experience in prompt engineering, LLMs, and AI-powered application development using Watsonx, Python,
                  and modern NLP techniques. Strengthened ability to design and deploy generative AI solutions in
                  real-world projects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="experience-title">Competitive Programming</h3>
                <div className="experience-company">Codeforces • LeetCode</div>
                <div className="experience-date">2023 - Present</div>
                <p className="experience-description">
                  Solved 150+ problems on LeetCode with a contest rating of 1400+. Actively participate in weekly
                  contests on CodeChef and practice regularly on Codeforces. Built a strong foundation in data
                  structures and algorithms through consistent problem-solving.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="experience-title">Development Team</h3>
                <div className="experience-company">MIC</div>
                <div className="experience-date">July 2024 - June 2025</div>
                <p className="experience-description">
                  As a member of the Microsoft Innovations Club, I was part of the development team during my tenure.
                  While the club's activities were limited, I contributed to the organization of an event during
                  Vibrance and completed five foundational courses on the Microsoft Learn platform, covering core
                  concepts in cloud computing and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Start a Conversation</h3>
              <p>
                Whether you're a recruiter looking for a passionate developer, a fellow student wanting to collaborate,
                or someone who just wants to chat about technology, I'd love to hear from you. I'm actively seeking
                internship opportunities at product-based companies.
              </p>
              <div className="contact-links">
                <a href="mailto:divyanshm.code@gmail.com" className="contact-link">
                  <i className="fas fa-envelope" />
                  divyanshm.code@gmail.com
                </a>
                <a href="tel:+91-XXXXXXXXXX" className="contact-link">
                  <i className="fas fa-phone" />
                  +91-XXXXXXXXXX
                </a>
                <a
                  href="https://linkedin.com/in/DivyanshM30"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/DivyanshM30"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" />
                  GitHub Profile
                </a>
                <a
                  href="https://leetcode.com/DivyanshM30"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-code" />
                  LeetCode Profile
                </a>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">
                  Share a bit about who you are and what you’d like to talk about — internships, collaborations, or
                  anything tech. I usually reply within 24 hours.
                </p>
              </div>
              <div className="form-message" id="formMessage" aria-live="polite"></div>
              <form
                id="contactForm"
                action="https://formspree.io/f/mnnzzegg"
                method="POST"
                noValidate
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact" />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me briefly what you’re looking for or how I can help."
                  />
                </div>
                <button type="submit" className="btn btn-primary" id="submitBtn">
                  <i className="fas fa-paper-plane" />
                  <span className="btn-text">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a
              href="https://github.com/DivyanshM30"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/DivyanshM30"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://twitter.com/DivyanshM30"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://leetcode.com/DivyanshM30"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-code" />
            </a>
            <a href="mailto:divyanshm.code@gmail.com" className="social-link">
              <i className="fas fa-envelope" />
            </a>
          </div>
          <p>&copy; 2025 Divyansh Mishra. All rights reserved. | Made with ❤️</p>
        </div>
      </footer>
    </>
  );
}


