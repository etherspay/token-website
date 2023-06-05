import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { HEADER_HEIGHT, useStyles } from "./Header.styles";

const links = [
  {
    link: "#roadmap",
    label: "Roadmap",
  },
  {
    link: "#tokenomics",
    label: "Tokenomics",
  },
  {
    link: "#whitepaper",
    label: "Whitepaper",
  },
  {
    link: "#team",
    label: "Team",
  },
  {
    link: "#socials",
    label: "Socials",
    links: [
      {
        link: "https://twitter.com/etherspay",
        label: "Twitter",
      },
      {
        link: "https://discord.gg/etherspay",
        label: "Discord",
      },
    ],
  },
];

export default function HeaderResponsive() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component="a" href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          <a href="/">
            <Image src="/etherspay-text.svg" height={28} />
          </a>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button
          component="a"
          href="https://app.uniswap.org/"
          target="_blank"
          radius="xl"
          h={30}
        >
          Buy $EPT
        </Button>
      </Container>
    </Header>
  );
}
