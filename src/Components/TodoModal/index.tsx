import React from "react";
import ModalTitle from "./ModalTitle";
import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  WithStyles,
  withStyles,
  TextField,
} from "@material-ui/core";
import Styles from "./styles";
import TodoForm from "../TodoForm";

interface ITodoModalProps extends WithStyles<typeof Styles> {
  modalOpenState: boolean;
  handleClose: () => void;
}

function TodoModal(props: ITodoModalProps) {
  const { modalOpenState, handleClose, classes } = props;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modalOpenState}
        className={classes.root}
      >
        <ModalTitle onClose={handleClose} title="Create Todo" />
        <DialogContent dividers>
          <TodoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(Styles)(TodoModal);
