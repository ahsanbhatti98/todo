import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    }
  }
  deleteItem(e, item) {
    console.log(item)
    this.setState({
      items: this.state.items.filter(e => e.id !== item.id)
    })
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} deleteItem={this.deleteItem} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
    }
    this.setState(prev => ({
      items: prev.items.concat(newItem),
      text: ''
    }));
  }
}

export default App;

