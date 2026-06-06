import type { SectionParam } from "../types";
import DrinkSection from "./DrinkSection";

export default function Section({ title, headerID }: SectionParam) {
	return (
		<div className="section p-5">
			<h2 id={headerID}>{title}</h2>
			<div>
				{headerID === "drink" && <DrinkSection />}
			</div>
		</div>
	);
}
