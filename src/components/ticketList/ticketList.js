import React, { Component } from 'react';

import Ticket from '../ticketItem/ticketItem';
import getData from '../../services/getData'

export default class List extends Component {
  data = new getData();
  
  state = {
    tickets: []
  }

  componentDidMount() {
    this.data.getTickets()
      .then((res) => {
        const sorted = res.sort((a, b) => {
          return a['price'] - b['price'];
        });

        this.setState(() => {
          return {
            tickets: sorted
          }
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.tickets.map(item => {
            if (this.props.filter.indexOf(item.stops) !== -1 || this.props.filter.includes(-1)) {
              return (
                <Ticket 
                  data={ item }
                  key={ item.price + item.stops }
                />
              )
            }
          })
        }
      </div>
    )
  }
}
