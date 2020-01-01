import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { routes } from 'routes';
import UserList from 'views/Users/UserList';
import UserEdit from 'views/Users/UserEdit';
import UserDetails from 'views/Users/UserDetails';
import PostList from 'views/Posts/PostList';
import Navigation from 'components/Navigation/Navigation';

const ErrorPage = () => <h1>Strona nie istnieje</h1>;
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Navigation />
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/users" />} />
            <Route exact path={routes.users} component={UserList} />
            <Route exact path={routes.posts} component={PostList} />
            <Route exact path={routes.user} component={UserDetails} />
            <Route exact path={routes.edit} component={UserEdit} />
            <Route component={ErrorPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
