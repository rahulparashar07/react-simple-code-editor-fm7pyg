import React, { useState } from 'react';

const State = {
  notes: 'hiii',
};
const NoteContext = React.createContext(State);

const contextProvider = function (props) {
  const [ctxObject, setCtx] = useState('hii');
  const setNotes = (h) => {
    setCtx(h);
  };
  return (
    <NoteContext.Provider value={{ notes: ctxObject, setNotes: setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default { NoteContext: NoteContext, contextProvider: contextProvider };
