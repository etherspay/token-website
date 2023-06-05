import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan("md")]: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      paddingBottom: 0,
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(43),
    lineHeight: 1.3,
    fontWeight: 900,
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: "teal",
    }).background,

    borderRadius: theme.radius.sm,
    padding: `${rem(2)} ${rem(12)}`,
  },
  logoContainer: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
