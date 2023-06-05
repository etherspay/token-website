import { Container, Group, Anchor, rem, Image } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useStyles } from "./Footer.styles";

const links = [
  {
    link: "https://twitter.com/etherspay",
    label: "Twitter",
  },
  {
    link: "https://discord.gg/etherspay",
    label: "Discord",
  },
];

export default function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <a href="/">
          <Image src="/etherspay-text.svg" height={28} />
        </a>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
