import { ProductType } from '../../types/Product'
import './productcard.css'

const ProductCard = (cardData: ProductType) => {
    return (
        <div className='products__card'>
            <div className='products__image'>
                <div className='products__shape'></div>
                <img src="/img/ice-img.png" className='products__ice-1'/>
                <img src="/img/ice-img.png" className='products__ice-2'/>
                <img src={cardData.image} alt="" className='products__coffe'/>
            </div>
            <div className="products__data">
                <h3 className='products__name'>{cardData.name}</h3>
                <h3 className='products__price'>${cardData.price}</h3>
                <button className='products__button'><img src="/img/bag.png" alt="" /></button>
            </div>
        </div>
    )
}

export default ProductCard