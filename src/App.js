import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";

function App() {
	return (
		<div className={"appContainer"}>
			<Navbar></Navbar>
			<TodosContainer></TodosContainer>
		</div>
	);
}

export default App;
