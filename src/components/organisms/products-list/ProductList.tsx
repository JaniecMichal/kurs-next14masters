import { ProductListItem } from "@/components/molecules/product-list-item/ProductListItem";
import type { ProductItem } from "@/components/types";

type ProductListProps = {
	products: ProductItem[];
};

export const ProductsList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.name} product={product} />
			))}
		</ul>
	);
};
