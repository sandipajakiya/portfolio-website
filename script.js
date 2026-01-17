// Data
const personalInfo = {
    name: "Sandip Ajakiya",
    title: "Full-Stack Developer",
    location: "Gujarat, India",
    email: "sandipajakiya333@gmail.com",
    phone: "+91 90164 02617",
    github: "https://github.com/sandipajakiya",
    linkedin: "https://linkedin.com/in/sandip-ajakiya-3685a6245",
    summary: "A detail-oriented and motivated IT graduate skilled in front-end and full-stack development. Experienced in building responsive web applications using React.js, Node.js, and MongoDB. Passionate about solving real-world problems through clean, efficient code.",
};

const skills = {
    frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "AWS"],
    soft: ["Problem Solving", "Communication", "Teamwork", "Time Management"],
};

const projects = [
    {
        id: 1,
        title: "Blogify",
        subtitle: "Full-Stack Blogging Platform",
        description: "A comprehensive blogging platform with user authentication, rich-text editor, image upload, and social features like likes and comments.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        duration: "May 2024 – Sep 2024",
        features: ["User authentication", "Rich-text editor", "Image upload", "Like/dislike system", "Comments"],
        highlights: ["REST API integration", "Agile methodology"],
        color: "primary",
    },
    {
        id: 2,
        title: "QuickNews",
        subtitle: "Real-Time News Web App",
        description: "A dynamic news application that fetches real-time news with category-based filtering and a fully responsive interface.",
        tech: ["React.js", "News API", "CSS"],
        duration: "May 2023 – Sep 2023",
        features: ["Real-time news fetching", "Category-based filtering", "Responsive UI"],
        highlights: ["React hooks", "Performance optimization"],
        color: "accent",
    },
    {
        id: 3,
        title: "E-Commerce Admin Panel",
        subtitle: "Backend Management System",
        description: "An admin dashboard for managing products, orders, and users with secure authentication and comprehensive CRUD operations.",
        tech: ["PHP", "MySQL", "JavaScript"],
        duration: "Feb 2023 – Mar 2023",
        features: ["Product management", "Order tracking", "User management", "Secure login"],
        highlights: ["CRUD operations", "Data validation"],
        color: "primary",
    },
    {
        id: 4,
        title: "TaskMistro",
        subtitle: "Collaborative Task Management Tool",
        description: "A Trello-style task management application featuring drag-and-drop kanban boards, real-time updates, and team collaboration tools.",
        tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
        duration: "Jan 2024 - Apr 2024",
        features: ["Drag-and-drop interface", "Real-time sync", "Team workspaces", "Dark mode support"],
        highlights: ["Complex state management", "Firebase integration"],
        color: "accent",
    },
    {
        id: 5,
        title: "InsightAI",
        subtitle: "AI-Powered Content Generator",
        description: "An intelligent content generation platform that uses OpenAI's GPT models to help marketers create high-converting copy and blog posts automatically.",
        tech: ["Next.js", "OpenAI API", "PostgreSQL", "Stripe"],
        duration: "Oct 2023 - Dec 2023",
        features: ["AI text generation", "SEO optimization tips", "Payment integration", "User dashboard"],
        highlights: ["Prompt engineering", "SaaS architecture"],
        color: "primary",
    },
    {
        id: 6,
        title: "Nexus CRM",
        subtitle: "Enterprise Customer Management",
        description: "A comprehensive CRM solution designed for small businesses to track leads, manage customer interactions, and visualize sales pipelines with interactive charts.",
        tech: ["React", "NestJS", "MongoDB", "Chart.js"],
        duration: "June 2023 - Aug 2023",
        features: ["Lead tracking", "Sales pipeline visualization", "Email integration", "Automated reporting"],
        highlights: ["Data visualization", "Scalable backend"],
        color: "accent",
    },
    {
        id: 7,
        title: "VisionGuard",
        subtitle: "Real-time Object Detection",
        description: "A surveillance monitoring dashboard that utilizes computer vision to detect and classify objects in real-time video feeds for security applications.",
        tech: ["Python", "TensorFlow", "React", "WebSocket"],
        duration: "Jan 2023 - Mar 2023",
        features: ["Live video streaming", "Object classification", "Alert system", "Recording archive"],
        highlights: ["Machine Learning model integration", "Real-time data handling"],
        color: "primary",
    },
    {
        id: 8,
        title: "FinTrack Pro",
        subtitle: "Personal Finance Dashboard",
        description: "A smart finance tracker that categorizes expenses automatically, predicts future spending trends, and helps users verify spending habits against budgets.",
        tech: ["Vue.js", "Firebase", "D3.js", "Plaid API"],
        duration: "Nov 2022 - Jan 2023",
        features: ["Bank account syncing", "Expense categorization", "Budget forecasting", "Investment tracking"],
        highlights: ["Fintech integration", "Interactive data viz"],
        color: "accent",
    },
    {
        id: 9,
        title: "DocuSign Chain",
        subtitle: "Blockchain Document Verification",
        description: "A decentralized application (dApp) for securely signing and verifying confidential documents using Ethereum blockchain technology to ensure immutability.",
        tech: ["Solidity", "React", "Web3.js", "IPFS"],
        duration: "Aug 2022 - Oct 2022",
        features: ["Wallet connection", "Document hashing", "Smart contract verification", "Decentralized storage"],
        highlights: ["Smart contract development", "Blockchain security"],
        color: "primary",
    },
];

