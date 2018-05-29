import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Header from './komponen/Header'
import Home from './komponen/Home';
import Profile from './komponen/Profile';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';

class App extends Component {
  render() {
    return (
      <div>
          {/* <h1> coba routing </h1>

          <Icon>thumb_up</Icon>

          <Button size="large" variant="raised" color="secondary">
            Halo Dunia!
          </Button>

          <ul>
            <li><Link to='/'> Beranda </Link></li>
            <li><Link to='/header'> Header </Link></li>
            <li><Link to='/article'> Article </Link></li>
            <li><Link to='/footer'> Footer </Link></li>
          </ul>*/}

         
            {/* <Route exact path="/" component={Header}/>
            <Route path="/article" component={Article}/> */}
            {/* <Route path="/footer" component={Footer}/> */}

                    
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/article" component={Profile}/>
                <Route path="/header" component={Header}/>
            </div>


      
          
      
  </div>

    );
  }
}

export default App;
