import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-lg-3 col-md-3 pb-3">
			<div className="card text-center">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
