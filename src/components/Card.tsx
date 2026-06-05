import type { CardParam } from "../types";

export default function Card({ title, sub, text }: CardParam) {
	return (
		<>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						{sub}
					</h6>
					<p className="card-text">{text}</p>
				</div>
			</div>
		</>
	);
}
