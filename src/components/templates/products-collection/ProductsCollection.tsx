import { ProductsList } from "@/components/organisms/products-list/ProductList";

import type { ProductListItemFragment } from "@/gql/graphql";

type ProductsCollectionProps = {
	name: string;
	description: string;
	products: ProductListItemFragment[];
};

export const ProductsCollection = ({ name, description, products }: ProductsCollectionProps) => {
	return (
		<section className="mt-8 border-b-4 border-gray-50 pb-8">
			<header>
				<h2 className="text-3xl font-semibold text-gray-600">{name}</h2>
				<p className="mb-4 text-2xl text-gray-400">{description}</p>
			</header>
			<ProductsList products={products} />
		</section>
	);
};
