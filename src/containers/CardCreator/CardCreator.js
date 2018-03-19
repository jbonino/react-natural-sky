import React, { Component } from 'react';

import classes from './CardCreator.scss';
import Card from '../../components/UI/Card/Card';

class CardCreator extends Component {
  state = {
    name: '',
    type: '',
    cards:[{
      name: 'Polaris',
      type: 'star'
    },{
      name: 'Andromeda',
      type: 'galaxy'
    }],
    filterType: 'any'
  }

  createHandler = () =>{
    console.log(this.state);
    const newCards = [...this.state.cards,{name: this.state.name, type: this.state.type}];
    this.setState({
      cards:newCards,
      name:'',
      type:'star'
    })
  }

  nameInputHandler = (event) =>{
    this.setState({name: event.target.value})
  }

  typeSelectHander = (event) =>{
    this.setState({type: event.target.value})
  }

  render() {
    let cards = [...this.state.cards];
    //if filter wanted.
    if(!(this.props.filterType==='any')){
      cards = cards.filter(c=>c.type===this.props.filterType);      
    }

    cards = cards.map((card,index)=>{
      return <div key={index}>
        <Card name={card.name} type={card.type} />
        </div>
    });
    return (
      <div className={classes.container}>
        <div className={classes.code}>{'<Card name={  '} 
          <input onChange={this.nameInputHandler} value={this.state.name} type="text"></input>
          {'  } type={  '}
          <select value={this.state.type} onChange={this.typeSelectHander}>
              <option defaultValue value="star">Star</option>
              <option value="galaxy">Galaxy</option>
              <option value="planet">Planet</option>
            </select>
          {'  } />'}          
        </div>
        <button onClick={()=>this.createHandler()}>Add Component</button>
        <div className={classes.Cards}>{cards}</div>
      </div>
    );
  }
}

export default CardCreator;