import styled from 'styled-components';

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 10px;
  border: 2px solid #e8e8e8;
  border-radius: 3px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);
  h2 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    color: #bababa;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  .btnGroup {
    display: flex;
  }
`
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #4f9fcf;
  background: #ffffff;
  /* border-radius: 4px; */
  border: 2px solid #e8e8e8;
  transition: 0.4s;
  cursor: pointer;
  &:last-child {
    border-radius: 0 4px 4px 0;
    /* border-left: #e8e8e8; */
    /* &:hover {
      border-left: #4f9fcf;
    } */
  }
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:hover{
    border: 2px solid #4f9fcf;
    background: #ebfaff;
    /* &:last-child {
      border-left: #4f9fcf;
    } */
  }
  &.active {
    color: #ffffff;
    background: #007bff;
    border: 2px solid #007bff;
  }
`

export { FilterWrap, Btn };