export default {
  render: jest.fn(),
  render: jest.fn().mockReturnValue('component is rendered'),
render: jest.fn().mockImplementation(() => 'mock implementation'),
};