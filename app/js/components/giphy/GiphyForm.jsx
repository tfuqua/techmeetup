import React, { Component, PropTypes } from 'react';

class GiphyForm extends Component {

  render() {
    return (
      <div className="row">
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
          <form action="gif" onSubmit={this.props.submitTerm}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search all the GIFs"
                value={this.props.searchTerm}
                onChange={this.props.updateTerm}
                type="text"
                name="term"
              />
            </div>
            <div className="col-sm-4 text-center form-group col-sm-offset-4">
              <button type="submit" value="submit" className="btn btn-block btn-success">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

GiphyForm.propTypes = {
  updateTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  submitTerm: PropTypes.func.isRequired,
};

export default GiphyForm;
