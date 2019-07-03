import styled from 'styled-components';

const TicketWrap = styled.div`
  display: flex;
  max-width: 80%;
  background: #ffffff;
  margin: 0 0 10px 0;
  padding: 10px 0;
  border: 2px solid #e8e8e8;
  border-radius: 3px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.12);
  }
  .action {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    border-right: 2px dashed #e8e8e8;
  }
  .name-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    width: 80px;
    font-weight: 800;
    line-height: 15px;
    color: #2a00d4;
    text-transform: uppercase;
    text-align: center;
  }
  .name-img {
    flex-shrink: 0;
    width: 21px;
    height: 21px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 50px;
    margin: 10px 0 0 0;
    border-radius: 5px;
    color: #ffffff;
    background: rgba(252, 121, 28, 1);
    line-height: 18px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background: rgba(252, 121, 28, 0.9);
    }
  }
  .info {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 10px;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 0 7px;
  :first-child {
    align-items: flex-start;
    flex-grow: 0;
    margin: 0;
  }
  :last-child {
    align-items: flex-end;
    flex-grow: 0;
    margin: 0;
  }
  .time {
    font-size: 40px;
    font-weight: 300;
    line-height: 42px;
  }
  .city {
    margin: 10px 0 0 0;
    font-size: 16px;
    font-weight: 600;
  }
  .date {
    font-size: 14px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.3);
  }
  .transfer {
    position: relative;
    width: 100%;
    font-size: 12px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.3);
    padding: 0 0 5px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    text-transform: uppercase;
    &::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      bottom: -8px;
      right: -7px;
      background-image: url('./img/plane.svg');
      background-repeat: no-repeat;
      background-size: contain;
      transform: rotateZ(45deg);
    }
  }
`

export { TicketWrap, InfoBlock };