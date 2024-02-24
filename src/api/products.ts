import type { ProductItem } from "@/components/types";

type ProductItemResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");

	const productsResponse = (await response.json()) as ProductItemResponse[];
	const products = productsResponse.map(
		(product): ProductItem => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			description: product.description,
			longDescription: product.longDescription,
			image: {
				alt: product.title,
				src: product.image,
			},
		}),
	);

	return products;
};

export const getProductById = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await response.json()) as ProductItemResponse;
	const product: ProductItem = {
		id: productResponse.id,
		name: productResponse.title,
		category: productResponse.category,
		price: productResponse.price,
		description: productResponse.description,
		longDescription: productResponse.longDescription,
		image: {
			alt: productResponse.title,
			src: productResponse.image,
		},
	};

	return product;
};
