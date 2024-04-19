import Link from "next/link";

import { ProductListItemFragment } from "@/gql/graphql";

import { ProductDescription } from "@/components/atoms/product-description/ProductDescription";
import { ProductImage } from "@/components/atoms/product-image/ProductImage";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="hover:cursor-pointer">
			<Link className="text-inherit no-underline" href={`/product/${product.id}`}>
				<article>
					{!!product.images && product.images.length > 0 && (
						<ProductImage src={product?.images[0]?.url || ""} alt={product.name} />
					)}
					{!!product.categories && product.categories.length > 0 && (
						<ProductDescription
							name={product.name}
							category={product.categories[0]?.name || ""}
							price={product.price}
						/>
					)}
				</article>
			</Link>
		</li>
	);
};
