import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: #f5f5f5;
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
`
const Column = styled.div(props => ({
  width: props.width,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 10px'
}))

export { Section, Wrap, Column };