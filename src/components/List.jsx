import React from 'react';
import Todo from './Todo';

export default function List({ list, removeItem }) {
    return (
        list.map(item => {
            return <Todo key={item.id} name={item.name} id={item.id} removeItem={removeItem}/>
        })
    );
}