'use client'
import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Menu = () => {
	const { items } = useCartService()
	//trick to get rid of error in server and client side issues
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	return (
		<>
			<div>
				<ul className='flex items-stretch'>
					<li>
						<Link className='btn btn-ghost rounded-btn' href='/cart'>
							Cart
							{/* if mounted means we are on the client side && can mean if prev conditions are true then...*/}
							{mounted && items.length != 0 && (
								<div className='badge badge-secondary'>
									{/* use reduce fuction on items to calcuate qty of items in the cart */}
									{items.reduce((a, c) => a + c.qty, 0)}{' '}
								</div>
							)}
						</Link>
					</li>
					<li>
						<button className='btn btn-ghost rounded-btn' type='button'>
							Sign in
						</button>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Menu
