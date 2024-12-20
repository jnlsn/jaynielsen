import { Box, Grid, Heading, Icon, Sidebar, Stack } from "@gaze-ui/react";
import {
  IconAccessible,
  IconBook,
  IconBrandGraphql,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconChairDirector,
  IconInfinity,
  IconKeyframes,
  IconTerminal,
  IconTestPipe,
} from "@tabler/icons-react";
import * as React from "react";

import styles from "./skills.module.css";

export const Skills = () => (
  <Sidebar side="right" sideWidth="20rem" space="var(--gaze-space-100)">
    <Box
      background="var(--gaze-color-cyan-800)"
      borderRadius="var(--gaze-radius-lg)"
      data-invert="true"
      padding="var(--gaze-space-100)"
    >
      <Stack space="var(--gaze-space-50)">
        <Heading as="h3" variant="h5">
          Engineering
        </Heading>
        <Grid
          className={styles.skills}
          minimum="10rem"
          space="var(--gaze-space-25)"
        >
          <Icon>
            <IconBrandTypescript />
            TypeScript
          </Icon>
          <Icon>
            <IconBrandJavascript />
            JavaScript
          </Icon>
          <Icon>
            <IconBrandReact />
            React
          </Icon>
          <Icon>
            <IconBrandNextjs />
            Next.js
          </Icon>
          <Icon>
            <IconBrandGraphql />
            GraphQL
          </Icon>
          <Icon>
            <IconTerminal />
            Linux
          </Icon>
          <Icon>
            <IconAccessible />
            A11y
          </Icon>
          <Icon>
            <IconTestPipe />
            Testing
          </Icon>
          <Icon>
            <IconInfinity />
            CI/CD
          </Icon>
        </Grid>
      </Stack>
    </Box>
    <Box
      background="var(--gaze-color-lime-800)"
      borderRadius="var(--gaze-radius-lg)"
      data-invert="true"
      padding="var(--gaze-space-100)"
    >
      <Stack space="var(--gaze-space-50)">
        <Heading as="h3" variant="h5">
          Multimedia
        </Heading>
        <Grid
          className={styles.skills}
          minimum="10rem"
          space="var(--gaze-space-25)"
        >
          <Icon>
            <IconBook />
            Technical Writing
          </Icon>
          <Icon>
            <IconChairDirector />
            Video production
          </Icon>
          <Icon>
            <IconKeyframes />
            Animation
          </Icon>
        </Grid>
      </Stack>
    </Box>
  </Sidebar>
);
