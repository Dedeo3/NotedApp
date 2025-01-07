import react from 'react';

// eslint-disable-next-line react/prop-types
export default function NotedButton({typeButton, action, callback,id}){

    const getClassName= ()=>{
        if (typeButton=== 'add'){
            return 'add_button'
        }
    }
    const defineAction = ()=>{
        if(action === 'add'){
            return 'Add Note'
        }
    }

    return(
        // onClick={handleClick}
        <button type="submit" className={getClassName()}  >
            {defineAction()}
        </button>
    )

}