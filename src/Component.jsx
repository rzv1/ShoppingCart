import { useState, Component } from "react";
import {Outlet} from "react-router";

const FunctionalInput = ({ name }) => {
    const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prevTodos) => [...prevTodos, inputVal]);
        setInputVal("");
    };

    return (
        <section>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task-entry">Enter a task: </label>
                <input
                    type="text"
                    id="task-entry"
                    name="task-entry"
                    value={inputVal}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </section>
    );
};

class ClassInput extends Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputVal: "",
        };
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                {/* The input field to enter Todos */}
                <form>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text" id="task-entry" name="task-entry" />
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks!</h4>
                {/* The list of all the Todos, displayed */}
                <ul></ul>
            </section>
        );
    }
}

const Profile = () => {
    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            <Outlet />
        </div>
    );
};

export default Profile;
