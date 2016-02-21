
import React from 'react';
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.js';
import style from './styles/style.scss';



class App extends React.Component {
    render() {
        return (
        	<div>
            <Header />
            <Footer />
          </div>
        );
    }
}


React.render(<App />, document.getElementById('root') );
