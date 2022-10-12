import { Provider } from 'react-redux';
import RTK from '../rtk/RTK';
import { store } from '../rtk/store';

function RTKRoute() {
  return (
    <Provider store={store}>
      <RTK />
    </Provider>
  );
}

export default RTKRoute;
