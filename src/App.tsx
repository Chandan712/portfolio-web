import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, ExternalLink, Code, Briefcase, User, Send } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = {
    github: "https://github.com/Chandan712",
    linkedin: "https://www.linkedin.com/in/chandan-kumar-399a21193",
    email: "mailto:ck401142@gmail.com"
  };

  // Updated resume link
  const resumeLink = "https://drive.google.com/uc?export=download&id=1Wd0YK-nQRTXD_RXvlXWwvVxYPPLPxGxr";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">CK</span>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-gray-700 hover:text-indigo-600 transition-colors capitalize font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <a 
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen gradient-bg flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="glass-card inline-block px-4 py-2 rounded-full">
                <span className="text-sm">👋 Welcome to my portfolio</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  Chandan Kumar
                </span>
              </h1>
              <p className="text-xl opacity-90">
                A Cloud & DevOps Engineer and Electronics & Communication student at IIIT Ranchi,
                architecting scalable cloud solutions and automating infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="glass-card px-8 py-4 rounded-full hover:shadow-xl transition duration-300 flex items-center space-x-2 hover:-translate-y-1 transform"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </a>
                <a 
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 px-8 py-4 rounded-full hover:shadow-xl transition duration-300 flex items-center space-x-2 hover:-translate-y-1 transform"
                >
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </a>
              </div>
              <div className="flex space-x-6 pt-4">
                {[
                  { Icon: Github, href: socialLinks.github },
                  { Icon: Linkedin, href: socialLinks.linkedin },
                  { Icon: Mail, href: socialLinks.email }
                ].map(({ Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:shadow-xl transition duration-300 hover:-translate-y-1 transform"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Chandan Kumar"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl">
                <p className="font-semibold text-white">1 Year</p>
                <p className="text-sm text-white/80">Cloud & DevOps Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text inline-block">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=300" 
                alt="Cloud Technology"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                As a Cloud & DevOps Engineer and student at IIIT Ranchi, I specialize in AWS, Kubernetes, and hybrid cloud deployments. 
                My expertise lies in implementing high-availability cloud solutions and contributing to open-source projects. 
                With a background in Electronics & Communication Engineering, I bring a unique perspective to cloud infrastructure 
                optimization in dynamic environments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Cloud', skills: 'AWS, Azure, Kubernetes' },
                  { title: 'DevOps', skills: 'Docker, Jenkins, Terraform' },
                  { title: 'Infrastructure', skills: 'IaC, CI/CD, Monitoring' },
                  { title: 'Tools', skills: 'Git, Ansible, Prometheus' }
                ].map((item, index) => (
                  <div key={index} className="skill-card bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text inline-block">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white flex items-center space-x-2">
                    <ExternalLink className="w-6 h-6" />
                    <span>View Project</span>
                  </a>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Hybrid Cloud Project"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 bg-white rounded-2xl mt-4 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Hybrid Cloud Application Deployment</h3>
                <p className="text-gray-600 mb-4">
                  Developed a hybrid cloud web application that reduced downtime by 30% through auto-scaling and multi-region 
                  redundancy. Automated CI/CD pipelines and infrastructure provisioning with Terraform, Ansible, and Jenkins, 
                  improving deployment efficiency by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Python'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>

            <div className="project-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white flex items-center space-x-2">
                    <ExternalLink className="w-6 h-6" />
                    <span>View Project</span>
                  </a>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Network Infrastructure Project"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 bg-white rounded-2xl mt-4 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Virtualized Network Infrastructure Simulation</h3>
                <p className="text-gray-600 mb-4">
                  Created a virtualized network environment using VMware to simulate a hybrid cloud setup for resource allocation and 
                  scaling. Conducted performance analysis on the efficiency of load balancers in a hybrid cloud.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['VMware', 'Python', 'Linux', 'MySQL'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>

            <div className="project-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white flex items-center space-x-2">
                    <ExternalLink className="w-6 h-6" />
                    <span>View Project</span>
                  </a>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Cloud Storage Project"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 bg-white rounded-2xl mt-4 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Cloud-Based Data Storage System</h3>
                <p className="text-gray-600 mb-4">
                  Designed a scalable storage system reducing data retrieval time by 20% with AWS S3 and Lambda automation 
                  and Python. Implemented security best practices for data encryption and access control.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['AWS S3', 'AWS Lambda', 'Python'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-white"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text inline-block">
              Get In Touch
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's talk about your project</h3>
                <p className="text-gray-600 mb-6">
                  I'm currently available for freelance work and full-time positions. 
                  Drop me a line if you'd like to work together!
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'ck401142@gmail.com' },
                    { icon: Briefcase, text: 'Open for opportunities' },
                    { icon: User, text: 'Based in India' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-indigo-50 p-2 rounded-lg">
                        <item.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <a 
                  href="mailto:ck401142@gmail.com" 
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </span>
                </a>
                <div className="flex justify-center space-x-6">
                  {[
                    { Icon: Github, href: socialLinks.github },
                    { Icon: Linkedin, href: socialLinks.linkedin },
                    { Icon: Mail, href: socialLinks.email }
                  ].map(({ Icon, href }, index) => (
                    <a 
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      <Icon className="w-6 h-6 text-gray-700" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">CK</span>
              <p className="mt-4 text-gray-400 max-w-md">
                Creating robust cloud infrastructure and automating deployments for scalable solutions.
              </p>
            </div>
            <div className="flex flex-col md:items-end space-y-4">
              <div className="flex space-x-6">
                {[
                  { Icon: Github, href: socialLinks.github },
                  { Icon: Linkedin, href: socialLinks.linkedin },
                  { Icon: Mail, href: socialLinks.email }
                ].map(({ Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400">© 2024 Chandan Kumar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;