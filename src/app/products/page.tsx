import { getProductsList } from "@/api/products";
import { ProductsList } from "@/components/organisms/products-list/ProductList";

export default async function Products() {
	const productsToDisplay = await getProductsList();

	return <ProductsList products={productsToDisplay} />;
}
