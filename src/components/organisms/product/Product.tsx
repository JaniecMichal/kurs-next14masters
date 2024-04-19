import { ProductFullDescription } from "@/components/atoms/product-full-description/ProductFullDescription";
import { ProductImage } from "@/components/atoms/product-image/ProductImage";
import { ProductFragment } from "@/gql/graphql";

export const Product = ({ product }: { product: ProductFragment }) => {
	return (
		<article className="flex h-[600px] items-center justify-center gap-12">
			{!!product.images && !!product.images[0] && (
				<ProductImage src={product.images[0].url} alt={product.name} width={400} height={600} />
			)}
			<section className="flex-1">
				<ProductFullDescription
					name={product.name}
					price={product.price}
					description={product.description}
				/>
			</section>
		</article>
	);
};
