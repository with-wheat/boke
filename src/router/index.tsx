import React, { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))

const Recommend = lazy(() => import('@/views/discover/c-cmp/recommend'))

const NotFund = lazy(() => import('@/components/NotFund'))

const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'} />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      }
    ]
  },
  {
    path: '*',
    element: <NotFund />
  }
]

export default route
