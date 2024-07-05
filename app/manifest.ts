import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "hackJersey • The intense high school New Jersey hackathon",
    short_name: "hackJersey",
    description:
      "hackJersey is a winter in-person high school hackathon, ran with 💖 by students. For 24 hours, you will get to build exciting new tech with a bunch of other high school programmers, engineers, designers, and innovators. Do you have what it takes to join in on the 24 hours of fun and learning?",
    start_url: "/",
    display: "standalone",
    background_color: "#5DC4FE",
    theme_color: "#5DC4FE",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
