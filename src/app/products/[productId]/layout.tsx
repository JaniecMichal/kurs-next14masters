import type { Metadata } from "next";
import { getProductById } from "@/api/products";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
	};
}

export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className="prose max-w-screen-2xl p-12 text-slate-800">{children}</section>;
}
