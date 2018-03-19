import React, { Component } from "react";

import classes from "./NaturalSky.scss";
import Header from "../../components/NatHeader/NatHeader";
import CardCreator from "../CardCreator/CardCreator";

class NaturalSky extends Component {
  state = {
    filterSelect: "any"
  };

  filterSelectHander = event => {
    this.setState({filterSelect: event.target.value})
  };

  render() {
    return (
      <div>
        <Header />
        <div className={classes.Body}>
          <h4>Why use React?</h4>
          <p>Seperate your components, not your html & js</p>
          <small>*import components for reusability</small>
          <br />
          <small>*components may be State-ful or State-less</small>
          <CardCreator filterType={this.state.filterSelect}/>
          <h4>Easy Re-rendering</h4>
          <code>
            components.filter( c=> c==='
            <select value={this.state.filterSelect} onChange={this.filterSelectHander}>
              <option defaultValue value="any">Any</option>
              <option value="star">Stars</option>
              <option value="galaxy">Galaxies</option>
              <option value="planet">Planets</option>
            </select>
            ' );
          </code>
          <h4>Life Cycle Hooks</h4>
          <p>Optimize & Side Effect / Asynchronous activities</p>
          <small>componentShouldUpdate componentDidMount</small>
          <h4>Community Support</h4>
          <p>+router +redux +thunk/saga +custom UI components</p>
          <h4>Most importantly... Testing & Debugging</h4>
          <p>+react-developer-tools +redux-devtools +jest +enzyme</p>
        </div>
      </div>
    );
  }
}

export default NaturalSky;
