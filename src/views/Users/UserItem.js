import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editUser as editUserAction, removeItem as removeItemAction } from 'actions';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import removeIcon from 'assets/icons/rubbish-bin.svg';
import penIcon from 'assets/icons/pen.svg';
import infoIcon from 'assets/icons/info.svg';
import PropTypes from 'prop-types';

const Tr = styled.tr`
  height: 35px;
  background-color: ${({ theme }) => theme.cancel};
`;

const Td = styled.td`
  padding-right: 5px;
  padding-left: 5px;
  color: ${({ theme }) => theme.grey100};
`;
const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const UserItem = props => {
  const { id, name, surname, email, phone, address } = props.user;
  const { index, editUser, removeItem } = props;
  const style = { width: '15px' };
  return (
    <Tr>
      <Td>{index + 1}.</Td>
      <Td>{name}</Td>
      <Td>{surname}</Td>
      <Td>{email}</Td>
      <Td style={style}>
        <Link to={`/users/${id}`}>
          <StyledButtonIcon icon={infoIcon} info />
        </Link>
      </Td>
      <Td style={style}>
        <StyledButtonIcon
          onClick={() => editUser(id, name, surname, email, phone, address)}
          icon={penIcon}
          edit
        />
      </Td>
      <Td style={style}>
        <StyledButtonIcon onClick={() => removeItem(id)} icon={removeIcon} del />
      </Td>
    </Tr>
  );
};

UserItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
  editUser: () => dispatch(editUserAction()),
});

export default connect(null, mapDispatchToProps)(UserItem);
