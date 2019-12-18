import React, { useState, useEffect } from 'react';

export function NameTableHooks () {
    const name = useFormInput('enter name');
    const surname = useFormInput('entersurname');
    const width  = useWindowWidth();
    useDocumentTitle(`${name.value} ${surname.value}`);

    return (
        <div className="inputForm" style={{textAlign:'center', backgroundColor: 'grey', borderRadius: '4px'}}>
          Enter Name (using Hooks)
          <div>
            <input {...name}/>
          </div>
          <div>
            <input {...surname}/>
          </div>
          <div>
            <input 
              value={width}
            />
          </div>
        </div>
    );
}

// can return an obj with state and/or inner functions 
function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    // notice these values are the values needed in the <input /> tag, and that
    // you can simple spread the obj returned in the html {...obj} to use them :O
    return {
      value,
      onChange: handleChange
    }
}

function useDocumentTitle(title){
  // runs after initial render and every update
  useEffect(() => {
      document.title = title;
  });
}

// custom hook extracts state from another function to make 
// it a local state that can be accessed by any other class/function 
function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // cleanup phase after effect - react figures out when to execute
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return width;
}