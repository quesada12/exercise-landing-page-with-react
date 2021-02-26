import React from "react";
import PropTypes from "prop-types";

export function Footer(props) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid justify-content-center">
				<span className="navbar-text">
					{props.companyName}, Copyright © {new Date().getFullYear()}
				</span>
			</div>
		</nav>
	);
}

Footer.propTypes = {
	companyName: PropTypes.string
};
