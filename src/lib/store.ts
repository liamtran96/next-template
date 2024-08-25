import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import * as featureSlices from "./features"; // Import all slices from the index file

// Combine all slices using the `combineSlices` utility
const rootReducer = combineSlices(...Object.values(featureSlices));

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
// Infer the return type of `makeStore`
// Infer the `AppDispatch` type from the store itself
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
