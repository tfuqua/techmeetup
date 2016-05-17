import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { connect } from 'react-redux';
const styles = process.env.BROWSER ? require('../../styles/site.scss') : '';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.styles = styles; //  get around ESLint for now #FacePalm
  }

  render() {
    return (
      <div className="site">
        <Header />
        <div className="site-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default connect()(App);
