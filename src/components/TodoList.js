import React from 'react';
import '../App.css';


class TodoList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <>
                        <li key={item.id}>{item.text}</li>
                        <button onClick={(e) => this.props.deleteItem(e, item)}>X</button>
                    </>
                ))}
            </ul>
        )
    }
}
export default TodoList;
