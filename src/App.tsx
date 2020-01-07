import React, { useEffect } from "react";
import TodoList from "./components/ToDo/TodoList";
import Context from "./context";
import AddTodo from "./components/ToDo/AddTodo";
import Loader from "./Loader";
import Modal from "./components/Modal/Modal";

import Meme from "./components/Memes/Meme";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //-------------------------------------------------//
  const [todos, setTodos] = React.useState([]) as any;
  const [loading, setLoading] = React.useState(true) as any;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
    // eslint-disable-next-line
  }, []);

  function toggleTodo(id: any) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  const memes = {
    id: 1,
    name: "Jerry cringed",
    description: "nice meme lmao",
    tags: "animals",
    owner: 1
  };

  return (
    <Router>
      <Context.Provider value={{ removeTodo }}>
        <div className="wrapper">
          <Header />
          <Meme {...memes} />
          <Route path="/all" component={Board} />
          <Route path="/meme" component={Meme} />
          <section>
            <Modal />
            <AddTodo onCreate={addTodo} />
            {loading && <Loader />}

            {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} />
            ) : loading ? null : (
              <p>nothing here</p>
            )}
          </section>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
