import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../actions/productActions';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

import './ProductList.scss';

class ProductList extends React.Component {
    handleProductRender = () => {
        console.log('product render');
        const { type, productActions } = this.props;
        console.log(type);
        if (type === 'recommendedInStore') {
            return this.props.recommendedInStore.map((item) => (
                <Product
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                />
            ))
        }
        if (type === 'trendingNow') {
            return this.props.trendingNow.map(item => (
                <Product
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    trendingNow
                />
            ))
        }
        return this.props.recommendedOnline.map(item => (
            <Product
                key={item.id}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
            />
        ))
    }
    render() {
        return (
            <div className="productList">
                <p className="headline-lg-base">{this.props.title}</p>
                <div className="productList__container">
                    { this.handleProductRender() }
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    recommendedInStore: PropTypes.array,
    recommendedOnline: PropTypes.array,
    trendingNow: PropTypes.array,
    productActions: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    recommendedInStore: state.recommendedInStore,
    recommendedOnline: state.recommendedOnline,
    trendingNow: state.trendingNow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
