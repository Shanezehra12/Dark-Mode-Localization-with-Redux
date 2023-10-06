import {configureStore} from '@reduxjs/toolkit';

import ThemeReducer from './ThemeSlice';
import LanguageReducer from './LanguageSlice';

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    language: LanguageReducer,
  },
});

export default store;
