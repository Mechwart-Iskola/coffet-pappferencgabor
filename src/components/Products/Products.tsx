import { useEffect, useState } from 'react'
import { ProductType } from '../../types/Product';
import './products.css'
import ProductCard from '../productCard/ProductCard';

const Products = () => {
	{/*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/ }
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch("products.json")
		.then(res => res.json())
		.then(data => setProducts(data))

		console.log(products);
	}, [])

	{/*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/ }
	return (
		<div id='products' className='products'>
			<h2 className='section__title'>THE MOST <br /> REQUESTED</h2>

			<div className='products__container'>
				{
					products.map((item) => (
						<ProductCard {...item}/>
					))
				}
			</div>
		</div>
	)
}

export default Products
