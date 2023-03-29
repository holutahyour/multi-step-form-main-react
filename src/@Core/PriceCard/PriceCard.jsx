import React from 'react'
import './PriceCard.css'

function PriceCard({title = 'title',price = 0, iconBackgroundClr="var(--gray)", active}) {
  return (
    <div className='price-card' data-active={active}>
        <div className="price-card__icon" style={{backgroundColor:iconBackgroundClr}}></div>
        <div className="price-card__info">
            <p className='price-card__info-title'>{title}</p>
            <p className='price-card__info-price'>{`$${price}/mo`}</p>
        </div>
    </div>
  )
}

export default PriceCard