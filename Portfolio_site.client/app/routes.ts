import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/portfolio.tsx"),
    route("/about", "routes/about.tsx")
] satisfies RouteConfig;
