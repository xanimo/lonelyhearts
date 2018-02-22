import renderer from 'react-test-renderer';
import React from 'react';
import UserItem from './UserItem';

test('UserItemTest renders correctly', () => {
  const tree = renderer.create(
              <UserItem
          key="A key"
          title="A title"
          firstName="firstname"
          lastName="lastname"
          email="test@example.com"
          age={23}
          phone="415-555-5555"
          cell="415-514-4155"
          large="<img src='pic.jpg' alt='Profile' />"
          nat="US"/> 
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
// import UserItem from './UserItem';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
// Enzyme.configure({ adapter: new Adapter() });
// import { shallow } from 'enzyme';

// describe("UserItem", () => {
//   let props;
//   let mountedUserItem;
//   const UserItem = () => {
//     if (!mountedUserItem) {
//       mountedUserItem = shallow(
//           <UserItem {...props} />
//         );
//     }
//     return mountedUserItem;
//   }

//   beforeEach(() => {
//     props = {
//         firstName: undefined,
//         lastName: undefined,
//         title: undefined,
//         email: undefined,
//         age: undefined,
//         phone: undefined,
//         cell: undefined,
//         largePicture: undefined,
//     };
//     mountedUserItem = undefined;
//   });
  // All tests below


// });
