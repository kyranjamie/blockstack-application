import React from 'react'
import { Result } from 'antd';

import CenteredBox from 'ui/centered-card';

const BlockstackAuthCardSuccess = () => {
  return (
    <CenteredBox>
      <Result
        status="success"
        title="Blockstack identity verified"
        subTitle="Taking you to the petitions page now..."
      />
    </CenteredBox>
  );
}

export default BlockstackAuthCardSuccess;
