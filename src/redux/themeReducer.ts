import type { AnyAction } from 'redux';

export const CHANGE_THEME = 'theme/changeTheme';

const initialState: Theme = 'Light';

export default function themeReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CHANGE_THEME: {
      return state === 'Light' ? 'Dark' : 'Light';
    }

    default:
      return state;
  }
}
