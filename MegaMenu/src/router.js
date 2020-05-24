import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './Layout';
import About from './Container/About';
import Dashboard from './Container/Dashboard';
import Contact from './Container/Contact';
function Router(){
    return (
          <Layout>
              <Route exact path="/" component={Dashboard} />
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact} />
          </Layout>
    )
}
export default Router;