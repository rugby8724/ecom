import mongoose from 'mongoose'
const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		category: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true },
		brand: { type: String, required: true },
		rating: { type: Number, required: true, default: 0 },
		numReviews: { type: Number, required: true, default: 0 },
		countInStock: { type: Number, required: true, default: 0 },
		description: { type: String, required: true },
		isFeatured: { type: Boolean, default: false },
		banner: String
	},
	{
		timestamps: true
	}
)
// if we already have the product model inside of the mongoose schema use 1st option otherwise call the model function from mongoose and
// pass it the name product with the product schema
const ProductModel =
	mongoose.models.Product || mongoose.model('Product', productSchema)
export default ProductModel

export type Product = {
	_id?: string
	name: string
	slug: string
	image: string
	banner?: string
	price: number
	brand: string
	description: string
	category: string
	rating: number
	numReviews: number
	countInStock: number
	colors?: []
	sizes?: []
}
