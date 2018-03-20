import React, { Component } from "react";

import classes from "./NaturalSky.scss";
import Header from '../../components/NaturalSky/NatHeader'
import CardCreator from "../CardCreator/CardCreator";
import NatComp from '../../components/NaturalSky/NatComp'

class NaturalSky extends Component {
  state = {
    filterSelect: "any"
  };

  filterSelectHander = event => {
    this.setState({filterSelect: event.target.value})
  };

  render() {
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.body}>
          <NatComp title={'Why use React?'} subtitle={'Separate your components, not your html & js'}
            hint={'*components may be State-ful or State-less'}/>
          <CardCreator filterType={this.state.filterSelect}/>        
          <NatComp title={'Easy Re-rendering'} subtitle={'Render the dom only when <u>virtual dom</u> differs'}/>
          <div className={classes.code}>
              components.filter( c=> c==='
              <select value={this.state.filterSelect} onChange={this.filterSelectHander}>
                <option defaultValue value="any">Any</option>
                <option value="star">Stars</option>
                <option value="galaxy">Galaxies</option>
                <option value="planet">Planets</option>
              </select>
              ' );
            </div>
          <NatComp title={'Cycle Hooks'} subtitle={'Optimize & Side Effect / Asynchronous activities'}
            hint={'componentShouldUpdate componentDidMount'} />
          <NatComp title={'Community Support'} subtitle={'+router +redux +thunk/saga +custom UI components'}/>
          <NatComp title={'Most importantly... Testing & Debugging'} subtitle={'+react-developer-tools +redux-devtools +jest +enzyme'}/>
        </div>
      </div>
    );
  }
}

export default NaturalSky;
