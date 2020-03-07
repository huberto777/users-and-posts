import React from 'react';
import phoneNumberPropType from 'phone-number-prop-type';
import { connect } from 'react-redux';
import { toggleCreate as toggleCreateAction } from 'actions';
import PropTypes from 'prop-types';
import UserTemplate from 'templates/UserTemplate';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import { ContentWrapper, StyledHeading } from 'styles/users';
import UserItem from './UserItem';
import UserAdd from './UserAdd';

const UserList = ({ users, create, toggleCreate }) => (
  <ContentWrapper>
    {!create || <UserAdd create={create} toggleCreate={toggleCreate} />}
    <>
      <StyledHeading>users list</StyledHeading>
      <ButtonIcon icon={plusIcon} onClick={toggleCreate} add />
      <UserTemplate users={users}>
        {users.map((user, index) => (
          <UserItem key={user.id} index={index} user={user} />
        ))}
      </UserTemplate>
    </>
  </ContentWrapper>
);

UserList.propTypes = {
  create: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
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

const mapStateToProps = ({ users, create }) => ({ users, create });

const mapDispatchToProps = dispatch => ({
  toggleCreate: () => dispatch(toggleCreateAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
