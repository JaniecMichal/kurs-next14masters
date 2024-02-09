import { ProductsList } from "@/components/organisms/products-list/ProductList";

import { MOCKED_PRODUCT_LIST } from "@/app/mocked-data";

export default function Home() {
	return (
		<section className="mx-auto max-w-screen-2xl p-12">
			<ProductsList products={MOCKED_PRODUCT_LIST} />
		</section>
	);
}
