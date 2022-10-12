import { Provider } from 'jotai';
import Jotai from '../jotai/Jotai';

function JotaiRoute() {
  return (
    <Provider>
      <Jotai />
    </Provider>
  );
}

export default JotaiRoute;
