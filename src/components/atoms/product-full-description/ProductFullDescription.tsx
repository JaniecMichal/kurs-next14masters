import { ProductFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductFullDescriptionProps = Pick<ProductFragment, "name" | "price" | "description">;

export const ProductFullDescription = ({
	name,
	price,
	description,
}: ProductFullDescriptionProps) => {
	return (
		<>
			<header>
				<h1 className="mx-auto mb-4 text-left text-4xl text-slate-800">{name}</h1>
			</header>
			<p className="mb-2 text-lg">Price: {formatMoney(price)}</p>
			<p className="mb-2 text-lg">{description}</p>
		</>
	);
};
