import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
  Anchor,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconExternalLink,
  IconTransform,
  IconReceipt,
  IconLayout,
  IconStack2,
} from "@tabler/icons-react";
import { useStyles } from "./Tokenomics.styles";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const features = [
  {
    icon: IconTransform,
    title: "Token supply",
    description: "The total supply of the token is 1,000,000,000,000,000.",
  },
  {
    icon: IconFileCode,
    title: "Standard",
    description:
      "Etherspay Token is built on the ERC-20 standard of the Ethereum blockchain",
  },
  {
    icon: IconReceipt,
    title: "Fees",
    description:
      "A 10% fee is charged on every transaction. 5% is distributed to holders and 5% is added to liquidity.",
  },
  {
    icon: IconStack2,
    title: "Distribution",
    description:
      "The token is distributed to holders based on the percentage of tokens they hold.",
  },
];

export default function Tokenomics() {
  const { classes } = useStyles();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = features.map((feature, i) => (
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
    >
      <ThemeIcon size={44} radius="md" variant="light">
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </motion.div>
  ));

  return (
    <div className={classes.wrapper} id="tokenomics" ref={ref}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Tokenomics
          </Title>
          <Text c="dimmed">
            Etherspay Token is a community driven, fair launched DeFi Token. We
            are building a platform that will allow users to send and receive
            crypto payments on the web.
          </Text>

          <Button mt="xl" rightIcon={<IconExternalLink size={16} />}>
            View on Etherscan
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
