import React, {useContext} from 'react'
import noteContext from './Context'
export default function Child(props) {
  const note = useContext(noteContext.NoteContext) 
  // React.component.componentWillMount('hii i am mounting')
  console.log(note, 'i')
  return (
    <button onClick={()=>note.setNotes('Rahul')}/>
  )
}