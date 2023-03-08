import App from './main/App'
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const ReactApp = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<ReactApp />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
