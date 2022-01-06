import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    tableRows: {
      cursor: "pointer",
    },
    headRow: {
      backgroundColor: "black",
      color: "white",
    },
  });
