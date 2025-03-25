import type { Route } from "./+types/about";
import { AboutMe } from "../aboutPage/aboutMe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me" },
    { name: "description", content: "Learn about me!" },
  ];
}

export default function Portflio() {
  return <AboutMe />;
}
