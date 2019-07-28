import React from 'react'
import styled from 'styled-components';
import { List, Tag, Avatar } from 'antd'

import { Petition } from 'models'
import PetitionTitle from './petition-title';

const IndentContent = styled.div`
  margin-left: 46px
`

interface PetitionItemProps {
  petition: Petition;
}

const PetitionListItem = ({ petition }: PetitionItemProps) => (
  <>
    <List.Item.Meta
      avatar={
        <Avatar src={'https://picsum.photos/id/' + petition.id + '/120'} />
      }
      title={
        <PetitionTitle title={petition.name} hasSigned={petition.hasSigned} />
      }
      description={petition.description}
    />
    <IndentContent>
      {
        petition.labels && petition.labels.length &&
          petition.labels.map((props, i) => <Tag key={i}>{props.text}</Tag>)
      }
    </IndentContent>
  </>
);

export default PetitionListItem
