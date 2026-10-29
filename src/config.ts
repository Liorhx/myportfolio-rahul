export interface ProjectItem {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link: string;
    features?: string[];
}

export const config = {
    developer: {
        name: "Rahul",
        fullName: "Rahul Yadav",
        title: "AI Full Stack Developer",
        description: "AI Full Stack Developer with 1.5+ years of experience building and deploying web applications, integrating LLMs, and developing end-to-end product workflows. Skilled in AI orchestration, prompt engineering, REST APIs, databases, and cloud technologies."
    },
    social: {
        github: "https://github.com/Rahul962160",
        leetcode: "https://leetcode.com/u/RahulYadvanshii/",
        linkedin: "https://www.linkedin.com/in/rahul-yadav-a33972259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        location: "Lucknow, India"
    },
    about: {
        title: "About Me",
        description: "I am an AI Full Stack Developer with 1.5+ years of experience building and deploying production-grade web applications, integrating Large Language Models, and architecting end-to-end product workflows. Skilled in AI orchestration, prompt engineering, high-performance REST APIs, scalable database systems (DynamoDB, MongoDB, Redis), and cloud platforms (AWS, Netlify, Firebase). Active open-source contributor with 900+ GitHub commits, GATE 2025 CS qualified, and dedicated to creating fast, scalable, and intelligent software experiences."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "SportsFan360",
            period: "May 2026 - Present",
            location: "Lucknow, India",
            description: "Automated end-to-end admin workflows by integrating frontend interfaces with backend APIs and database operations. Built data pipelines for collecting, cleaning, validating, and integrating data into databases and UI components. Designed database schemas for player profiles, notifications, and store modules; integrated data models with application interfaces. Worked with Firebase, DynamoDB, AWS, and Netlify to support data management, application deployment, and product development.",
            responsibilities: [
                "Automated end-to-end admin workflows by integrating frontend interfaces with backend APIs and database operations",
                "Built data pipelines for collecting, cleaning, validating, and integrating data into databases and UI components",
                "Designed database schemas for player profiles, notifications, and store modules; integrated data models with application interfaces",
                "Worked with Firebase, DynamoDB, AWS, and Netlify to support data management, application deployment, and product development"
            ],
            technologies: ["React.js", "Node.js", "DynamoDB", "AWS", "Firebase", "Netlify", "REST APIs", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            company: "EventsBridge",
            period: "April 2025 - March 2026",
            location: "Lucknow, India",
            description: "Optimized APIs and database queries, improving LCP by 37%, FCP by 43%, and CLS by 68%. Implemented Redis caching and React Query to optimize data fetching and reduce response times. Developed OTP authentication, financial API integrations, and real-time admin dashboard workflows. Integrated code across modules, increasing mobile traffic by 30% and reducing bounce rate by 20%.",
            responsibilities: [
                "Optimized APIs and database queries, improving LCP by 37%, FCP by 43%, and CLS by 68%",
                "Implemented Redis caching and React Query to optimize data fetching and reduce response times",
                "Developed OTP authentication, financial API integrations, and real-time admin dashboard workflows",
                "Integrated code across modules, increasing mobile traffic by 30% and reducing bounce rate by 20%"
            ],
            technologies: ["React.js", "Redis", "React Query", "Node.js", "Express.js", "REST APIs", "Web Performance"]
        },
        {
            position: "Core Member (DSA/CP)",
            company: "Google Developer Groups",
            period: "2024 - 2025",
            location: "Lucknow, India",
            description: "Collaborated on community tech events and organized workshops to promote tech awareness, Data Structures & Algorithms, and competitive programming at BN College Of Engineering And Technology.",
            responsibilities: [
                "Organized technical workshops on DSA and competitive programming",
                "Collaborated on tech events and hackathons",
                "Mentored fellow students on web development and problem solving"
            ],
            technologies: ["DSA", "Competitive Programming", "C++", "Python", "Community Mentorship"]
        },
        {
            position: "B.Tech in Computer Science",
            company: "Dr. A. P. J. Abdul Kalam Technical University",
            period: "2021 - 2025",
            location: "Lucknow, India",
            description: "Graduated with 73.21% (CGPA: 7.82). Built deep theoretical and practical foundations in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Software Engineering. Qualified GATE 2025.",
            responsibilities: [
                "Qualified GATE 2025 in Computer Science & Information Technology",
                "Graduated with 73.21% aggregate (CGPA: 7.82)",
                "Active contributor with 900+ commits on GitHub"
            ],
            technologies: ["Computer Science", "Algorithms", "DBMS", "Operating Systems", "Networking"]
        },
    ],
    projects: [
        {
            id: 18,
            title: "BigIdeaSolar",
            category: "Clean Energy / Solar Installation",
            technologies: "React, Tailwind CSS, Vercel, UPNEDA / PM Surya Ghar Portal",
            image: "/images/BigIdeaSolar.jpg",
            description: "BigIdeaSolar is Uttar Pradesh's trusted rooftop solar installation platform helping homes across Lucknow reduce electricity bills to zero with government subsidies.",
            link: "https://bigideasolar.vercel.app/",
            features: [
                "UPNEDA and PM Surya Ghar registered channel partner guidance",
                "Interactive solar cost and subsidy calculator (1 kW to 10 kW)",
                "Guaranteed ₹108,000 direct DBT bank subsidy filing and portal support",
                "100% UPPCL (MVVNL) net-metering approved installations",
                "Certified top-tier brands including Tata, Waaree, Adani, and Vikram Solar",
                "Admin CRM dashboard to control and manage all customer leads"
            ]
        },
        {
            id: 1,
            title: "VentureFlow",
            category: "Fintech / Networking",
            technologies: "React, Tailwind CSS, Firebase, Firestore, Socket.io",
            image: "/images/VentureFlow.jpg",
            description: "VentureFlow is a platform for founders and investors to share ideas and connect.",
            link: "https://ventureflow-3rya.onrender.com",
            features: [
                "Firebase Authentication with role-based access",
                "Startup idea posting and discovery",
                "Real-time chat with Socket.io",
                "Firestore database integration",
                "Responsive React and Tailwind UI",
                "Full-stack deployment on Render"
            ]
        },
        {
            id: 2,
            title: "Aviator",
            category: "MERN / Real-Time Cloud",
            technologies: "React, Node.js, Express, MongoDB, AWS, Tailwind CSS",
            image: "/images/Aviotor.jpg",
            description: "Aviator is a multiplier-based, real-time web app built on the MERN stack and hosted on AWS.",
            link: "https://aviator-smoky.vercel.app/",
            features: [
                "JWT-based authentication and secure user management",
                "Interactive dashboard for project and workflow tracking",
                "Real-time data updates with RESTful APIs",
                "Responsive UI built with React and Tailwind CSS",
                "AWS deployment with scalable cloud infrastructure"
            ]
        },
        {
            id: 7,
            title: "Moviemaniac",
            category: "Entertainment / API",
            technologies: "React, REST APIs, CSS3, JavaScript",
            image: "/images/MovieManiac.jpg",
            description: "A React app to search and browse movies using live API data.",
            link: "https://moviemaniac-tpn5.onrender.com",
            features: [
                "Upcoming, Toprated, Popular",
                "Light/Dark mode support",
                "Responsive",
                "Sort by date, star, rating"
            ]
        },
        {
            id: 4,
            title: "AI Interview Taker",
            category: "AI / EdTech Platform",
            technologies: "Node.js, Express, MongoDB, Gemini AI, JWT, React, Tailwind CSS",
            image: "/images/AIInterviewTaker.jpg",
            description: "An AI-powered interview practice platform that simulates real technical interviews by generating dynamic questions and analyzing candidate responses.",
            link: "https://aiinterviewpro-3g8d.onrender.com",
            features: [
                "AI-generated interview questions using Gemini AI",
                "JWT-based authentication with role-based interview sessions",
                "AI analysis of responses to track performance, progress, and weak areas",
                "Responsive UI built with React and Tailwind CSS",
                "Full-stack MERN deployment with Express serving frontend and backend"
            ]
        },
        {
            id: 5,
            title: "Dental Clinic Website",
            category: "Healthcare / Web App",
            technologies: "React, Tailwind CSS, Google Maps API, Responsive Design",
            image: "/images/DentalClinic.jpg",
            description: "A professional website developed for a local dental clinic to showcase services, clinic information, and enable patients to easily connect with the dentist.",
            link: "https://dentist-id6o.onrender.com",
            features: [
                "Modern and responsive UI for mobile and desktop",
                "Service pages for different dental treatments",
                "Contact form for patient inquiries",
                "Google Maps integration for clinic location",
                "Fast loading and SEO-friendly structure"
            ]
        },
        {
            id: 6,
            title: "E-Commerce Platform (CartWish)",
            category: "E-Commerce / Full-Stack",
            technologies: "MongoDB, Express, React, Node.js, React Query",
            image: "/images/CartWish.jpg",
            description: "CartWish is a full-stack MERN e-commerce app for browsing and purchasing iPhone products.",
            link: "https://cartwish-1.onrender.com",
            features: [
                "Authentication & Authorization",
                "iPhone Product Catalog with dynamic data",
                "Infinite Scroll using React Query",
                "Optimized API data fetching and caching",
                "Add to Cart functionality"
            ]
        },

        {
            id: 3,
            title: "InstaCrm",
            category: "SaaS / CRM System",
            technologies: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT",
            image: "/images/InstaCrm.jpg",
            description: "Sales pipeline and CRM platform with lead, contact, and deal tracking dashboard.",
            link: "https://instagram-crm.onrender.com",
            features: [
                "Lead, contact, and deal management",
                "JWT-based authentication with role-based access",
                "Sales pipeline and customer tracking dashboard",
                "Responsive UI built with React and Tailwind CSS",
                "MERN stack architecture with MongoDB integration"
            ]
        },
        {
            id: 8,
            title: "ShopKaro",
            category: "E-Commerce / Retail",
            technologies: "React, Redux, Node.js, REST APIs, Tailwind CSS",
            image: "/images/ShopKaro.jpg",
            description: "ShopKaro is a responsive React-based shopping website with user login, product browsing, and cart management.",
            link: "https://shopkaro-mwtn.onrender.com",
            features: [
                "User Authentication",
                "Category Filter & Search",
                "Cart System with Checkout",
                "Mobile-First Responsive Design"
            ]
        },
        {
            id: 9,
            title: "News-Monk",
            category: "News / Content App",
            technologies: "React, Node.js, News API, JWT",
            image: "/images/NewsMonk.jpg",
            description: "NewsMonk is a smart news digest web app that delivers personalized news summaries.",
            link: "https://newss-app-4pp3.onrender.com",
            features: [
                "Email verification",
                "Authentication",
                "Personalized news feed"
            ]
        },
        {
            id: 10,
            title: "CarKharido",
            category: "Marketplace / Automotive",
            technologies: "React, CSS Modules, JavaScript",
            image: "/images/CarKharido.jpg",
            description: "CarKharido is a responsive React app to browse, filter, and explore cars with a sleek UI, designed for an enhanced vehicle shopping experience.",
            link: "https://carkharido-az6u.onrender.com",
            features: [
                "Category Filter & Search",
                "Responsive Design",
                "Wishlist management"
            ]
        },
        {
            id: 11,
            title: "Task Manager",
            category: "Productivity / SaaS",
            technologies: "React, HTML5 Drag & Drop, CSS3",
            image: "/images/TaskManager.jpg",
            description: "A React app to manage tasks with drag-and-drop for easy status updates.",
            link: "https://todo-sbvw.onrender.com",
            features: [
                "Add and delete tasks",
                "Filter tasks by status (all, active, completed)",
                "Drag and drop your status"
            ]
        },
        {
            id: 12,
            title: "Wanderlust",
            category: "Travel / Hospitality",
            technologies: "Node.js, Express, MongoDB, Interactive Maps",
            image: "/images/Wanderlust.jpg",
            description: "Wanderlust is a full-stack web application designed to help users explore and manage travel destinations.",
            link: "https://majorprojectnpm.onrender.com/listings",
            features: [
                "User authentication",
                "Listing management",
                "Interactive maps"
            ]
        },
        {
            id: 13,
            title: "Spotify",
            category: "Media / Frontend",
            technologies: "HTML, CSS, Bootstrap, JavaScript",
            image: "/images/Spotify.jpg",
            description: "A frontend Spotify Clone project built using HTML, CSS, and Bootstrap reproducing the music streaming interface.",
            link: "https://spotify-oo9v.onrender.com",
            features: [
                "Music player UI layout",
                "Full mobile-first responsiveness",
                "Bootstrap & CSS styling"
            ]
        }
    ],
    contact: {
        email: "rahul.yadav.sde1@gmail.com",
        phone: "+91 9044914653",
        github: "https://github.com/Rahul962160",
        leetcode: "https://leetcode.com/u/RahulYadvanshii/",
        linkedin: "https://www.linkedin.com/in/rahul-yadav-a33972259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    skills: {
        develop: {
            title: "AI & BACKEND",
            description: "LLM Orchestration, APIs & High-Performance Systems",
            details: "Integrating LLM APIs (Gemini AI), architecting AI workflow orchestration, response evaluation, and prompt engineering. Developing scalable backend microservices and REST APIs using Node.js, Express.js, and Python with secure JWT auth.",
            tools: ["Gemini AI", "LLM APIs", "Prompt Engineering", "AI Orchestration", "Node.js", "Express.js", "REST APIs", "Python", "JWT", "WebSockets"]
        },
        design: {
            title: "FRONTEND & CLOUD",
            description: "Modern Web Apps, Scalable Databases & Cloud Workflows",
            details: "Building responsive, high-performance web applications using React.js, Next.js, and Tailwind CSS. Designing scalable schemas across DynamoDB, MongoDB, Redis, and MySQL. Deploying production pipelines with Docker, AWS, Netlify, and Firebase.",
            tools: ["React.js", "Next.js", "Tailwind CSS", "DynamoDB", "MongoDB", "Redis", "MySQL", "Docker", "AWS", "Netlify"]
        }
    },
    certifications: [
        {
            title: "AI-Powered Applications & Prompt Engineering",
            issuer: "Google AI Studio",
            description: "Built and deployed AI-powered applications using Google AI Studio with training in prompt engineering, AI application design, and cloud-based deployment workflows."
        },
        {
            title: "Certified React Developer",
            issuer: "Udemy",
            description: "Built three real-world React applications focusing on modern React development, hooks architecture, and responsive UI design."
        },
        {
            title: "Certified Full Stack Developer",
            issuer: "Apna College",
            description: "Developed production full stack web applications using MongoDB, Express.js, React.js, and Node.js."
        },
        {
            title: "GATE 2025 Qualified (CS/IT)",
            issuer: "Graduate Aptitude Test in Engineering",
            description: "Demonstrated strong mastery of core computer science fundamentals, data structures, algorithms, and engineering problem-solving."
        }
    ],
    highlights: [
        { label: "Experience", value: "1.5+ Years" },
        { label: "GitHub Commits", value: "900+" },
        { label: "Performance Gain", value: "37% LCP" },
        { label: "GATE Qualified", value: "2025 CS" }
    ]
};