const education = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        field: "Information Technology",
        institution: "Marwadi University, Rajkot",
        duration: "Sep 2021 – May 2025",
        grade: "CGPA: 7.64",
    },
    {
        degree: "Higher Secondary (HSC)",
        field: "Science",
        institution: "Brahmanand Vidhya Mandir, Junagadh",
        duration: "June 2020 – May 2021",
        grade: "74.61%",
    },
    {
        degree: "Secondary School (SSC)",
        field: "",
        institution: "Brahmanand Vidhya Mandir, Junagadh",
        duration: "June 2018 – Mar 2019",
        grade: "85.17%",
    },
];

const certifications = [
    { name: "Node.js", issuer: "Infosys" },
    { name: "React.js", issuer: "Infosys" },
    { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
    { name: "SQL Programming", issuer: "Infosys" },
];

const extracurricular = [
    { text: "Volunteered as technical game support at MUFest 2024" },
    { text: "Active participation in open-source contributions" },
    { text: "Regular attendance at tech meetups and developer communities" },
];

const highlights = [
    { icon: "code", title: "Full-Stack Developer", description: "Experienced in MERN stack with a focus on building scalable web applications." },
    { icon: "rocket", title: "Problem Solver", description: "Passionate about solving real-world problems through clean, efficient code." },
    { icon: "users", title: "Team Player", description: "Strong communication skills and experience working in agile environments." },
    { icon: "sparkles", title: "Continuous Learner", description: "Always exploring new technologies and contributing to open-source projects." },
];

// Helper Functions
const getColorClass = (color) => color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Populate Data
    populateHero();
    populateAbout();
    populateSkills();
    populateProjects();
    populateEducation();
    populateContact();
    populateFooter();

    // Set up Interactions
    setupMobileMenu();
    setupObservers();
    setupContactForm();

    // Typewriter
    typewriterEffect(personalInfo.title, document.getElementById('typewriter-text'), 100);

    // Initialize Lucide Icons after DOM is populated
    lucide.createIcons();
});

// Populating Functions
function populateHero() {
    document.getElementById('location-text').textContent = personalInfo.location;
    document.getElementById('hero-summary').textContent = personalInfo.summary;

    // Socials
    const container = document.getElementById('social-links-container');
    const socials = [
        { icon: "github", href: personalInfo.github, label: "GitHub" },
        { icon: "linkedin", href: personalInfo.linkedin, label: "LinkedIn" },
        { icon: "mail", href: `mailto:${personalInfo.email}`, label: "Email" },
    ];

    socials.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.target = "_blank";
        a.className = "p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110";
        a.innerHTML = `<i data-lucide="${item.icon}"></i>`;
        container.appendChild(a);
    });
}

