import React from 'react';


function Searchbox({SearchChange}) {
  return (
    <div className='pa2'>
        <input 
        className='pa3 br3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder="search robots"
        onChange={SearchChange}
        />
    </div>
  );
}


export default Searchbox;