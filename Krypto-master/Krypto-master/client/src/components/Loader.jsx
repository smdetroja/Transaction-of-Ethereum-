import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center py-20'>
            <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-red-700' />
        </div>
    )
}

export default Loader