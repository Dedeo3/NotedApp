import react from 'react';

// eslint-disable-next-line react/prop-types
export default function NotedButton({typeButton, action, callback,id}){

    const getClassName= ()=>{
        switch (typeButton){
            case 'delete':
                return 'delete_button'
            case 'add':
                return 'add_button'
            case 'archive':
                return 'archive_button'
            case 'move':
                return 'move_button'
            default:
                return ''
        }
    }
    const defineAction = ()=>{
        switch (action){
            case 'delete':
                return 'Delete'
            case 'add':
                return 'Add'
            case 'archive':
                return 'Archive'
            case 'move':
                return 'Move'
            default:
                return ''

        }
    }
    // const handleClick = () => {
        
    //     if (callback) {
    //         callback(action); 
    //         console.log("callback", callback)
    //     }
    // };

    return(
        // onClick={handleClick}
        <button type="submit" className={getClassName()}  >
            {defineAction()}
        </button>
    )

}