import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    root: {
      
      "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
      },
      "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
      },
    },
  });
