import { getProductById } from "@/api/products";

import { Product } from "@/components/organisms/product/Product";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const productToDisplay = await getProductById(params.productId);

	return <Product product={productToDisplay} />;
}
