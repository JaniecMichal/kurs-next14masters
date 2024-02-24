import { ProductItem } from "@/components/types";
import { formatMoney } from "@/utils";

type ProductFullDescriptionProps = Pick<
	ProductItem,
	"name" | "price" | "description" | "longDescription"
>;

export const ProductFullDescription = ({
	name,
	price,
	description,
	longDescription,
}: ProductFullDescriptionProps) => {
	return (
		<>
			<header>
				<h1 className="mx-auto mb-4 text-left text-4xl text-slate-800">{name}</h1>
			</header>
			<p className="mb-2 text-lg">Price: {formatMoney(price)}</p>
			<p className="mb-2 text-lg">{description}</p>
			<p className="mb-2 text-sm">{longDescription}</p>
		</>
	);
};
