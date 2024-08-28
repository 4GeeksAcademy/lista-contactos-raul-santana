import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="btn btn-primary">Volver</span>
			</Link>
			<div className="ml-auto">
				<Link to="/newcontact">
					<button className="btn btn-primary">Nuevo Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
