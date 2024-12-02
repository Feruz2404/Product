import React from 'react'
import {toast} from 'react-toastify'

const Section = () => {
  return (
    <div>
      <h2>Section</h2>
      <button onClick={()=>toast("awesome")}>Show</button>
    </div>
  );
}

export default Section