function populateAbout() {
    const grid = document.getElementById('about-highlights');
    highlights.forEach(item => {
        const div = document.createElement('div');
        div.className = "glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2";
        div.innerHTML = `
            <div class="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <i data-lucide="${item.icon}" class="w-7 h-7"></i>
            </div>
            <h3 class="text-lg font-semibold text-foreground mb-2">${item.title}</h3>
            <p class="text-sm text-muted-foreground">${item.description}</p>
        `;
        grid.appendChild(div);
    });

    const list = document.getElementById('extracurricular-list');
    extracurricular.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = "flex items-start gap-3 fade-on-scroll";
        li.style.transitionDelay = `${index * 100}ms`;
        li.innerHTML = `
            <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <p class="text-muted-foreground">${item.text}</p>
        `;
        list.appendChild(li);
    });
}

function populateSkills() {
    const grid = document.getElementById('skills-grid');
    const categories = [
        { title: "Frontend", icon: "code", items: skills.frontend, color: "primary" },
        { title: "Backend", icon: "server", items: skills.backend, color: "accent" },
        { title: "Database", icon: "database", items: skills.database, color: "primary" },
        { title: "Tools", icon: "wrench", items: skills.tools, color: "accent" },
        { title: "Soft Skills", icon: "users", items: skills.soft, color: "primary" },
    ];

    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = "glass-card p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1";
        div.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 rounded-lg ${getColorClass(cat.color)}">
                    <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                </div>
                <h3 class="text-lg font-semibold text-foreground">${cat.title}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
                ${cat.items.map(skill => `<span class="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors">${skill}</span>`).join('')}
            </div>
        `;
        grid.appendChild(div);
    });
}

function populateProjects() {
    const grid = document.getElementById('projects-grid');
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = "glass-card p-6 cursor-pointer group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2";
        div.onclick = () => openProjectModal(proj);
        div.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">${proj.title}</h3>
                    <p class="text-sm text-muted-foreground">${proj.subtitle}</p>
                </div>
                <div class="p-2 rounded-lg bg-secondary/50 text-muted-foreground group-hover:text-primary transition-colors">
                    <i data-lucide="external-link" class="w-5 h-5"></i>
                </div>
            </div>
            <p class="text-muted-foreground text-sm mb-4 line-clamp-2">${proj.description}</p>
            <div class="flex flex-wrap gap-2">
                ${proj.tech.map(t => `<span class="px-3 py-1 rounded-full text-xs font-medium ${getColorClass(proj.color)}">${t}</span>`).join('')}
            </div>
        `;
        grid.appendChild(div);
    });
}

function populateEducation() {
    const timeline = document.getElementById('education-timeline');
    education.forEach((edu, index) => {
        const div = document.createElement('div');
        div.className = "relative pl-12 pb-8 last:pb-0 fade-on-scroll";
        div.style.transitionDelay = `${index * 100}ms`;
        div.innerHTML = `
            <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center z-10">
                <div class="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <div class="glass-card p-5 hover:translate-x-2 transition-transform">
                <div class="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 class="font-semibold text-foreground">${edu.degree}</h4>
                    <span class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">${edu.grade}</span>
                </div>
                ${edu.field ? `<p class="text-sm text-primary mb-1">${edu.field}</p>` : ''}
                <p class="text-sm text-muted-foreground mb-1">${edu.institution}</p>
                <p class="text-xs text-muted-foreground">${edu.duration}</p>
            </div>
        `;
        timeline.appendChild(div);
    });

    const certList = document.getElementById('certifications-list');
    certifications.forEach(cert => {
        const div = document.createElement('div');
        div.className = "glass-card p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300 hover:translate-x-2";
        div.innerHTML = `
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <i data-lucide="award" class="text-accent w-6 h-6"></i>
            </div>
            <div>
                <h4 class="font-medium text-foreground">${cert.name}</h4>
                <p class="text-sm text-muted-foreground">Issued by ${cert.issuer}</p>
            </div>
        `;
        certList.appendChild(div);
    });
}

