import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(BASE_URL + this.state.searchTerm)
    .then(r => r.json())
    .then(data => this.setState({reviews: data.results}));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" placeholder="search reviews" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}

export default SearchableMovieReviewContainer;
