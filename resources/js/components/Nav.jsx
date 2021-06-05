import React from 'react';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from "./Home";
import About from "./About";

function Nav(){
    return (
        <Router>
         <div>
         <div className="menubar clearfix">
              <ul ClassName="d-none d-md-block">
                        <li>
                            <Link to="#">
                                <i ClassName="fa fa-home"></i>
                            </Link>
                        </li>
                        <li ClassName="btn-sub">
                            <Link to="#">BANGLADESH
                                <i ClassName="fa fa-angle-down"></i>
                            </Link>
                            <div ClassName="sub-menu">
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
                        <li className="btn-sub">
                            <Link to="#">INTERNATIONAL
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <div className="sub-menu">
                                <Link to="#">Asia</Link>
                                <Link to="#">Middle-East</Link>
                                <Link to="#">America</Link>
                                <Link to="#">Europe</Link>
                                <Link to="#">Australia</Link>
                                <Link to="#">Africa</Link>
                                <Link to="#">UK</Link>
                                <Link to="#">India</Link>
                            </div>
                        </li>
                        <li className="btn-sub">
                            <Link to="#">BUSINESS
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <div className="sub-menu">
                                <Link to="#">Bank</Link>
                                <Link to="#">Stock Market</Link>
                                <Link to="#">Industry</Link>
                                <Link to="#">Trade</Link>
                                <Link to="#">Commodities</Link>
                                <Link to="#">Corporate</Link>
                                <Link to="#">Telco</Link>
                                <Link to="#">Press Release</Link>
                            </div>
                        </li>
                        <li className="btn-sub">
                            <Link to="#">OPINION
                            </Link>
                            <div className="sub-menu">

                            </div>
                        </li>
                        <li className="btn-sub">
                            <Link to="#">ENTERTAINMENT
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <div className="sub-menu">

                                <Link to="#">Film</Link>
                                <Link to="#">TV</Link>
                                <Link to="#">Music</Link>
                                <Link to="#">Theatre</Link>
                                <Link to="#">Celebs</Link>
                            </div>
                        </li>
                        <li className="btn-sub">
                            <Link to="#">SPORTS
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <div className="sub-menu">

                                <Link to="#">Cricket</Link>
                                <Link to="#">Football</Link>
                                <Link to="#">Athletics</Link>
                                <Link to="#">Tennis</Link>
                            </div>
                        </li>
                        <li className="btn-sub">
                            <Link to="#">TODAY’S NEWSPAPER <i className="fa fa-angle-down"></i></Link>
                            <div className="sub-menu">
                                <Link to="#">Front &amp; Back</Link>
                                <Link to="#">Business News</Link>
                                <Link to="#">Opinion</Link>
                                <Link to="#">City News</Link>
                                <Link to="#">Country News</Link>
                                <Link to="#">International News</Link>
                                <Link to="#">Entertainment News</Link>
                                <Link to="#">Life And Style News</Link>
                                <Link to="#">Sports News</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="#" id="more-btn">MORE <i className="fa fa-th-large"></i> </Link>
                        </li>


                    </ul>
         </div>




            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
         </div>



       
        </Router>
    );
}

export default Nav;


