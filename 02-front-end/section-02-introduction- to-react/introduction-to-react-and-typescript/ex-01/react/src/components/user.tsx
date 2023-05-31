const user = {
  name: 'Jonatas',
  lastName: 'Laguna',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
