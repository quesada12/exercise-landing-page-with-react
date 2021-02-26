import React from "react";
import PropTypes from "prop-types";

export function NavBar(props) {
	const menuItems = props.menu.map((item, i) => {
		if (item.isActive) {
			return (
				<li className="nav-item" key={i}>
					<a className="nav-link active" href={item.target}>
						{item.name}
					</a>
				</li>
			);
		} else {
			return (
				<li className="nav-item" key={i}>
					<a className="nav-link" href={item.target}>
						{item.name}
					</a>
				</li>
			);
		}
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">
				{props.title}
			</a>

			{/* Hamburguer Button */}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">{menuItems}</ul>
			</div>
		</nav>
	);
}

NavBar.propTypes = {
	title: PropTypes.string,
	menu: PropTypes.array
};
