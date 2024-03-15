import { ProductsList } from "@/components/organisms/products-list/ProductList";

export default async function CategoryProductsList({ params }: { params: { page: string } }) {
	return <ProductsList products={[]} />;
}
