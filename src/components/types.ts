export type ProductItem = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	longDescription: string;
	image: {
		src: string;
		alt: string;
	};
};
