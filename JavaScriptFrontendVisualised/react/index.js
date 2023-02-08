import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const domNode = document.querySelector('#root');

const reactRootNode = ReactDOM.createRoot(domNode);

//~! REACT FUNCTION COMPONENT IS NOT FUNCTION RETURNING JSX..

const Heading = () => {
  const [count, setCount] = useState(0);
  return <h1>Hello! - {count}</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);
  //~*
  // return Heading();
  return (
    <>
      {/* <div>{show && <Heading />}</div> */}
      <div>
        //~# trying - conditional rendering
        {show &&
          //>IIFE
          (() => {
            const [count, setCount] = useState(0);
            return <h1>Hello! - {count}</h1>;
          })()}
      </div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
};

reactRootNode.render(<App />);
reactRootNode.unmount();

//~> HOOKS CANT BE CONDITIONALLY rendered
