import React, { useState, useRef, useEffect } from 'react';
import List from './List';
import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.list';


export default function ListPage() {
    const [list, setList] = useState([]);

    const itemName = useRef();

    // Haal to-do's uit local storage
    useEffect(() => {
        console.log('getting stuff');
        const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(storage);
        if (storage) setList(storage);
    }, [])
    /* Geef een lege array mee aan useEffect, zodat useEffect niet vaker gebruikt wordt.
    **/

    // Sla to-do's op naar local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    }, [list])

    function addItem(ev) {
        ev.preventDefault();
        const name = itemName.current.value;
        if (name === '') return
        setList(oldList => {
            return [...oldList, { id: uuid(), name: name }];
        })
        itemName.current.value = null;
    }

    function removeItem(idToRemove) {
        console.log('remove!');
        setList(oldList => {
            console.log('remove' + idToRemove);
            return oldList.filter(item => item.id !== idToRemove);
        });
    }

    return (
        <div className='text-center'>
            <h1 className='text-xl font-semibold'>Your list</h1>
            <h2>{list.length} found</h2>
            <form className='my-5' action="">
                <input ref={itemName} type="text" className='border border-indigo-500 rounded focus:border-indigo-400 focus:outline-none focus:ring-2' />
                <button onClick={addItem} className='px-2 mx-2 text-white bg-indigo-500 rounded hover:bg-indigo-700'>Add</button>
            </form>
            <List list={list} removeItem={removeItem} />
        </div>
    );
}