function populateContact() {
    const info = document.getElementById('contact-info');
    const contactData = [
        { icon: "mail", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: "phone", label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: "map-pin", label: "Location", value: personalInfo.location, href: null },
    ];

    contactData.forEach(item => {
        const div = document.createElement('div');
        div.className = "flex items-center gap-4 hover:translate-x-2 transition-transform";
        div.innerHTML = `
            <div class="p-3 rounded-lg bg-secondary/50 border border-border/50">
                <i data-lucide="${item.icon}" class="text-primary w-5 h-5"></i>
            </div>
            <div>
                <p class="text-xs text-muted-foreground uppercase tracking-wide">${item.label}</p>
                ${item.href ? `<a href="${item.href}" class="text-foreground hover:text-primary transition-colors">${item.value}</a>` : `<p class="text-foreground">${item.value}</p>`}
            </div>
        `;
        info.appendChild(div);
    });

    const socials = document.getElementById('contact-socials');
    const socialData = [
        { icon: "github", href: personalInfo.github, label: "GitHub" },
        { icon: "linkedin", href: personalInfo.linkedin, label: "LinkedIn" },
    ];
    socialData.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = "_blank";
        a.className = "p-4 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1 hover:scale-105";
        a.innerHTML = `<i data-lucide="${link.icon}" class="w-6 h-6"></i>`;
        socials.appendChild(a);
    });
}

function populateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = personalInfo.name;
}

// Logic & Interactions
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    let isOpen = false;

    btn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove('hidden');
            // small delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                menu.classList.remove('opacity-0', 'h-0');
                menu.classList.add('h-auto', 'opacity-100');
            }, 10);
            btn.innerHTML = `<i data-lucide="x"></i>`;
        } else {
            menu.classList.remove('opacity-100');
            menu.classList.add('opacity-0');
            setTimeout(() => {
                menu.classList.add('hidden', 'h-0');
                menu.classList.remove('h-auto');
            }, 300);
            btn.innerHTML = `<i data-lucide="menu"></i>`;
        }
        lucide.createIcons();
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isOpen = false;
            menu.classList.remove('opacity-100');
            menu.classList.add('opacity-0');
            setTimeout(() => {
                menu.classList.add('hidden', 'h-0');
                menu.classList.remove('h-auto');
            }, 300);
            btn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('glass-card', 'border-b', 'border-border/50', 'bg-card/80');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('glass-card', 'border-b', 'border-border/50', 'bg-card/80');
            nav.classList.add('bg-transparent');
        }
    });
}

function setupObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-on-scroll');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    });

    // Trigger hero animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach(el => el.classList.add('visible'));
    }, 100);

    // Projects Grid specifics
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) observer.observe(projectsGrid);
}

function typewriterEffect(text, element, speed) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');

    content.innerHTML = `
        <div class="flex items-start justify-between mb-6">
            <div>
                <h3 class="text-2xl font-bold text-foreground mb-1">${project.title}</h3>
                <p class="text-muted-foreground">${project.subtitle}</p>
            </div>
            <button onclick="closeProjectModal()" class="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                <i data-lucide="x"></i>
            </button>
        </div>
        
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <i data-lucide="calendar" class="text-primary w-4 h-4"></i>
            ${project.duration}
        </div>
        
        <p class="text-foreground mb-6">${project.description}</p>
        
        <div class="mb-6">
            <h4 class="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
                ${project.tech.map(t => `<span class="px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-secondary/50 text-foreground">${t}</span>`).join('')}
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-sm font-semibold text-foreground mb-3">Key Features</h4>
            <ul class="space-y-2">
                ${project.features.map(f => `
                    <li class="flex items-center gap-2 text-muted-foreground">
                        <i data-lucide="check-circle-2" class="text-primary w-4 h-4 flex-shrink-0"></i> ${f}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;

    modal.classList.remove('opacity-0');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');

    lucide.createIcons();

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closeProjectModal();
    };
}

window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');

    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Loading state
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<div class="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>`;

        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        const serviceID = 'service_4f4c6mp';
        const templateID = 'template_gyzwqqs';

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                // Success
                successMsg.classList.remove('hidden');
                successMsg.querySelector('p').textContent = "Thank you! Your message has been sent successfully.";
                successMsg.classList.remove('bg-red-500/10', 'border-red-500/30');
                successMsg.classList.add('bg-primary/10', 'border-primary/30');
                form.reset();
            })
            .catch((err) => {
                // Error
                console.error('EmailJS Error:', err);
                successMsg.classList.remove('hidden');
                successMsg.querySelector('p').textContent = "Something went wrong. Please try again later.";
                // Change style to error
                successMsg.classList.remove('bg-primary/10', 'border-primary/30');
                successMsg.classList.add('bg-red-500/10', 'border-red-500/30');
            })
            .finally(() => {
                // Reset Button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // Hide message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            });
    });
}
