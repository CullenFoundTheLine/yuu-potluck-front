import Section from "./Section";
import type { SectionParam } from "../types";

export default function PageContent({ sections }: { sections: Array<SectionParam> }) {
	return (
		<div className="page-content highlight" data-bs-spy="scroll" data-bs-target="#navtab">
			{sections.map((val) => (
				<Section title={val.title} headerID={val.headerID} />
			))}
		</div>
	);
}
