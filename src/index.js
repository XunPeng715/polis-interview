import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './components/Home';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Saved from './components/Saved';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MySource from './components/MySource';
const history = createHistory();

ReactDOM.render((
    <Router history={history}>
        <div>            
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/articles/:sourceId" component={Articles} />
            <Route exact path="/savedArticles" component={Saved} />
            <Route exact path="/mySources" component={MySource} />
            <Route path="/" component={Footer} />
        </div>
    </Router>    
), document.getElementById('root'));
registerServiceWorker();
