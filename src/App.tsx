import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import * as bootstrap from "bootstrap";
import PageContent from "./components/PageContent";

const sectionsID = [
	{ title: "Food", headerID: "food" },
	{ title: "Drink", headerID: "drink" },
	{ title: "Utensil", headerID: "utensil" },
	{ title: "Misc", headerID: "misc" },
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
