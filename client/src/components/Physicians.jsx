import React from 'react';

const Physicians = ({physicians, updateCurrentDoc}) => (
  <div>
    <h3>Physicians</h3>
    <ul>
      {physicians.map(doc => (
        <li key={doc.id} className="doctors" onClick={() => {updateCurrentDoc(doc.id)}}>{`${doc.last_name}, ${doc.first_name}`}</li>
      ))}
    </ul>
  </div>
);

export default Physicians;