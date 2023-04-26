import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import coinReducer, { fetchCoins } from '../redux/Coins/coins';
// import coins from '../redux/Coins/coins';

const mockStore = configureMockStore([thunk]);

describe('coinSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coinsArray: [],
      loading: false,
    });
  });

  it('should dispatch fetchCoins', async () => {
    await store.dispatch(fetchCoins());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('fetch-coins/pending');
    expect(actions[1].type).toEqual('fetch-coins/fulfilled');
  });

  it('should handle initial state', () => {
    expect(coinReducer(undefined, { type: 'unknown' })).toEqual({
      coinsArray: [],
      loading: false,
    });
  });

  it('should handle fetchCoins.pending', () => {
    const currentState = {
      coinsArray: [],
      loading: false,
    };
    expect(coinReducer(currentState, fetchCoins.pending)).toEqual({
      ...currentState,
      loading: true,
    });
  });

  it('should handle fetchCoins.fulfilled', () => {
    const coinsArray = [{ id: 'bitcoin', name: 'Bitcoin' }];
    const currentState = {
      coinsArray: [],
      loading: false,
    };
    expect(
      coinReducer(currentState, fetchCoins.fulfilled(coinsArray)),
    ).toEqual({
      ...currentState,
      coinsArray,
      loading: false,
    });
  });
});
