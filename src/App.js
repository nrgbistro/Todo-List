import Todo from "./components/Todo.js";
import React, {useState} from "react";

function App() {
	const [todoList, setTodoList] = useState([{
		title: "Title",
		description: "Fuck you",
	}, {
		title: "Todo 2",
		description: "No fuck you",
	}]);

	console.log(todoList);

	function removeFromList(index) {
		const updatedList = [...todoList];
		updatedList.filter((todo, i) => i !== index);
		setTodoList(updatedList);
	}

	return (
		<div className="todos">
			{todoList.map((todo, index) => <Todo title={todo.title} description={todo.description}
												 onDelete={() => removeFromList(index)}/>)}
		</div>
	);
}

export default App;
