import { executeGraphql } from "@/api/products";
import { CollectionsListWithProducts } from "@/components/pages/collections-list-with-products/CollectionsListWithProducts";
import { CollectionsGetListDocument } from "@/gql/graphql";

export default async function Home() {
	const { collections } = await executeGraphql(CollectionsGetListDocument, {});

	return (
		<section className="mx-auto max-w-screen-2xl p-12">
			<h1 className="text-center text-6xl font-bold text-zinc-800">Welcome in ImpShop</h1>
			<CollectionsListWithProducts collections={collections.data} />
		</section>
	);
}
