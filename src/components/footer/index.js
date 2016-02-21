import React from 'react';
import style from './style.scss';


export default class Foo extends React.Component {
    render() {
        return (
            <footer className={ style.footer }>
              <h1>Footer</h1>
            </footer>
        );
    }
}
