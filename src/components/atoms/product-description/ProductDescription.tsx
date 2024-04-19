import { formatMoney } from "@/utils";

type ProductDescriptionProps = {
	name: string;
	category?: string;
	price: number;
};

export const ProductDescription = ({ name, category, price }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex items-start justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-600">{name}</h3>
				<p className="text-sm text-gray-600">
					<span className="sr-only">Category</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-600">
				<span className="sr-only">Price</span> {formatMoney(price)}
			</p>
		</div>
	);
};
