function CreateTodo(params) {
	return (
		<div className={"createTodoContainer"}>
			<div className={"center"}>
				<div className={"createTodo card"}>
					<h1>{"Create New Todo"}</h1>
					<p>{params.description}</p>
					<button className="submit-new-todo-btn" onClick={params.onSubmit}>Submit</button>
				</div>
			</div>
			<GrayBackground></GrayBackground>
		</div>
	);
}

function GrayBackground() {
	return (
		<div className={"grayBackground"}></div>
	);
}

export default CreateTodo;