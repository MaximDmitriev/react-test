import React, { Component } from 'react';

import { CheckListWrap } from './style';
import CheckListItem from '../checkListItem/checkListItem';

export default class CheckList extends Component {

  state = {
    labels: [
      {name: 'Все', active: true, change: -1},
      {name: 'Без пересадок', active: false, change: 0},
      {name: '1 пересадка', active: false, change: 1},
      {name: '2 пересадки', active: false, change: 2},
      {name: '3 пересадки', active: false, change: 3},
    ]
  }

  onToggleActive = (id) => {
    this.props.onFilter(id);
    this.setState(({ labels }) => {
      const newLabels = labels.map(label => {
        if (label.change === id) {
          return {
            ...label,
            active: !label.active
          }
        } else {
          return {
            ...label
          }
        }
      });
      return {
        labels: newLabels
      }
    });
  }
  onSwitchOne = (id) => {
    this.props.onSwitchOne(id);
    this.setState(({ labels }) => {
      const newLabels = labels.map(label => {
        if (label.change === id) {
          return {
            ...label,
            active: true
          }
        } else {
          return {
            ...label,
            active: false
          }
        }
      });
      return {
        labels: newLabels
      }
    });
  }

  render () {

    return (
      <CheckListWrap>
        { this.state.labels.map(item => {
          return (
            <CheckListItem 
              name={ item.name }
              active={ item.active }
              key={ item.change }
              onToggleActive={ () => this.onToggleActive(item.change) }
              onSwitchOne={ () => this.onSwitchOne(item.change) }
              />
          );
        })}
      </CheckListWrap>
    )
  }
}
