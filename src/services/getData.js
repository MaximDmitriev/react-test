export default class getData {

  getTickets = async () => {
    const data = await fetch('./tickets.json');
    const t = await data.json();
    return t.tickets.map(item => this._transformTicket(item));
  }

  _transformTicket = (ticket) => {
    let label = '';
    switch(ticket.stops) {
      case 0:
        label = 'Без пересадок';
        break;
      case 1:
        label = '1 пересадка';
        break;
      case 2:
        label = '2 пересадки';
        break;
      case 3:
        label = '3 пересадки';
        break;
      default:
        label = ticket.stops;
    }
    return {
      ...ticket,
      label
    }
  }
}