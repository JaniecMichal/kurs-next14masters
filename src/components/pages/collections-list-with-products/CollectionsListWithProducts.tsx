import { ProductsCollection } from "@/components/templates/products-collection/ProductsCollection";
import { CollectionListItemFragment } from "@/gql/graphql";

type CollectionsListWithProducts = {
	collections: CollectionListItemFragment[];
};

export const CollectionsListWithProducts = ({ collections }: CollectionsListWithProducts) => {
	if (collections.length < 0) {
		return <>Sorry, for now we don't have any new collections</>;
	}

	return collections.map((collection) => (
		<ProductsCollection
			name={collection.name}
			description={collection.description}
			products={collection.products}
		/>
	));
};
