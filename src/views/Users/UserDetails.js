/* eslint-disable eqeqeq */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import phoneNumberPropType from 'phone-number-prop-type';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCreate as toggleCreateAction } from 'actions';
import styled from 'styled-components';
import PostAdd from 'views/Posts/PostAdd';
import PostItem from 'views/Posts/PostItem';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { StyledButton, Item, ItemValue } from 'styles/users';

const StyledWrapper = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
`;

const UserDetails = ({ activeItem, posts, create, toggleCreate, match }) => {
  const [user] = activeItem;
  // console.log(activeItem);
  if (!user) {
    return <Redirect to={routes.home} />;
  }
  return (
    <StyledWrapper>
      <div>
        {create || (
          <Link to="/">
            <StyledButton cancel>CANCEL</StyledButton>
          </Link>
        )}
        <div>
          <Item>name: </Item>
          <ItemValue>{user.name || 'no data'}</ItemValue>
          <Item>surname: </Item>
          <ItemValue>{user.surname || 'no data'}</ItemValue>
          <Item>email: </Item>
          <ItemValue>{user.email || 'no data'}</ItemValue>
          <Item>phone: </Item>
          <ItemValue>{user.phone || 'no data'}</ItemValue>
          <Item>address: </Item>
          <ItemValue>{user.address || 'no data'}</ItemValue>
        </div>
      </div>
      {!create || <PostAdd match={match} />}
      {create || (
        <StyledButton onClick={toggleCreate} add>
          add post
        </StyledButton>
      )}
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} index={index} />
      ))}
    </StyledWrapper>
  );
};

UserDetails.propTypes = {
  activeItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: phoneNumberPropType.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ),
  toggleCreate: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.users.filter(item => item.id == ownProps.match.params.id),
  posts: state.posts.filter(post => post.userId == ownProps.match.params.id),
  create: state.create,
});

const mapDispatchToProps = dispatch => ({
  toggleCreate: () => dispatch(toggleCreateAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
