import Section from "./Section";
import type { SectionParam } from "../types";

export default function PageContent({
	sections,
}: {
	sections: Array<SectionParam>;
}) {
	return (
		<div
			className="page-content"
			data-bs-spy="scroll"
			data-bs-target="#navtab"
		>
			{sections.map((val) => (
				<>
					<Section {...val} />
					<div className="section-divider"></div>
				</>
			))}
		</div>
	);
}
