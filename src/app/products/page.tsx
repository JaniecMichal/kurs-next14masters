import { getProductsList } from "@/api/products";
import { ProductsList } from "@/components/organisms/products-list/ProductList";

export default async function Products() {
	const productsToDisplay = await getProductsList();
	
	return (
		<section className="mx-auto max-w-screen-2xl p-12">
			<h1 className="mx-auto mb-4 text-center text-3xl text-slate-800">All products</h1>
			<ProductsList products={productsToDisplay} />
		</section>
	);
}
