import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import UserList from 'views/Users/UserList';
import UserDetails from 'views/Users/UserDetails';
import PostList from 'views/Posts/PostList';
import Navigation from 'components/Navigation/Navigation';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Navigation />
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/users" />} />
          <Route exact path={routes.users} component={UserList} />
          <Route exact path={routes.user} component={UserDetails} />
          <Route exact path={routes.posts} component={PostList} />
          {/* <Route exact path={routes.post} component={PostDetails} /> */}
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
