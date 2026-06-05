import type { SectionParam } from "../types";

export default function Nav({ sections }: { sections: Array<SectionParam> }) {
	return (
		<nav className="p-4 navtab" id="navtab">
			<div>
				<h3 className="nav-header">Categories</h3>
			</div>
			<div className="nav-body">
				<ul className="nav-list">
					{sections.map((val) => (
						<li className="nav-item p-2">
							<a
								className="nav-a d-flex"
								href={`#${val.headerID}`}
							>
								<div>{val.title}</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
