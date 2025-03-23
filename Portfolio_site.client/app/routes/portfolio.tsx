import type { Route } from "./+types/portfolio";
import { Portfolio } from "../portfolioPage/portfolioPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Portflio Page" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Portflio() {
  return <Portfolio />;
}
