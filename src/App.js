import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  Home  from './Mypages/Home'
import  Blogs from './Mypages/Blogs';
import  About from './Mypages/About'
import  Contact  from './Mypages/Contact'
import  HomeNav from './Mypages/HomeNav';
import {Footer} from './Mypages/Footer';
import { Switch, Route, Redirect} from 'react-router-dom'
// The folllowing links are the blog pages link
import Adruino from './Mypages/BlogPages/Adruino';
import Python from './Mypages/BlogPages/Python';

const App = () => {
  return (
    <>
    <HomeNav/>
    <Switch>
          <Route exact path="/"            component={Home}    />
          <Route exact path="/blog"        component={Blogs}   />
          <Route exact path="/about"       component={About}   />       
          <Route exact path="/contact"     component={Contact} />
          {/* the below are the pages of the blog */}
          <Route exact path="/adruino"     component={Adruino} />
          <Route exact path="/python"     component={Python} />
          <Redirect to = "/"/>
    </Switch>
    <Footer/>
    </>
  )
}

export default App
