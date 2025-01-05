import react from 'react';

export function notedButton({typeButton, action}){
    const getClassName= ()=>{
        switch (typeButton){
            case 'Delete':
                return 'delete_button'
            case 'Add':
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

    return(
        <button type="submit" className={getClassName()} >
            {defineAction()}
        </button>
    )

}