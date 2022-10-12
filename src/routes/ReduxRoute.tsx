import { Provider } from 'react-redux';
import Redux from '../redux/Redux';
import originalStore from '../redux/originalStore';

function ReduxRoute() {
  return (
    <Provider store={originalStore}>
      <Redux />
    </Provider>
  );
}

export default ReduxRoute;
