import styled from 'styled-components';

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  transition: 0.6s;
  cursor: pointer;
  &:hover {
    background: #ebfaff;
  }
  .label {
    flex-grow: 1;
    text-align: left;
    color: #bababa;
  }
`
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin: 0 7px;
  border: 2px solid #4f9fcf;
  border-radius: 3px;
  background: #ffffff;
`
const Btn = styled.div`
  margin: 0 7px;
  color: #4f9fcf;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
`
export { ItemWrap, CheckBox, Btn };