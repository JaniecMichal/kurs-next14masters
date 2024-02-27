import { getProductsList } from "@/api/products";
import { ProductsList } from "@/components/organisms/products-list/ProductList";
import Link from "next/link";

export default async function Products() {
	const productsToDisplay = await getProductsList();

	return <ProductsList products={productsToDisplay} />;
}
