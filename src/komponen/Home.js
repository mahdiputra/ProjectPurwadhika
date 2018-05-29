import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                    <div id="header"  className="jumbotron">
        <div className="container">
            <h1>Sentry</h1>
            <p>Welcome to Sentry</p>
        </div>

        <div style={{float:'right', marginRight :"30px"}}>
            <ul style={{ listStyleType: "none" }}>
                <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="text" placeholder="email.." /></li>
                <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="text" placeholder="password.." /></li>
                <li style={{display:"inline"}}><button><Link to='/article'> log in </Link></button></li>
            </ul>
        </div>
    </div>


    
    <div className="container-fluid">
        <div className="row">
            <div  className="col-sm-6 col-md-6 col-lg-6 badan hidden-xs">
                <div>
                    <img src="img/id.svg" alt="imageasd"/>
                </div>
            </div>
            
            <div  className="col-sm-6 col-md-6 col-lg-3 badan" style={{float:'right'}} >
                <h1>Buat Akun Baru</h1><br /><br />
                <input  type="text" placeholder="Nama.."/><br /><br /><br />
                <input  type="text" placeholder="tanggal lahir.."/><br /><br /><br />
                <input  type="text" placeholder="Email address.."/><br /><br /><br />
                <input  type="text" placeholder="password.."/><br /><br /><br />
                <button>submit</button>
            </div>
        </div>
    </div>

    <footer className="section section-primary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
            </div>
      </footer>


         </div>
         );
    }
}
export default Footer;