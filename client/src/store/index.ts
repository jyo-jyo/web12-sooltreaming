import { combineReducers } from 'redux';
import user from '@store/user';
import notice from '@store/notice';
import device from '@store/device';

// rootReducer Type
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user,
  notice,
  device,
});

export default rootReducer;