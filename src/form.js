import React, {useState} from 'react';
export default function Form(props) {
  const [name, setName] = useState('');
  return (
    <form>
      <input
        required={true}
        type="email"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          props.setObject(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={(e) => e.preventDefault}></button>
    </form>
  );
}
