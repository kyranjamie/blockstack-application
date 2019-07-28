import React, { useState } from 'react'
import { Result, Button } from 'antd';
import blockstack from 'blockstack';

import Logo from 'ui/logo';
import CenteredBox from 'ui/centered-card';

const BlockstackAuthCard = () => {
  const [isLoading, setLoading] = useState(false)

  function signIn (e: React.MouseEvent) {
    e.preventDefault()
    setLoading(true)
    new blockstack.UserSession().redirectToSignIn()
  }

  return (
    <CenteredBox>
      <Result
        status="info"
        icon={<Logo />}
        title="Sign Petitions with Blockstack"
        subTitle="Just sign in with your Blockstack ID to sign petitions of causes you believe in"
        extra={[
          <Button type="primary" key="console" onClick={signIn}>
            {
              !isLoading
                ? 'Sign in with your Blockstack ID'
                : 'Redirecting you to Blockstack…'
            }
          </Button>
        ]}
      />
    </CenteredBox>
  );
}

export default BlockstackAuthCard;
