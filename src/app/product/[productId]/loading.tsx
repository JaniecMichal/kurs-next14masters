export default function Loading() {
	return (
		<div className="mx-auto text-center">
			<p aria-busy="true">
				<svg className="... mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>Loading...
			</p>
		</div>
	);
}
