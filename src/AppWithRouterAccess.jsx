import React from 'react';
import { Route, useHistory, } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import ExchangeRates from './Pages/ExchangeRate'
import Home from './Pages/Home'
import Login from './Pages/Login'

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
      history.push('/login');
  };  
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  
  const baseDomain = process.env.REACT_APP_OKTA_URL_BASE;
  const issuer = baseDomain + '/oauth2/default'
  const clientId = process.env.REACT_APP_OKTA_CLIENTID;
  const redirect = process.env.REACT_APP_OKTA_APP_BASE_URL + '/callback';

  const loggedIn = true;
  
  const config = {
    issuer: issuer,
    clientId: clientId,
    redirectUri: redirect
  };
  
  const oktaAuth = new OktaAuth(config);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Route path='/' exact={true} component={Home} />
        <SecureRoute path='/ExchangeRates' component={ExchangeRates} />
        <Route path='/login' render={() => <Login baseUrl={baseDomain} issuer={issuer} />} />
        <Route path='/callback' component={LoginCallback} />
    </Security>
  );
};

export default AppWithRouterAccess;