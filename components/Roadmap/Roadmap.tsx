import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Avatar,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useStyles } from "./Roadmap.styles";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const mockdata = [
  {
    title: "Phase 1",
    phase: 1,
    steps: [
      {
        finished: true,
        text: "$EPT Token Launch",
      },
      {
        finished: true,
        text: "Discord Server Launch",
      },
      {
        finished: false,
        text: "Etherspay Core Audit",
      },
      {
        finished: false,
        text: "Etherspay API Launch",
      },
      {
        finished: false,
        text: "First Etherspay Alpha Release",
      },
      {
        finished: true,
        text: "Whitepaper",
      },
    ],
  },
  {
    title: "Phase 2",
    steps: [
      {
        finished: true,
        text: "Etherspay Documentation",
      },
      {
        finished: false,
        text: "Etherspay NodeJS SDK",
      },
      {
        finished: false,
        text: "Marketing Campaign",
      },
    ],
    phase: 2,
  },
  {
    title: "Phase 3",
    steps: [
      {
        finished: false,
        text: "Etherspay Blog",
      },
      {
        finished: false,
        text: "Etherspay Token Lending service",
      },
      {
        finished: false,
        text: "Etherspay Wallet desktop app",
      },
    ],
    phase: 3,
  },
];

export default function Roadmap() {
  const { classes } = useStyles();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = mockdata.map((feature, i) => (
    <motion.div
      key={i}
      initial={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2 * i,
        },
      }}
    >
      <Card
        h="min-content"
        shadow="md"
        radius="md"
        className={classes.card}
        padding="xl"
      >
        <Avatar color="teal" variant="light">
          {feature.phase}
        </Avatar>
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <List fz="sm" c="dimmed" mt="sm">
          {feature.steps.map((step) => (
            <List.Item
              py={5}
              key={step.text}
              icon={
                step.finished ? (
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon color="gray" size={24} radius="xl">
                    <IconCircleX size="1rem" />
                  </ThemeIcon>
                )
              }
            >
              {step.text}
            </List.Item>
          ))}
        </List>
      </Card>
    </motion.div>
  ));

  return (
    <Container size="lg" id="roadmap" ref={ref}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our Roadmap
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        To ensure the success of Etherspay, we have a roadmap that will be
        followed to the letter. We will keep you informed of the progress of
        Etherspay.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
