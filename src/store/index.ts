import { configureStore } from '@reduxjs/toolkit'
import discoverSlice from './modules/discover/index'
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from 'react-redux'

const store = configureStore({
  reducer: {
    discover: discoverSlice
  },
  devTools: true
})

type getStateFnTypes = typeof store.getState // 获取state类型推导
type IRootState = ReturnType<getStateFnTypes> // 返回类型对象

type DispatchType = typeof store.dispatch // 获取dispatch类型推导

export const useAppSelect: TypedUseSelectorHook<IRootState> = useSelector // 给useSelector类型
export const useAppDispatch: () => DispatchType = useDispatch // 给useDispatch类型
export const appShallowEqual = shallowEqual // 统一管理shallowEqual

export default store
