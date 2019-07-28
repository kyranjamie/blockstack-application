import React from 'react'
import styled from 'styled-components';
import { Tag } from 'antd'

const StyledHeader = styled.h4`
  display: inline;
  margin-right: 16px;
`

interface PetitionTitleProps {
  title: string;
  hasSigned: boolean;
}

const PetitionTitle = ({ title, hasSigned }: PetitionTitleProps) => (
  <div>
    <StyledHeader>{title}</StyledHeader>
    {hasSigned && <Tag color='green'>You've signed this petition</Tag>}
  </div>
);

export default PetitionTitle
