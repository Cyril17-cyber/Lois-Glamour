import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./components/Nav";
import Mobilemenu from "./components/MobileLinks";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { works } from "./components/Arrays";
import Work from "./components/Work";
import './scss/styles.css';
import Projects from "./components/Projects";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  function clickBurger() {
    setMobileMenu((prevValue) => {
      return !prevValue
    })
  }
  return (
    <Router>
      <div className="App">
      <header className={!mobileMenu? "App-header" : "App-header burger"}>
        <Nav
         clickBurger={clickBurger}
         />
         {mobileMenu && <Mobilemenu clickBurger={clickBurger} />}

         <Switch>
           <Route path='/' exact>
             <Home />
           </Route>

           <Route path='/about' exact>
             <About />
           </Route>

           <Route path='/work' exact>
             <Work
              works={works}
              />
           </Route>

           {works.map((work, id) => {
             return (
              <Route key={id} path={work.link} exact>
              <Projects
               work={work}
               />
            </Route>
             )
           })}

           <Route path='/contact' exact>
             <Contacts />
           </Route>

         </Switch>

         <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
