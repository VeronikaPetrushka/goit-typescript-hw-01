type UserInfo = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends Partial<UserInfo>>(initialValues: T) {
  // Update the user
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123'
});
