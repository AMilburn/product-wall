import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

const Product = ({ name, category, price, image }) => {
    return (
        <div className="productCard">
            <div className="productCard__image" style={{ backgroundImage: `url(${image})`}}/>
            <div className="productCard__desc">
                <p className="productCard__name headline-baseline-base">{name}</p>
                <p className="productCard__category body-baseline-base">{category}</p>
                <p className="productCard__price body-baseline-base">${price}</p>
            </div>
        </div>
    );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
