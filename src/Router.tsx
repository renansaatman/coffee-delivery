import { Routes, Route } from 'react-router-dom'

import { Home } from './screens/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './screens/Cart'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}