import React from 'react';


export default function Todo({ name, id, removeItem }) {
    return (
        <div className='space-x-4'>
            <p className='inline-block'>{name}</p>
            <button onClick={() => removeItem(id)} className='inline-block text-red-600'>remove</button>
        </div>
    );
}