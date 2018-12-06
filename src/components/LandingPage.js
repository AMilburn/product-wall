import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/productActions";
import PropTypes from "prop-types";
import React from "react";
import ProductList from "./ProductList";
import SignIn from "./SignIn";
import { categories } from "../constants";

import "./LandingPage.scss";

class LandingPage extends React.Component {
  render() {
    const { productActions, ui, user } = this.props;
    return (
      <div>
        {ui.page === "initial" && (
          <div className="landingPage">
            <ProductList
              title={categories[2].name}
              key={categories[2].name}
              type={categories[2].category}
            />
            <div className="landingPage__signIn">
              <button
                className="ncss-btn-primary-dark"
                onClick={() => productActions.updateView("signIn")}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
        {ui.page === "signIn" && <SignIn />}
        {ui.page === "results" && (
          <React.Fragment>
            <p className="headline-md-brand">
              Hello {user.ExternalImageId}. How are you doing today?
            </p>
            <ProductList
              title={categories[0].name}
              key={categories[0].name}
              type={categories[0].category}
            />
            <ProductList
              title={categories[1].name}
              key={categories[1].name}
              type={categories[1].category}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

LandingPage.propTypes = {
  ui: PropTypes.object,
  user: PropTypes.object,
  productActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
    user: state.userData
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
)(LandingPage);
