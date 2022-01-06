import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    closeButton: {
      position: "absolute",
      right: 8,
      top: 8,
      color: 'grey',
    },
  });
