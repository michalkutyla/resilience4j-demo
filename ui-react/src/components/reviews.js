import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../actions';
import { ClipLoader } from 'react-spinners';

class Reviews extends Component {
  componentDidMount() {
    // lifecycle stage. name has to be exacty that
    this.props.fetchReviews();
  }

  render() {
    console.log('render reviews');
    const { reviews } = this.props.reviews;
    console.log(reviews);
    if (!_.isEmpty(reviews)) {
      if (reviews.error) {
        return (
          <div>
            <h3>Reviews:</h3>
            <div>Error occured while fetching reviews: {reviews.error}</div>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Reviews:</h3>
            <div>{reviews.reviews}</div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>Reviews:</h3>
          <ClipLoader loading={true} />
        </div>
      );
    }
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(
  mapStateToProps,
  { fetchReviews }
)(Reviews);
