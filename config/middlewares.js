module.exports = [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    {
        name: "strapi::cors",
        config: {
            origin: "https://ai-resume-builder-front-hmftplpyi-jinovatives-projects.vercel.app", // Frontend origin
            methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
            headers: "*",
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
