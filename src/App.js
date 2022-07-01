import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
