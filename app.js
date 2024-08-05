class Todos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputTodo: "",
        todos: [],
        editIndex: null
      };
    }
  
    handleAddTodo = () => {
      const { inputTodo, todos, editIndex } = this.state;
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputTodo;
        this.setState({
          todos: updatedTodos,
          editIndex: null,
          inputTodo: ""
        });
      } else {
        this.setState({
          todos: [...todos, inputTodo],
          inputTodo: ''
        });
      }
    }
  
    handleDeleteTodo = (index) => {
      const filteredTodos = this.state.todos.filter((_, i) => i !== index);
      this.setState({ todos: filteredTodos });
    }
  
    handleEditTodo = (index) => {
      this.setState({ 
        inputTodo: this.state.todos[index],
        editIndex: index
      });
    }
  
    render() {
      const { inputTodo, todos, editIndex } = this.state;
  
      return (
        <div className="container mt-4">
          <h1>To-Do List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              value={inputTodo}
              onChange={(e) => this.setState({ inputTodo: e.target.value })}
              className="form-control"
              placeholder="Ajoutez une tâche"
            />
            <button className="btn btn-primary" onClick={this.handleAddTodo}>
              {editIndex !== null ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {todo}
                <div>
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => this.handleEditTodo(index)}>Modifier</button>
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteTodo(index)}>Supprimer</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Todos />, document.getElementById('root'));