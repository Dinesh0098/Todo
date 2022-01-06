import { Button, TextField, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { v4 } from "uuid";
import { LocalStorage, Todo } from "../../Storage/LocalStorage";
import { addTodo } from "../../Storage/TodoStore/Actions/TodoActions";
import Styles from "./styles";

interface ITodoFormProps extends WithStyles<typeof Styles> {
  todoId?: string;
  addTodo?: (todo: Todo) => void;
}

interface ITodoFormState {
  name: string;
  category: string;
}

@(connect(
  (state: any) => ({
    todoList: state,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        addTodo,
      },
      dispatch
    )
) as any)
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
    const { addTodo } = this.props;
    const todo = { id: v4(), name, category, color: "" };
    this.localStore.addTodo(todo);

    this.setState({ name: "", category: "" });
    addTodo && addTodo(todo);
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
