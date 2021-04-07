import React from 'react';

const Standard = props => {
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
  
  Standard.sections = ['header', 'main', 'section', 'footer'];
  
  export default Standard;