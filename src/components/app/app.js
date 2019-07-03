import React, { Component } from 'react';

import { Section, Wrap, Column } from './style';
import Filter from '../filter/filter';
import List from '../ticketList/ticketList';

export default class App extends Component {
  state = {
    filter: [-1]
  }
  
  onFilter = (id) => {
    let newFilter = [...this.state.filter];
    const index = newFilter.indexOf(id);
    index === -1 ? newFilter.push(id) : newFilter = [...newFilter.slice(0, index), ...newFilter.slice(index + 1)];
    this.setState(() => {
      return {
        filter: newFilter
      }
    })
  }

  onSwitchOne = (id) => {
    this.setState({
      filter: [id]
    })
  }

  render() {
    return (
      <Section>
        <Wrap>
          <Column width={ '30%' }>
            <Filter 
              onFilter={ this.onFilter }
              onSwitchOne={ this.onSwitchOne }
            />
          </Column>
          <Column width={ '70%' }>
            <List filter={ this.state.filter }/>
          </Column>
        </Wrap>
      </Section>
    );
  }
}
