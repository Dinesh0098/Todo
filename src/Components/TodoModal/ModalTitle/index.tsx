import {
  DialogTitle,
  IconButton,
  Typography,
  WithStyles,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Styles from "./styles";

interface IModalTitleProps extends WithStyles<typeof Styles> {
  onClose: () => void;
  title: string;
}

const ModalTitle = (props: IModalTitleProps) => {
  const { onClose, classes, title } = props;

  return (
    <DialogTitle>
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <IconButton
        className={classes.closeButton}
        aria-label="close"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default withStyles(Styles)(ModalTitle);
