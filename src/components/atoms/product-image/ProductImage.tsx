type ProductImage = {
	src: string;
	alt: string;
};

export const ProductImage = ({ src, alt }: ProductImage) => {
	return (
		<div className="h-[500px] w-full overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={500}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
