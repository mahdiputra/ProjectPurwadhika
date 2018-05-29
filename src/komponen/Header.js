import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {Button} from 'primereact/components/button/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';



class Header extends Component {
    render() {
        var items = [
            {label:'Sunting', icon:'fa-refresh', command: ()=>{}},
            {label:'Hapus', icon:'fa-close', command: ()=>{}},
            {label:'Tautan', icon:'fa-link', command: ()=>{}},
            {label:'Desain', icon:'fa-paint-brush', command: ()=>{}},
            ];

        var ButPad = {
            padding:"10px",
            color: "purple"
        }
        return (
            <div>
             <header>
                <nav class="navbar navbar-inverse" style={{background:"purple"}}>
                    <div class="container" >
                       
                        <div class="navbar-header">
                            <a href="/" class="navbar-brand">
                                <img src="img/mad.jpg" alt="wadaw" width="25px"/>
                            </a>
                        
                          
                          <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menucollapse">
                                <span style={{color:"firebrick"}} class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
            
                        </div>
        
        
                        <div class="collapse navbar-collapse" id="menucollapse">
                            <ul class="nav navbar-nav">
                                    <li><a href="/article">Profile</a></li>
                                    <li><a href="/">home</a></li>
                            </ul>
                
                            <div>
                                <button style={{marginright:"10px"}} class="btn btn-default navbar-btn navbar-right">
                                <Link to='/home'>log out</Link>
                                </button>
                            </div>
            
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-12" style={{margin:"0px"}}>
                    <center>
                    <Button style={ButPad} label="Top viewed friends" className="ui-button-success"/>
                    <Button style={ButPad} label="Top viewed Local" className="ui-button-success"/>
                    <Button style={ButPad} label="Top viewed WorldWide" className="ui-button-success"/>
                
                    <SplitButton label="Simpan" icon="fa-check" model={items} className="ui-button-success"></SplitButton>
                    </center>
                    </div>

                </div>
            </div>
            <div className="container">
            <div class="col-xs-12 col-sm-12 col-lg-12" style={{background: "rgb(198, 191, 248)",float: "right", marginTop: "20px"}}>
                    
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h1 class="panel-title">Post 1</h1>
                        </div>

                        <div class="panel-collapse collapse" id="panel-1">
                            <div class="panel-body">
                            <p>ini isi</p>
                        </div>

                        </div>
                        <div class="panel-footer">
                            <button data-target="#panel-1" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                        </div>
                    </div>

                    <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h1 class="panel-title">Post 1</h1>
                            </div>
    
                            <div class="panel-collapse collapse" id="panel-2">
                                <div class="panel-body">
                                <p>ini isi</p>
                            </div>
    
                            </div>
                            <div class="panel-footer">
                                <button data-target="#panel-2" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                            </div>
                    </div>

                    <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h1 class="panel-title">Post 1</h1>
                            </div>
    
                            <div class="panel-collapse collapse" id="panel-3">
                                <div class="panel-body">
                                <p>ini isi</p>
                            </div>
    
                            </div>
                            <div class="panel-footer">
                                <button data-target="#panel-3" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                            </div>
                    </div> 

                </div>
            </div>
            </div>
         );
    }
}
export default Header;