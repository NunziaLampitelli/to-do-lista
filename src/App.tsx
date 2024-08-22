import React, { useState } from "react";
import "./app.css";

// This is to specify which characteristics I want for the items
interface Todo {
	id: number;
	text: string;
	done: boolean;
}

// React Function Component and I need it to get as a result a JSX element [syntax to work with js and html languages together]
const App: React.FC = () => {
	// This is to assign the values to an item and for later all the items
	const [todos, setTodos] = useState<Todo[]>([]);
	// The last part of the code line is to start with an empty array for the useState component

	// This is to declare the useState for a new list item when it will be written and it should follow the code in line 8 and so it should be a string to which an id in form of number will be assigned
	const [newTodo, setNewTodo] = useState(""); // --> I should get the text of the new todo
	const [nextId, setNextId] = useState(1); // This is to assign a number to the id

	// Function to add items in the list (what must happen when using it) and it starts when the user clicks on "Add to do"
	const handleAddTodo = () => {
		if (newTodo.trim()) {
			// I need this to verify if the field is empty
			// Here I add the new items
			setTodos([
				...todos, // Here I modify the list if there are already items inside with the JS spread operator
				{
					id: nextId,
					text: newTodo,
					done: false, // This is to start the items with the undone checkbox
				},
			]);

			setNextId(nextId + 1); // This is to increment the id of 1 for every item that is added in the list
			setNewTodo(""); // This is to clear what is written in the field once something is added in the list
		}
	};

	// Function to toggle (switch) the completion status of an item (todo)
	const handleToggleTodo = (id: number) => {
		// In this line I set the id parameter
		setTodos(
			todos.map(
				(
					todo // Call of the setTodos function for the new items
				) => (todo.id === id ? { ...todo, done: !todo.done } : todo) // This line is to check if the item that has been selected has a correspondence with the id
			)
		);
	};

	// This is the function to remove an item from the list filtered with the id
	const handleRemoveTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id)); // Filters out the item that has the matching id
	};

	return (
		<div className="app-container">
			<h1>To-Do List</h1>
			<input
				type="text"
				value={newTodo}
				onChange={(writtenEvent) => setNewTodo(writtenEvent.target.value)}
				placeholder="Write here a new item"
				className="input-field"
			/>
			<button className="add-button" onClick={handleAddTodo}>
				Add Todo
			</button>
			<ul className="todo-list">
				{" "}
				{todos.map((todo) => (
					<li key={todo.id} className="todo-item">
						{" "}
						<input
							type="checkbox"
							checked={todo.done}
							onChange={() => handleToggleTodo(todo.id)}
							className="todo-checkbox"
						/>
						{todo.text}
						<button
							className="remove-button"
							onClick={() => handleRemoveTodo(todo.id)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;

