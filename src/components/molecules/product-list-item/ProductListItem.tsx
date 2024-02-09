import { ProductDescription } from "@/components/atoms/product-description/ProductDescription";
import { ProductImage } from "@/components/atoms/product-image/ProductImage";
import type { ProductItem } from "@/components/types";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="hover:cursor-pointer">
			<article>
				<ProductImage {...product.image} />
				<ProductDescription name={product.name} category={product.category} price={product.price} />
			</article>
		</li>
	);
};
