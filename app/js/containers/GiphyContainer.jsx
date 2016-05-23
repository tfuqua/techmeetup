import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GiphyForm from '../components/giphy/GiphyForm.jsx';
import GiphyResult from '../components/giphy/GiphyResult.jsx';
import * as Actions from '../redux/actions/actions';

class GiphyContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateTerm = this.updateTerm.bind(this);
    this.submitTerm = this.submitTerm.bind(this);
    this.state = {
      searchTerm: this.props.searchTerm,
    };
  }

  submitTerm(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.props.dispatch(Actions.getGif(searchTerm));
  }

  updateTerm(event) {
    console.log(this);
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Giphy API</h3>
        <GiphyForm
          submitTerm={this.submitTerm}
          searchTerm={this.state.searchTerm}
          updateTerm={this.updateTerm}
        />
        <GiphyResult result={this.props.gif} />
      </div>
    );
  }
}

GiphyContainer.propTypes = {
  gif: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    gif: (store.gif),
    searchTerm: 'react',
  };
}

export default connect(mapStateToProps)(GiphyContainer);
