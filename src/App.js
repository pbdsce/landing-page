import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutCoc from './layouts/LayoutCoc';

// Views 
import Home from './views/Home';
import Coc from './views/Coc';
import Events from './components/Events/Events';
import Members from "./components/Members/Members";
import Achievements from './components/Achievements/Achievements'
import Form from './components/Form/Form';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/CodeofConduct" component={Coc} layout={LayoutCoc} />
          <AppRoute exact path="/events" component={Events} layout={LayoutDefault} />
          <AppRoute exact path="/achievements" component={Achievements} layout={LayoutDefault} />
          <AppRoute exact path="/members" component={Members} layout={LayoutDefault}/>
          <AppRoute exact path="/form" component={Form} layout={LayoutDefault}/>
          
        </Switch>
      )} />
  );
}

export default App;