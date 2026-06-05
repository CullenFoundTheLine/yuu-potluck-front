import type { SectionParam } from "../types";

export default function Section({ title, headerID }: SectionParam) {
	return (
		<div className="section p-5">
			<h2 id={headerID}>{title}</h2>
			<div></div>
		</div>
	);
}
