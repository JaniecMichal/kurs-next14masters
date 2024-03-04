import { getProductsList } from "@/api/products";

import { ProductsList } from "@/components/organisms/products-list/ProductList";

export async function generateStaticParams() {
	const pagesParamToStaticGeneration = Array.from({ length: 10 }, (_, i) => i + 1);

	return pagesParamToStaticGeneration;
}

export default async function ProductListPage({ params }: { params: { page: string } }) {
	const productsToDisplay = await getProductsList(params.page);

	return <ProductsList products={productsToDisplay} />;
}
