import { Anchor, Box, Center, Text } from "@gaze-ui/react";
import * as React from "react";
import styles from "./footer.module.css";

export const Footer = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box as="footer" className={styles.footer}>
      <Text fontSize="var(--size-font-sm)">
        Built with{" "}
        <Anchor
          href="https://github.com/studio-drishti/gaze"
          rel="nofollow"
          target="_blank"
        >
          Gaze design system
        </Anchor>
        .
      </Text>
      <Text fontSize="var(--size-font-sm)">
        &copy; {new Date().getFullYear()}
      </Text>
    </Box>
  </Center>
);
