import React from 'react' // reusable and data dynamic components

const TodoButton = ({ buttonText }) => {
    console.log('Button text');

    return (
        <>
            <button className='bg-red-500 text-white font-semibold py-2 px-4 rounded'>{buttonText}</button>
        </>

    )
}

export default TodoButton
