import React from "react";

//Components
import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//Var
let menuItems = [
	{ name: "Home", target: "#", isActive: true },
	{ name: "About", target: "#", isActive: false },
	{ name: "Services", target: "#", isActive: false },
	{ name: "Contact", target: "#", isActive: false }
];

let cards = [
	{
		image: "http://placehold.it/500x325.jpg",
		title: "Card Title",
		text:
			"Some quick example text to build on the card title and make up the bulk of the cards content.",
		buttonURL: "#",
		buttonLabel: "Find out more!"
	},
	{
		image: "http://placehold.it/500x325.jpg",
		title: "Card Title",
		text:
			"Some quick example text to build on the card title and make up the bulk of the cards content.",
		buttonURL: "#",
		buttonLabel: "Find out more!"
	},
	{
		image: "http://placehold.it/500x325.jpg",
		title: "Card Title",
		text:
			"Some quick example text to build on the card title and make up the bulk of the cards content.",
		buttonURL: "#",
		buttonLabel: "Find out more!"
	},
	{
		image: "http://placehold.it/500x325.jpg",
		title: "Card Title",
		text:
			"Some quick example text to build on the card title and make up the bulk of the cards content.",
		buttonURL: "#",
		buttonLabel: "Find out more!"
	}
];

//create your first component
export function Home() {
	let cardComponent = cards.map((card, i) => {
		return (
			<Card
				image={card.image}
				title={card.title}
				text={card.text}
				buttonURL={card.buttonURL}
				buttonLabel={card.buttonLabel}
				key={i}
			/>
		);
	});

	return (
		<div>
			<NavBar title="StartBootstrap" menu={menuItems} />
			<div className="container mt-2">
				<Jumbotron
					title="A Warm Welcome!"
					description="It uses utility classNamees for typography and spacing to space
				content out within the larger container."
					buttonURL="#"
					buttonLabel="Call to action!"
				/>
				<div className="row">{cardComponent}</div>
			</div>
			<Footer companyName="Your Website" />
		</div>
	);
}
