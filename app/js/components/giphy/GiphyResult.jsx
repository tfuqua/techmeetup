import React, { PropTypes } from 'react';

function GiphyResult(props) {
  let test = 'test';

  if (props.result !== undefined) {
    test = props.result.gif;
  }

  return (
    <div className="text-center">
      <img className="img-responsive" src={test} alt="giphy" />
    </div>
  );
}

GiphyResult.propTypes = {
  result: PropTypes.object.isRequired,
};

export default GiphyResult;
