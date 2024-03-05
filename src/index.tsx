import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'

import './index.css'

const domNode = document.querySelector('#root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
