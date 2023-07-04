import { Routes, Route } from 'react-router-dom'

import { Home } from './screens/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './screens/Cart'
import { Success } from './screens/Success'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}