import React from 'react';

const Physicians = ({physicians, updateCurrentDoc, current}) => (
  <div id="Physicians">
    <h1 id="logo">notable</h1>
    <h3>Physicians</h3>
    <ul id="list-doctors">
      {physicians.map(doc => (
        <li key={doc.id} className={doc.id === current.id ? "currentDoc" : 'doctors'} onClick={() => {updateCurrentDoc(doc.id)}}>{`${doc.last_name}, ${doc.first_name}`}</li>
      ))}
    </ul>
  </div>
);

export default Physicians;