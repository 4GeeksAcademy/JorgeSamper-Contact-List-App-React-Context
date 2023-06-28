import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	return (
	
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand m-3 h1">Contact-List React & Context</span>
			</Link>
			<div className="ml-auto">
				<button
					onClick={() => navigate("/new-contact")}
					className="btn btn-success m-2">
					Add new contact
				</button>
			</div>
		</nav>
	);
};
