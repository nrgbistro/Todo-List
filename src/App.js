import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";
import React, {useState} from "react";
import CreateTodo from "./components/CreateTodo";

function App() {
	const [showCreateTodo, toggleCreateTodo] = useState(true);

	function onCreate() {
		toggleCreateTodo(!(showCreateTodo));
	}

	function onSubmit() {
		toggleCreateTodo(!(showCreateTodo));
	}

	return (
		<div className={"appContainer"}>
			<Navbar onClick={onCreate}></Navbar>
			<TodosContainer></TodosContainer>
			{showCreateTodo && <CreateTodo onSubmit={onSubmit}></CreateTodo>}
		</div>
	);
}

export default App;
