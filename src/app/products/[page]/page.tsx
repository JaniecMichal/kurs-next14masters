import { getProductsList } from "@/api/products";

import { ProductsList } from "@/components/organisms/products-list/ProductList";

export default async function ProductListPage({ params }: { params: { page: string } }) {
	const productsToDisplay = await getProductsList(params.page);

	return <ProductsList products={productsToDisplay} />;
}
