import React from 'react';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import { Link } from 'react-router-dom';

import removeIcon from 'assets/icons/rubbish-bin.svg';
import penIcon from 'assets/icons/pen.svg';
import infoIcon from 'assets/icons/info.svg';
import PropTypes from 'prop-types';
import { Td, Tr, StyledButtonIcon } from 'styles/users';



const UserItem = ({ user, index, removeItem }) => {
  const { id, name, surname, email } = user;
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
        <Link to={`/users/${id}/edit`}>
          <StyledButtonIcon icon={penIcon} edit />
        </Link>
      </Td>
      <Td style={style}>
        <StyledButtonIcon onClick={() => removeItem(id)} icon={removeIcon} del />
      </Td>
    </Tr>
  );
};

UserItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(UserItem);
