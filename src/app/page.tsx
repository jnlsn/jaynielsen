import { Center, Stack } from "@gaze-ui/react";
import { Metadata } from "next";
import * as React from "react";

import { AboutMe } from "./components/about-me/about-me";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Title } from "./components/title";

export const metadata: Metadata = {
  title: "Jay Nielsen - Software Engineer",
};

export default function Page() {
  return (
    <Center gutter={"var(--gaze-space-50)"} maxWidth="60rem">
      <Stack space="var(--gaze-space-100)">
        <Header />
        <AboutMe />
        <Title>Skills</Title>
        <Skills />
        <Title>Projects</Title>
        <Projects />
        <Footer />
      </Stack>
    </Center>
  );
}
