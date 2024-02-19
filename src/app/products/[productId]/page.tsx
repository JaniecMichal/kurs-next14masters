export default function ProductPage({ params }: { params: { productId: string } }) {
	return (
		<section className="mx-auto max-w-screen-2xl p-12">
			<h1 className="mx-auto mb-4 text-center text-3xl text-slate-800">
				Product: {params.productId}
			</h1>
		</section>
	);
}
