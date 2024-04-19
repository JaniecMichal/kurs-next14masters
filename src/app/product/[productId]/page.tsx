import { notFound } from "next/navigation";

import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/products";

import { Product } from "@/components/organisms/product/Product";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});

	if (!product) {
		notFound();
	}

	return <Product product={product} />;
}
