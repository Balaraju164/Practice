import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, countChange } from './redux/reducers/countChange';
import App from './App';
import YourLoaction from './Zemoso_components/YourLocation';
import Jest, { BASE_URL, fetchUsers } from './Components/Jest_examples';
import axios from 'axios';

afterEach(cleanup);

test('getsnapshot', () => {
  const { asFragment } = render(<YourLoaction />);
  //const linkElement = getByText("Hello");
  expect(asFragment(<YourLoaction />)).toMatchSnapshot();
});

test('test content', () => {
  const { getByText } = render(<YourLoaction />);
  const linkElement = getByText(
    'More than 2000 people are using Green Commute'
  );
  expect(linkElement.textContent).toBe(
    'More than 2000 people are using Green Commute'
  );
});

const reducer = combineReducers({
  count: countChange,
});

const renderWithRedux = (
  component,
  { initialState, store = configureStore({ reducer }, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('test redux', () => {
  const { getByTestId, getByText } = renderWithRedux(<Jest />);
  fireEvent.click(getByText('Down'));
  expect(getByTestId('counter')).toHaveTextContent('-1');
});

test('test countchange reducer', () => {
  const count1 = { count: 1 };
  expect(countChange({ count: 0 }, { type: 'INCREMENT' })).toEqual(count1);
});

jest.mock('axios');

describe('fetchUsers', () => {
  describe('when API call is successful', () => {
    it('should return users list', async () => {
      const users = {
        data: [
          { id: 1, name: 'John' },
          { id: 2, name: 'Andrew' },
        ],
      };
      axios.get.mockResolvedValueOnce(users);
      const result = await fetchUsers();
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe('when API call fails', () => {
    it('should return empty users list', async () => {
      const message = 'Network Error';
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});

// test('firing events',()=>{
//   const {getByText,getByTestId} =render(<Jest/>)
//   fireEvent.click(getByText('Down'))
//   expect(getByTestId('counter')).toHaveTextContent('-1')
// })

// test('test settimeout',async()=>{
//   const {getByText,getByTestId} =render(<Jest/>)
//   //fireEvent.click(getByText('Increment'))
//   await waitFor(() => {
//     expect(getByText('1')).toBeInTheDocument();
//   })
//   //expect(counter).toHaveTextContent('1')
// })
