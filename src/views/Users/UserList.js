import React from 'react';
import phoneNumberPropType from 'phone-number-prop-type';
import { connect } from 'react-redux';
import { toggleCreate as toggleCreateAction, toggleEdit as toggleEditAction } from 'actions';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import UserItem from './UserItem';
import UserEdit from './UserEdit';
import UserAdd from './UserAdd';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;

const UserList = ({ users, create, edit, toggleCreate, toggleEdit }) => (
  <>
    {!create || <UserAdd create={create} toggleCreate={toggleCreate} />}
    {!edit || (
      <UserEdit
        toggleEdit={toggleEdit}
        name={users.id}
        surname={users.surname}
        email={users.email}
        phone={users.phone}
        address={users.address}
      />
    )}
    <>
      <StyledHeading>users list</StyledHeading>

      {edit || <ButtonIcon icon={plusIcon} onClick={toggleCreate} add />}

      <UserTemplate edit={edit} users={users}>
        {users.map((user, index) => (
          <UserItem
            key={user.id}
            index={index}
            edit={edit}
            user={user}
          />
        ))}
      </UserTemplate>
    </>
  </>
);

UserList.propTypes = {
  create: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
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
};

const mapStateToProps = ({ users, create, edit }) => ({ users, create, edit });

const mapDispatchToProps = dispatch => ({
  toggleCreate: () => dispatch(toggleCreateAction()),
  toggleEdit: () => dispatch(toggleEditAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
