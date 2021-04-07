import React from 'react';

import CountProvider from '../../context/CountProvider';

const Basic = props => {
    const [header, main, section, footer] = props.children;
  
    return (
      <CountProvider>
        <header>{header}</header>
        <main>{main}</main>
        <section>{section}</section>
        <footer>{footer}</footer>
      </CountProvider>
    )
  }
  
  Basic.sections = ['header', 'main', 'section', 'footer'];
  
  export default Basic;