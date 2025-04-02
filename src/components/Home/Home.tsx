import React from 'react'
import './home.css';

const Home = () => {
	{/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/ }

	{/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/ }

	{/*A kép hátterében egy alakzat van.*/ }

	{/*A gomb mutasson az about részre */ }

	return (
		<div id='home' className='home'>
			<h2 className='home__title'>COLD COFFEE</h2>

			<div className='home__data'>
				<p className='home__description'>Find delicious hot and cold coffees with the
					best varieties, calm the pleasure and enjoy
					a good coffee, order now.</p>
				<a href="#about" className='button'>Learn More</a>
			</div>

			<div className="home__images">
				<div className="home__shape"></div>

				<img src="/img/home-splash.png" className="home__splash" alt="Coffee splash" />
				<img src="/img/bean-img.png" className="home__bean-2" alt="Coffee beans" />
				<img src="/img/home-coffee.png" className="home__coffe" alt="Cup of coffee" />
				<img src="/img/bean-img.png" className="home__bean-1" alt="Coffee beans" />
				<img src="/img/ice-img.png" className="home__ice-1" alt="Ice cubes" />
				<img src="/img/ice-img.png" className="home__ice-2" alt="Ice cubes" />
				<img src="/img/leaf-img.png" className="home__leaf" alt="Coffee leaf" />
			</div>

			<img src="/img/home-sticker.svg" className="home__sticker" alt=""/>
		</div>
	)
}

export default Home
