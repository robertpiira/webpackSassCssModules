import React from 'react';
import style from './style.scss';


export default class Foo extends React.Component {
    render() {
        return (
            <header className={ style.header }>
              <h1>Header</h1>
            </header>
        );
    }
}
