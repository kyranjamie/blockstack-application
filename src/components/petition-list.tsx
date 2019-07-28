import React from 'react'
import { List, Card, Button } from 'antd';

import { Petition } from 'models'
import PetitionListItem from './petition-list-item'

interface PetitionsListProps {
  petitions: Petition[];
  pendingSignings: number[];
  onPetitionSign(id: number): void;
  onPetitionUnsign(id: number): void;
}

const PetitionList = ({ petitions, pendingSignings, onPetitionSign, onPetitionUnsign }: PetitionsListProps) => {

  function isPetitionSigning (id: number) {
    return pendingSignings.includes(id)
  }

  return (
    <Card title="Petitions" style={{ margin: '20px auto', maxWidth: '800px' }}>
      <List
        itemLayout="vertical"
        dataSource={petitions}
        loading={petitions.length === 0}
        renderItem={(item, index) => (
          <List.Item
            style={{ padding: '32px 0 32px' }}
            extra={
              <div style={{ position: 'relative', width: '150px', top: 'calc(50% - 20px)', textAlign: 'right'  }}>
                { item.hasSigned
                  ? <Button
                      size='large'
                      onClick={() => onPetitionUnsign(item.id)}
                      loading={isPetitionSigning(item.id)}
                    >
                      Unsign
                    </Button>
                  : <Button
                      type='primary'
                      size='large'
                      onClick={() => onPetitionSign(item.id)}
                      loading={isPetitionSigning(item.id)}
                    >
                      Sign
                    </Button>
                }
              </div>
            }
          >
            <PetitionListItem petition={item} />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default PetitionList
