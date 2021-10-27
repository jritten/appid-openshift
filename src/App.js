import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import AppID from 'ibmcloud-appid-js';
import './App.css';

function App() {

  const [name, setName] = useState();

  const appID = React.useMemo(() => {
    return new AppID()
  }, []);

  useEffect(() => {
    (async () => {
        try {
          await appID.init({
            clientId: 'b424b9bf-d17a-40ea-97dc-bf7030934b29',
            discoveryEndpoint: 'https://us-south.appid.cloud.ibm.com/oauth/v4/283fed62-0c77-41de-a2ef-92a140abb696/.well-known/openid-configuration'
          });
        } catch (e) {
          console.error(e);
        }
      })();
  });

  const handleLogin = async () => {
    try {
      const tokens = await appID.signin();
      console.log(tokens);
      setName(tokens.idTokenPayload.name);
      const userInfo = await appID.getUserInfo(tokens.accessToken);
      console.log('user info:', userInfo);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Super Cool OpenShift + App ID React App!
        </p>
        {name && <h3>Welcome Back, {name}!</h3>}
        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default App;
