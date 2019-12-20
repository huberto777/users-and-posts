import React, { Component } from 'react';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import UserItem from './UserItem';
import UserEdit from './UserEdit';
import UserAdd from './UserAdd';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: `_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
          name: 'John',
          surname: 'Doe',
          email: 'john.doe@example.com',
          phone: +48785524236,
          address: 'ul. Nowa 27, Kraków',
        },
        {
          id: `_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
          name: 'Mark',
          surname: 'Carpenter',
          email: 'mark@op.pl',
          phone: +4878552933236,
          address: 'os. Złotego Wieku 55/55 31-622 Kraków',
        },
      ],
      create: false,
      edit: false,
      id: 3,
    };
    this.editUser = this.editUser.bind(this);
  }
  addUser = (name, surname, email, phone, address) => {
    const { create } = this.state;
    let user = {
      id: `_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      name,
      surname,
      email,
      phone,
      address,
    };

    this.setState(prevState => ({
      users: [...prevState.users, user],
      create: !create,
    }));
  };
  delUser = id => {
    let users = [...this.state.users];
    users = users.filter(user => user.id !== id);
    this.setState({
      users,
    });
  };
  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };
  toggleCreate = e => {
    const { create } = this.state;
    this.setState({
      create: !create,
    });
  };
  editUser() {
    const { edit } = this.state;
    this.setState({
      id: arguments[0],
      name: arguments[1],
      surname: arguments[2],
      email: arguments[3],
      phone: arguments[4],
      address: arguments[5],
      edit: !edit,
    });
  }
  updateUser = e => {
    e.preventDefault();
    const { id, users, edit } = this.state;
    const updateName = e.target.updateName.value;
    const updateSurname = e.target.updateSurname.value;
    const updateEmail = e.target.updateEmail.value;
    const updatePhone = e.target.updatePhone.value;
    const updateAddress = e.target.updateAddress.value;
    if (updateName.length < 3 || updateSurname.length < 3 || !updateEmail.includes('@'))
      return alert('something went wrong');
    this.setState({
      users: users.map(user => {
        if (user.id === id) {
          user.name = updateName;
          user.surname = updateSurname;
          user.email = updateEmail;
          user.phone = updatePhone;
          user.address = updateAddress;
        }
        return user;
      }),
      edit: !edit,
    });
  };

  render() {
    const { users, edit, name, surname, email, phone, address, create } = this.state;
    return (
      <>
        {!create || (
          <UserAdd toggleCreate={this.toggleCreate} addUser={this.addUser} create={create} />
        )}
        {edit ? (
          <UserEdit
            toggleEdit={this.toggleEdit}
            name={name}
            surname={surname}
            email={email}
            phone={phone}
            address={address}
            updateUser={this.updateUser}
          />
        ) : (
          <>
            <StyledHeading>users list</StyledHeading>

            <ButtonIcon icon={plusIcon} onClick={this.toggleCreate} add />

            <UserTemplate edit={edit} users={users}>
              {users.map((user, index) => (
                <UserItem
                  key={user.id}
                  index={index}
                  delUser={this.delUser}
                  edit={edit}
                  user={user}
                  editUser={this.editUser}
                />
              ))}
            </UserTemplate>
          </>
        )}
      </>
    );
  }
}

export default UserList;
