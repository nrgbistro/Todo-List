import Todo from "./components/Todo.js";
import React, {useState} from "react";

function App() {
	const [todoList, setTodoList] = useState([{
		title: "Buy Groceries",
		description: "Lemons\n" +
			"Mangoes\n" +
			"Melon\n" +
			"Nectarines\n" +
			"Oranges\n" +
			"Papaya\n" +
			"Peaches\n" +
			"Pears\n" +
			"Pineapple",
	}, {
		title: "Do laundry",
		description: "Complete by 11/16/2021",
	}]);

	function removeFromList(index) {
		let updatedList = [...todoList];
		updatedList = updatedList.filter((todo, i) => (i !== index));
		setTodoList(updatedList);
	}

	return (
		<div className="todos">
			{todoList.map((todo, index) => <Todo title={todo.title} description={todo.description}
												 onDelete={() => removeFromList(index)} key={index}/>)}
		</div>
	);
}

export default App;
