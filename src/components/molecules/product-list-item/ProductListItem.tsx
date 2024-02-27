import { ProductDescription } from "@/components/atoms/product-description/ProductDescription";
import { ProductImage } from "@/components/atoms/product-image/ProductImage";
import type { ProductItem } from "@/components/types";
import Link from "next/link";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link className="text-inherit no-underline" href={`/product/${product.id}`}>
			<li className="hover:cursor-pointer">
				<article>
					<ProductImage {...product.image} />
					<ProductDescription
						name={product.name}
						category={product.category}
						price={product.price}
					/>
				</article>
			</li>
		</Link>
	);
};
