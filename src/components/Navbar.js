function Navbar(params) {
	return (
		<div className={"navbar"}>
			<div className={"createTodo-btn"} onClick={params.onClick}><h1>Create Todo</h1></div>
		</div>
	);
}

export default Navbar;