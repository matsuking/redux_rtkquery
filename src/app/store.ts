import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import taskReducer from '../slices/todoSlice'
import { todoApi } from '../hooks/rtkQueryTasks'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
