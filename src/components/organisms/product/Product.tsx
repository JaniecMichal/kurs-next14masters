import type { ProductItem } from "@/components/types";

import { ProductFullDescription } from "@/components/atoms/product-full-description/ProductFullDescription";
import { ProductImage } from "@/components/atoms/product-image/ProductImage";

export const Product = ({ product }: { product: ProductItem }) => {
	return (
		<article className="flex h-[600px] items-center justify-center gap-12">
			<ProductImage src={product.image.src} alt={product.image.alt} width={400} height={600} />
			<section className="flex-1">
				<ProductFullDescription
					name={product.name}
					price={product.price}
					description={product.description}
					longDescription={product.longDescription}
				/>
			</section>
		</article>
	);
};
