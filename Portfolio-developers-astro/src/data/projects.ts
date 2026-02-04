export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "React",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:atom",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178C6]/20 text-[#a8d1ff]",
        icon: "lucide:braces",
    },
    REACTFLOW: {
        name: "React Flow",
        class: "bg-white/10 text-white",
        icon: "lucide:workflow",
    },
    FIREBASE: {
        name: "Firebase",
        class: "bg-[#FFCA28]/20 text-[#ffe08a]",
        icon: "lucide:flame",
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#3776AB]/20 text-[#9cc8ff]",
        icon: "lucide:terminal",
    },
    FLASK: {
        name: "Flask",
        class: "bg-white/10 text-white",
        icon: "lucide:flask-conical",
    },
    CPP: {
        name: "C++",
        class: "bg-[#00599C]/20 text-[#9fd0ff]",
        icon: "lucide:code-2",
    },
    SFML: {
        name: "SFML",
        class: "bg-[#2ea44f]/20 text-[#7ee2a8]",
        icon: "lucide:gamepad-2",
    },
    PLOTLY: {
        name: "Plotly",
        class: "bg-[#3F4F75]/20 text-[#c8d5ff]",
        icon: "lucide:chart-scatter",
    },
    SCIPY: {
        name: "SciPy",
        class: "bg-[#8CAAE6]/20 text-[#dce7ff]",
        icon: "lucide:sigma",
    },
};

export const PROJECTS = [
    {
        title: "Lorenz Predictability Horizon",
        description: "An interactive 3d simulation of the Lorenz system of differential equations to study sensitivity to initial conditions and parameter-driven transitions to chaos.",
        github: "https://github.com/AadityaUNI/Lorenz_Horizons",
        image: "/projects/lorenz.png",
        tags: [TAGS.PYTHON, TAGS.PLOTLY, TAGS.SCIPY],
    },
    {
        title: "Royal Clash",
        description:
            "A tower defense strategy game built in C++ using SFML (Simple and Fast Multimedia Library). Battle against another player by deploying units, managing elixir, and destroying enemy towers!",
        github: "https://github.com/aadityaUNI/Royal-Clash",
        image: "/projects/royal.png",
        tags: [TAGS.CPP, TAGS.SFML],
    },
    {
        title: "R-Lock",
        description:
            "A Flask web app that auto-detects user region and surfaces real-time streaming availability via APIs with direct provider links.",
        github: "https://github.com/aadityaUNI/RLOCK",
        image: "/projects/rlock.png",
        tags: [TAGS.PYTHON, TAGS.FLASK],
    }
];
