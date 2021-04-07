import React from 'react';

const Basic = props => {
    const [header, main, section, footer] = props.children;
  
    return (
      <>
        <header>{header}</header>
        <main>{main}</main>
        <section>{section}</section>
        <footer>{footer}</footer>
      </>
    )
  }
  
  Basic.sections = ['header', 'main', 'section', 'footer'];
  
  export default Basic;