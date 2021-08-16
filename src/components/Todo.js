function Todo(params) {
	return (
		<div className="card">
			<h1>{params.title}</h1>
			<p>{params.description}</p>
			<button className="delete-btn" onClick={params.onDelete}>Delete</button>
		</div>
	);
}

export default Todo;