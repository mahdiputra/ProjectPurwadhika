import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Article extends Component {
    render() {
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
                                    <li><a href="/article">profile</a></li>
                                    <li><a href="/header">home</a></li>
                            </ul>
                

                            <button style={{marginright:"10px"}} class="btn btn-default navbar-btn navbar-right">
                               <Link to='/home'> log out</Link>
                            </button>
            
                        </div>
                    </div>
                </nav>
            </header>


        <div class="container">
                <div class="row">
                <div class="col-xs-12 col-sm-12 " style={{background:"url('img/pattern.png')" , height: "200px"}}>
                    <img src="img/mad.jpg" alt="profile.jpg" style={{paddingtop: "5px"}}></img>
                    <h1 style={{float: "right",padding: "0",margin: "0"}}>Mahdi Purna Putra</h1>
                </div>



                <div class="col-xs-12 col-sm-3 col-lg-3" style={{background: "firebrick", margintop: "20px",padding:"10px"}}>
                    <div class="panel panel-default" style={{}}>
                        <div class="panel-body">total viewed : 100 </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-body">daily viewed : </div>
                     </div>
                </div>


                <div class="col-xs-12 col-sm-9 col-lg-9" style={{background: "darkslateblue", height: "100px",padding: "10px"}}>
                    <textarea id="status" class="form-control" style={{height:"60px",width:"100%", paddingtop:"5px",placeholder:"write something.."}}></textarea>
                   
                   <ul style={{display: "inline",listStyleType: "none", float:"right",paddingtop: "3px"}}>
                        <li style={{display: "inline"}}><button id="post" >Post</button> </li>  
                   </ul>
                   
                </div>


                <div class="col-xs-12 col-sm-9 col-lg-9" style={{background: "rgb(198, 191, 248)",float: "right", marginTop: "20px"}}>
                    
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

                <div class="col-xs-12 col-sm-6">

                </div>
                <div class="col-xs-12 col-sm-6">

                </div>
                </div>
             </div>
    
            </div>
         );
    }
}
export default Article;