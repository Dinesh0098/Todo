import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { LocalStorage, Todo } from "../../Storage/LocalStorage";
import { WithStyles } from "@material-ui/styles";
import Styles from "./styles";
import { connect } from "react-redux";
import { setTodos } from "../../Storage/TodoStore/Actions/TodoActions";
import { bindActionCreators } from "redux";
import { Typography } from "@material-ui/core";

interface ITodoListState {
  todos: Todo[];
}

interface ITodoListProps extends WithStyles<typeof Styles> {
  todoList?: Todo[];
  setTodos?: (todos: Todo[]) => void;
}

@(connect(
  (state: any) => ({
    todoList: state,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        setTodos,
      },
      dispatch
    )
) as any)
class TodoList extends React.PureComponent<ITodoListProps, ITodoListState> {
  constructor(props: ITodoListProps) {
    super(props);
    this.state = {
      todos: this.props.todoList || [],
    };
  }

  localStorage = new LocalStorage();

  componentDidMount() {
    const { todos } = this.state;
    if (!todos.length) {
      const { setTodos } = this.props;
      const newTodos = this.localStorage.getTodos();
      this.setState({ todos: newTodos });
      setTodos && setTodos(newTodos);
    }
  }

  componentDidUpdate() {
    const { todoList } = this.props;

    if (todoList && todoList.length !== this.state.todos.length) {
      this.setState({ todos: todoList });
    }
  }

  private openTodo(todoId: string) {
    alert(todoId);
  }

  render() {
    const { classes } = this.props;
    const { todos } = this.state;
    return todos.length ? (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headRow}>Name</TableCell>
              <TableCell className={classes.headRow}>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.todos.map((todo) => (
              <TableRow
                key={todo.id}
                className={classes.tableRows}
                style={{ backgroundColor: `${todo.color}` }}
                onClick={() => {
                  this.openTodo(todo.id);
                }}
              >
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <Typography variant="h5" color="primary">
        No Todo Created.
      </Typography>
    );
  }
}

export default withStyles(Styles)(TodoList);
