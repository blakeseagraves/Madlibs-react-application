import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="background-skew">
          <div className="madlib-heading">
            <h1>Madlibs</h1>
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/> to see the Mad Lib story.
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
