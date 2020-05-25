import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './Layout';
import About from './Container/About';
import Dashboard from './Container/Dashboard';
import Contact from './Container/Contact';
import {SinglePage} from './Container/SinglePage'
function Router(){
    return (
          <Layout>
              <Route exact path="/" component={SinglePage} />
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact} />
               <Route path="/SinglePage" component={Dashboard} />
          </Layout>
    )
}
export default Router;