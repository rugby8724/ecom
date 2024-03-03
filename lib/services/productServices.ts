import dbConnect from '@/lib/dbConnect'
import ProductModel, { Product } from '@/lib/models/ProductModel'
import { cache } from 'react'

export const revalidate = 3600 // revalidate the data at most every hour

const getLatest = cache(async () => {
	await dbConnect()
	// get the latest products sort by the id descending get the first 4 documents in the product collection lean converts result to json
	const products = await ProductModel.find({}).sort({ _id: -1 }).limit(4).lean()
	return products as Product[]
})

const getFeatured = cache(async () => {
	await dbConnect()
	const products = await ProductModel.find({ isFeatured: true }).limit(3).lean()
	return products
})

const getBySlug = cache(async (slug: string) => {
	await dbConnect()
	const product = await ProductModel.findOne({ slug }).lean()
	return product as Product
})

const productService = {
	getLatest,
	getFeatured,
	getBySlug
}

export default productService
