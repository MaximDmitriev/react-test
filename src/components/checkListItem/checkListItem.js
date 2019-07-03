import React, { Component } from 'react';

import { ItemWrap, CheckBox, Btn } from './style';

export default class CheckItem extends Component {

  state = {
    showBtn: false
  }
  
  onShowBtn = () => {
    this.setState(({ showBtn }) => {
      return {
        showBtn: !showBtn
      }
    });
  }

  onTurnOne = (e) => {
    e.stopPropagation();
    this.props.onSwitchOne();
  }

  render () {
    const { showBtn } = this.state;
    const { onToggleActive, name, active } = this.props;

    return (
      <ItemWrap 
        onMouseEnter={ this.onShowBtn }
        onMouseLeave={ this.onShowBtn }
        onClick={ onToggleActive }
      >
        <CheckBox>
          { active ? <img src="./img/checked.svg" alt="checked"/> : null }
        </CheckBox>
        <div className="label">
          { name }
        </div>
        { showBtn ? <Btn onClick={ this.onTurnOne }>Только</Btn> : null }
      </ItemWrap>
    )
  }
}