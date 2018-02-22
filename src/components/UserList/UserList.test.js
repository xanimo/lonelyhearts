// import renderer from 'react-test-renderer';
// import React from 'react';
// import UserList from './UserList';

// jest.mock('./UserList.js');

// const userList = {

// }

// test('renders correctly', () => {
// 	const tree = renderer.create(
// 		<UserList />
// 		).toJSON();
// 		expect(tree).toMatchSnapshot();
// });
function bloop() {
  return null;
}

test('bloop returns null', () => {
  expect(bloop()).toBeNull();
});