import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const domNode = document.querySelector('#root');

const reactRootNode = ReactDOM.createRoot(domNode);

//~% React COMPONENT is a definition of a UI component which have its own scope and internal implementations
const Pujarini = () => {
  const [count, setCount] = useState(100);
  return <h1>Pujarini: {count}</h1>;
};

const obj = { a: <h1>Hello</h1>, b: <h1>World</h1> };
console.log(Object.entries(obj));

const RenderedElement = () => {
  if (obj.a) {
    return <obj.a />;
  } else {
    return <obj.b />;
  }
};

const reactElement = (
  <>
    <Pujarini id='react' key='react' children='Hello'>
      world
    </Pujarini>
    {/* <RenderedElement /> */}
  </>
);

React.createElement(
  Pujarini,
  {
    id: 'react',
    key: 'react',
    children: 'Hello',
  },
  'World'
  // <Pujarini />
);

{
  /* <pujarini /> === React.createElement(pujarini, null); */
}

console.log(reactElement, 'reactElement');

reactRootNode.render(reactElement);

//> type, props-  key, ref, children
