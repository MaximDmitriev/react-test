import React from 'react';

import { TicketWrap, InfoBlock } from './style';
const Ticket = ({ data }) => {
  return (
    <TicketWrap>
      <div className="action">
        <div className="name-wrap">
          <div className="name">{ data.carrier }</div>
          <img className="name-img" src="./img/logo.png" alt="logo"/>
        </div>
        <button className="btn">Купить<br /> за { data.price }р</button>
      </div>
      <div className="info">
        <InfoBlock>
          <div className="time">{ data.departure_time }</div>
          <div className="city">{ data.origin }, { data.origin_name }</div>
          <div className="date">{ data.departure_date }</div>
        </InfoBlock>
        <InfoBlock>
          <div className="transfer">{ data.label }</div>
        </InfoBlock>
        <InfoBlock>
          <div className="time">{ data.arrival_time }</div>
          <div className="city">{ data.destination }, { data.destination_name }</div>
          <div className="date">{ data.arrival_date }</div>
        </InfoBlock>
      </div>
    </TicketWrap>
  )
}

export default Ticket;