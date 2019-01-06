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
          <div className="details">
            <h3>Product details:</h3>
            <div className="error">
              Error occured while fetching product details: {details.error}
            </div>
          </div>
        );
      } else {
        return (
          <div className="details">
            <h3>Product details:</h3>
            <div>
              <b>Name:</b> {details.details.name}
            </div>
            <div>
              <b>Description:</b> {details.details.description}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="details">
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
