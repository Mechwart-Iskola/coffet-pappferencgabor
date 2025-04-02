import { useEffect, useState } from 'react'
import { PopularType } from '../../types/Popular';
import PopularCard from '../popularCard/PopularCard';
import './popular.css'

const Popular = () => {
	{/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/ }
	const [popular, setPopular] = useState<PopularType[]>([]);

	useEffect(() => {
		fetch("popular.json")
		.then(res => res.json())
		.then(data => setPopular(data))

		console.log(popular);
	}, [])

	{/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/ }
	
	return (
		<div id='popular' className='popular'>
			<h2 className='section__title'>POPULAR <br /> CREATIONS</h2>

			<div className='popular__coffes'>		
				{
					popular.map((item) => (
						<PopularCard {...item}/>
					))
				}
			</div>
		</div>
	)
}

export default Popular
