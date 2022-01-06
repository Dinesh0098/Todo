import {
  Backdrop,
  Fade,
  Modal,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import React from "react";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";
import AppHeader from "./AppHeader";
import Styles from "./styles";

interface ITodoAppProps extends WithStyles<typeof Styles> {}

interface ITodoAppState {
  isModalOpen: boolean;
}

class TodoApp extends React.PureComponent<ITodoAppProps, ITodoAppState> {
  constructor(props: ITodoAppProps) {
    super(props);
    this.state = { isModalOpen: false };

    this.closeCreateTodoDialogue = this.closeCreateTodoDialogue.bind(this);
    this.openCreateTodoDialogue = this.openCreateTodoDialogue.bind(this);
  }

  private openCreateTodoDialogue() {
    this.setState({ isModalOpen: true });
  }

  private closeCreateTodoDialogue() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <AppHeader headerButtonClick={this.openCreateTodoDialogue} />
        <hr />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isModalOpen}
          onClose={this.closeCreateTodoDialogue}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isModalOpen}>
            <div className={classes.paper}>
              <TodoModal
                handleClose={this.closeCreateTodoDialogue}
                modalOpenState={isModalOpen}
                classes={undefined}
              />
            </div>
          </Fade>
        </Modal>
        <TodoList />
      </>
    );
  }
}

export default withStyles(Styles)(TodoApp);
