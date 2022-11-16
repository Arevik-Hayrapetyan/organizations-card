import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import CompanyPage from './components/Company/CompanyPage'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="company/:companyId" element={<CompanyPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
)
