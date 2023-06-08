import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Center,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useStyles } from "./Hero.styles";

export default function Hero() {
  const { classes } = useStyles();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container size="lg" ref={ref}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <motion.div
            initial={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <Title className={classes.title}>
              The token that powers the{" "}
              <span className={classes.highlight}>Etherspay</span> ecosystem
              <br />
            </Title>
            <Text color="dimmed" mt="md">
              Etherspay Token ($ETP) is a utility token that powers the
              Etherspay ecosystem. It is used for governance, staking, and
              payments.
            </Text>
          </motion.div>

          <motion.div
            initial={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.2,
              },
            }}
          >
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color="teal" size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Well maintained</b> - we are working on Etherspay every day
                to make it better and better for you and your users
              </List.Item>
              <List.Item>
                <b>No hidden fees</b> - we don't charge any fees for using our
                SDK or for processing payments
              </List.Item>
              <List.Item>
                <b>Transactions are fast</b> - we use Ethereum, BSC and Polygon
                to process payments on your website
              </List.Item>
            </List>
          </motion.div>

          <Group mt={30}>
            <motion.div
              initial={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.6,
                },
              }}
            >
              <Button
                color="teal"
                radius="xl"
                size="md"
                className={classes.control}
                component="a"
                href="https://app.uniswap.org/#/"
                target="_blank"
              >
                Buy $ETP
              </Button>
            </motion.div>
            <motion.div
              initial={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.7,
                },
              }}
            >
              <Button
                component="a"
                href="https://etherspay.notion.site/Etherspay-Whitepaper-15e3740da9d043a09e724d436dd65668"
                target="_blank"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Whitepaper
              </Button>
            </motion.div>
          </Group>
        </div>
        <Center w={300} mx="auto" className={classes.logoContainer}>
          <motion.img
            src="/etherspay-new.svg"
            alt="Etherspay Logo"
            width={250}
            initial={{
              filter: "drop-shadow(0 0 150px #099269)",
              opacity: isInView ? 1 : 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            animate={{
              filter: "drop-shadow(0 0 200px #099269)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                duration: 5,
              },
            }}
            whileHover={{
              filter: "drop-shadow(0 0 60px #099269)",
              transition: { duration: 2 },
            }}
          />
        </Center>
      </div>
    </Container>
  );
}
