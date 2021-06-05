import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Foo from './Foo';
import Nav from './Nav';



function Index() {
    return (
        <div className="container">
          <Header />
          <Footer />
          <Foo />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
