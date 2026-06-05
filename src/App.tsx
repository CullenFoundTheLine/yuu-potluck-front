import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import * as bootstrap from "bootstrap";
import PageContent from "./components/PageContent";
import type { CardParam } from "./types";

function createSections(
	title: string,
	headerID: string,
	cards: Array<CardParam>,
) {
	return { title, headerID, cards };
}

const sectionsID = [
	createSections("Food", "food", [
		{ title: "Food1", sub: "Subtitle for Food1", text: "Text for Food1" },
	]),
	createSections("Drink", "drink", []),
	createSections("Utensil", "utensil", []),
	createSections("Misc", "misc", []),
];

function App() {
	return (
		<>
			<Nav sections={sectionsID} />
			<PageContent sections={sectionsID} />
		</>
	);
}

export default App;
