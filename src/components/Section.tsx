import type { SectionParam } from "../types";
import Card from "./Card";

export default function Section({ title, headerID, cards }: SectionParam) {
	return (
		<div className="section px-5 d-flex flex-column" id={headerID}>
			<h2 className="pt-5 nav-header mb-0">{title}</h2>
			<div className="section-border flex-grow-1 my-3 py-5">
				{cards.map((val) => (
					<Card {...val} />
				))}
			</div>
		</div>
	);
}
