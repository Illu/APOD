import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Card: StatelessComponent = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper> 
)

export default Card;