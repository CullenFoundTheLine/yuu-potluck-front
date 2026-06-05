export type SectionParam = {
	title: string;
	headerID: string;
	cards: Array<CardParam>;
};

export type CardParam = {
	title: string;
	sub: string;
	text: string;
};
