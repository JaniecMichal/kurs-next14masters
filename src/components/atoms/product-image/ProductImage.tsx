type ProductImage = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductImage = ({ src, alt, width, height }: ProductImage) => {
	return (
		<div className="h-[500px] overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<img
				width={width || 320}
				height={height || 500}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
