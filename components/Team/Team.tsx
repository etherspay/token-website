import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";

import { useStyles } from "./Team.styles";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const team = [
  {
    image: "https://avatars.githubusercontent.com/u/87602506?v=4",
    name: "Ray Orolé",
    role: "Founder & Developer",
  },
  {
    image: "https://avatars.githubusercontent.com/u/64775835?v=4",
    name: "Jochem Groeneweg",
    role: "Developer",
  },
  {
    image: "https://avatars.githubusercontent.com/u/116819460?v=4",
    name: "Metehan Aktepe",
    role: "Marketing & Social Media",
  },
  {
    image: "https://avatars.githubusercontent.com/u/114027056?v=4",
    name: "Marwan Fikri",
    role: "UI Design & Support",
  },
];

export default function Team() {
  const { classes } = useStyles();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = team.map((member, i) => (
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
          delay: i * 0.2,
        },
      }}
      className={classes.item}
    >
      <ThemeIcon
        variant="default"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={member.image} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {member.name}
        </Text>
        <Text c="dimmed">{member.role}</Text>
      </div>
    </motion.div>
  ));

  return (
    <div className={classes.container} ref={ref}>
      <Container size={700} className={classes.wrapper} id="team">
        <Text className={classes.supTitle}>Our Team</Text>

        <Title className={classes.title} order={2}>
          Meet the <span className={classes.highlight}>awesome</span> team
          behind Etherspay
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            We are a team of crypto enthusiasts who are passionate about the
            future of crypto and the blockchain technology. We are working hard
            to make Etherspay the best payment solution for crypto.
          </Text>
        </Container>

        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {items}
        </SimpleGrid>
      </Container>{" "}
    </div>
  );
}
