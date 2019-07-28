import React from 'react'
import styled from 'styled-components';
import { Card } from 'antd';

const ViewportHeightContainer = styled.div`
  position: relative;
  height: 100vh;
`

const CenteredCard = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
`


const CenteredBox = ({children}: any) => (
  <ViewportHeightContainer>
    <CenteredCard>
      {children}
    </CenteredCard>
  </ViewportHeightContainer>
);

export default CenteredBox
