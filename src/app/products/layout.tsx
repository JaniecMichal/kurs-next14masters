import Link from "next/link";

import { Pagination } from "@/components/molecules/pagination/Pagination";

export default function ProductsListLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="prose mx-auto max-w-screen-2xl p-12">
			<h1 className="mx-auto mb-4 text-center text-3xl text-slate-800">All products</h1>
			{children}
			<Pagination />
		</section>
	);
}
