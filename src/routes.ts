export const routes = [
    {
        name: "Home",
        path: "/",
        component: "page-home",
        src: () => import("./pages/page-home"),
    },
    {
        name: "Design",
        path: "/design",
        component: "page-design",
        src: () => import("./pages/page-design"),
    },
    {
        name: "Email",
        path: "/email",
        component: "page-email",
        src: () => import("./pages/page-email"),
    },
    {
        name: "Hosting",
        path: "/hosting",
        component: "page-hosting",
        src: () => import("./pages/page-hosting"),
    },
];
