import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/Store';
import Details from '../pages/Details';

describe('Tests for the details page', () => {
  it('Should render the detail page properly', () => {
    const pageView = render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(pageView).toMatchSnapshot();
  });
});
