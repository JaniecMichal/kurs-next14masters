import { formatMoney } from "@/utils";

type ProductDescriptionProps = {
	name: string;
	category: string;
	price: number;
};

export const ProductDescription = ({ name, category, price }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-400">{name}</h3>
				<p className="text-sm text-gray-300">
					<span className="sr-only">Category</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-300">
				<span className="sr-only">Price</span> {formatMoney(price)}
			</p>
		</div>
	);
};
