import { Button, TextField, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { LocalStorage } from "../../Storage/LocalStorage";
import Styles from "./styles";

interface ITodoFormProps extends WithStyles<typeof Styles> {
  todoId?: string;
}

interface ITodoFormState {
  name: string;
  category: string;
}

class TodoForm extends React.PureComponent<ITodoFormProps, ITodoFormState> {
  localStore = new LocalStorage();
  constructor(props: ITodoFormProps) {
    super(props);
    this.state = {
      name: "",
      category: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
  }

  private handleNameChange(event: any) {
    this.setState({ name: event.target.value });
  }

  private handleCategoryChange(event: any) {
    this.setState({ category: event.target.value });
  }

  private handleTodo() {
    const { name, category } = this.state;
    this.localStore.addTodo({ name, category, color: "" });

    this.setState({ name: "", category: "" });
  }

  render() {
    const { name, category } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="Name"
          label="Name"
          required
          onChange={this.handleNameChange}
          value={name}
        />
        <TextField
          id="Category"
          label="Category"
          required
          onChange={this.handleCategoryChange}
          value={category}
        />
        <Button onClick={this.handleTodo}>Create</Button>
      </div>
    );
  }
}

export default withStyles(Styles)(TodoForm);
