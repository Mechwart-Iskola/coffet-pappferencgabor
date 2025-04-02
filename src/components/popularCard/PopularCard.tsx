import { PopularType } from '../../types/Popular'
import './popularcard.css'

const PopularCard = (cardData: PopularType) => {
    return (
        <div className='popular__card'>
            <div className='popular__images'>
                <div className='popular__shape'></div>
                <img src="/img/bean-img.png" className='popular__bean-1'/>
                <img src="/img/bean-img.png" className='popular__bean-2'/>
                <img src={cardData.image} alt="" className='popular__coffee'/>
            </div>
            <div className="popular__data">
                <h3 className='popular__name'>{cardData.name}</h3>
                <p className='popular__description'>{cardData.description}</p>
                <button className='button button-dark'>Order now: {cardData.price}</button>
            </div>
        </div>
    )
}

export default PopularCard