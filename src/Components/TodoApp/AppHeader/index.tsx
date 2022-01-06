import { Button, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import Styles from "./styles";

interface IAppHeaderProps extends WithStyles<typeof Styles> {
  headerButtonClick: () => void;
}

function AppHeader(props: IAppHeaderProps) {
  const { classes, headerButtonClick } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3" color="textSecondary">
        Todo
      </Typography>
      <Button
        className={classes.headerButton}
        variant="outlined"
        color="primary"
        size="medium"
        onClick={headerButtonClick}
      >
        Create Todo
      </Button>
    </div>
  );
}

export default withStyles(Styles)(AppHeader);
