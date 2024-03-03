import data from '@/lib/data'
import ProductItem from '@/components/products/ProductItem'
import { Metadata } from 'next'
import productServices from '@/lib/services/productServices'
import Link from 'next/link'
import { convertDocToObj } from '@/lib/utils'

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_APP_NAME || 'Next Amazona V2',
	description:
		process.env.NEXT_PUBLIC_APP_DESC ||
		'Nextjs, Server components, Next auth, daisyui, zustand'
}

export default async function Home() {
	const featuredProducts = await productServices.getFeatured()
	const latestProducts = await productServices.getLatest()
	return (
		<>
			<div className='w-full carousel rounded-box mt-4'>
				{featuredProducts.map((product, index) => (
					<div
						key={product.slug}
						id={`slide-${index}`}
						className='carousel-item relative w-full'
					>
						<Link href={`/product/${product.slug}`}>
							<img src={product.banner} className='w-full' alt={product.name} />
						</Link>

						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a
								href={`#slide-${
									index === 0 ? featuredProducts.length - 1 : index - 1
								}`}
								className='btn btn-circle'
							>
								❮
							</a>
							<a
								href={`#slide-${
									index === featuredProducts.length - 1 ? 0 : index + 1
								}`}
								className='btn btn-circle'
							>
								❯
							</a>
						</div>
					</div>
				))}
			</div>
			<h2 className='text-2xl py-2'>Latest Products</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{latestProducts.map((product) => (
					<ProductItem
						key={product.slug}
						product={convertDocToObj(product)}
					></ProductItem>
				))}
			</div>
		</>
	)
}
