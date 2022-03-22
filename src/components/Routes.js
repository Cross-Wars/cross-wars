import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import JoinOrCreateRoom from './JoinOrCreateRoom';
import MyPage from './test';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={JoinOrCreateRoom} />
        <Route exact path="/game" component={MyPage} />
      </Switch>
    </div>
  );
}
