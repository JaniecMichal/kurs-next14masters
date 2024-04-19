import { executeGraphql } from "@/api/products";
import { ProductGetByIdDocument } from "@/gql/graphql";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});

	return {
		title: product?.name || "ImpShop - single product page",
		description: product?.description || "Here you can find detailed information about product",
	};
}

export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className="prose max-w-screen-2xl p-12 text-slate-800">{children}</section>;
}
