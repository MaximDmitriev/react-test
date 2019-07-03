import React, { Component } from 'react';

import { FilterWrap, Btn } from './style';
import CheckList from '../checkList/checkList'

export default class Filter extends Component {
  state = {
    btns: [
      {name: 'Rub', className: 'active'},
      {name: 'USD', className: ''},
      {name: 'Euro', className: ''}
      ]
  }

  onChangeActive = (name) => {
    const btns = this.state.btns.map(btn => {
      btn.name === name ? btn.className = 'active' : btn.className = '';
      return btn;
    })
    this.setState({ btns });
  }

  render() {
    const btns = this.state.btns;
    return (
      <FilterWrap>
        <h2>Валюта</h2>
        <div className="btnGroup">
          {btns.map(btn => {
            return (
              <Btn 
                className={ btn.className }
                key={ btn.name }
                onClick={ () => this.onChangeActive(btn.name) }
              >{ btn.name }</Btn>
            )
          })}
        </div>
        <h2>Количество пересадок</h2>
        <CheckList
          onFilter={ (id) => this.props.onFilter(id) }
          onSwitchOne={ (id) => this.props.onSwitchOne(id) }
        />
      </FilterWrap>
      )
  }
}
