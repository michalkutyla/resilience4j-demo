import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../actions';
import { ClipLoader } from 'react-spinners';

class Product extends Component {
  componentDidMount() {
    // lifecycle stage. name has to be exacty that
    this.props.fetchProductDetails();
  }

  render() {
    console.log('render');
    const { details } = this.props.details;
    console.log(details);
    if (!_.isEmpty(details)) {
      if (details.error) {
        return (
          <div>
            <h3>Product details:</h3>
            <h4>Error occured while fetching product details</h4>
            <div>Error message: {details.error}</div>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Product details:</h3>
            <div>{details.description}</div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>Product details:</h3>
          <ClipLoader loading={true} />
        </div>
      );
    }
  }
}

function mapStateToProps({ details }) {
  return { details };
}

export default connect(
  mapStateToProps,
  { fetchProductDetails }
)(Product);
