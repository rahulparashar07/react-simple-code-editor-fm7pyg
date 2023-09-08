import React, { useContext, useState, useEffect } from 'react';
import Child from './Child';
import Form from './form';
import store from './store';
import NoteContext from './Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
export default function App() {
  const [code, setCode] = useState('testCode');
  const [object, setObject] = useState({});
  console.log(store.getState());
  useEffect(() => {
    console.log(code);
  }, [code]);
  const changeCode = () => {
    console.log('iii');
  };
  return (
    <div>
      <Child changeCode={changeCode} />
      <br />
      <Form setObject={setObject}></Form>

      <button style={{ background: 'red' }} onClick={() => console.log(object)}>
        Submit
      </button>
      <button
        onClick={() => {
          setCode(code + 'changed');
        }}
      >
        test
      </button>
    </div>
  );
}
