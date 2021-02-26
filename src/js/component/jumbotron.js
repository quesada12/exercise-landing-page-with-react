import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-3">{props.title}</h1>
			<hr className="my-2"></hr>
			<p>{props.description}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonURL}
					role="button">
					{props.buttonLabel}
				</a>
			</p>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
