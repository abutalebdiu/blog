import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import axios from 'axios';



class Header extends Component{

    constructor()
    {
        super();
        this.state = {
            categories:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api/get/category')
        .then(response=>{
            this.setState({categories:response.data});
        });
    }

    render(){
        return (
        <Router>
          <header>
            <div className="header-top">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="head-top-date">
                                <p><span className="tuesday">TUESDAY</span><span>JUNE 01, 2021</span></p>
                            </div>
                            <div className="head-top-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="logo">
                                <div className="image">
                                    <img src="images/logo/logo.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 d-none d-md-block">
                            <div className="e-paper d-flex align-items-end">
                                <span className="epaper-txt">
                                    <a href="#">
                                        e-paper <i className="fa fa-caret-right"></i>
                                    </a>
                                </span>
                                <span className="epaper-img">
                                    <a href="#">
                                        <img src="images/photo/epaper.jpeg" alt="" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menubar clearfix">
              <ul ClassName="d-none d-md-block">
                        <li>
                            <Link to="#">
                                <i className="fa fa-home"></i>
                            </Link>
                        </li>


                        {

                            this.state.categories.map(category=>{
                                return(


                                <li className="btn-sub">
                                    <Link to="#">  {category.name}
                                        <i className="fa fa-angle-down"></i>
                                    </Link>
                                    <div className="sub-menu">
                                        <Link to="#">National</Link>
                                        <Link to="#">City</Link>
                                        <Link to="#">Government</Link>
                                        <Link to="#">Parliament</Link>
                                        <Link to="#">Country</Link>
                                        <Link to="#">Election</Link>
                                        <Link to="#">Whether</Link>
                                        <Link to="#">Education</Link>
                                    </div>
                                </li>
                            )
                         })
                        }


                       
                        <li>
                            <Link to="#" id="more-btn">MORE <i className="fa fa-th-large"></i> </Link>
                        </li>
                         
                </ul>
            </div>

     
        </header>
      </Router>
  )
  };
}

export default Header;
