import cx from 'classnames';
import { uid } from 'uid';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Todo from '../../components/Todo';

const Index = () => {
    const [todoItem, setTodoItem] = useState('');
    const [items, setItems] = useState([]);

    const saveTasks = () => {
        localStorage.setItem('todos', JSON.stringify(items));
    }

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoItem) {
        setItems([
            {
            id: uid(),
            task_name: todoItem,
            task_complete: false,
            },
            ...items,
        ]);

        setTodoItem('');
        }
    };

    const handleDone = (id) => {
        const _items = items.map((item) => {
        if (item.id === id) {
            return {
            ...item,
            task_complete: !item.task_complete,
            };
        }

        return item;
        });

        setItems(_items);
    };

    useEffect(() => {
        const _items = localStorage.getItem('todos');
        if(_items) {
            setItems(JSON.parse(_items));
        }
    }, [])

    return (
        <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: 'easeIn' }}>
        <div
        className='container flex flex-col justify-center items-center px-6 mx-auto mt-1 space-y-12 md:space-y-5 md:mt-20'
        >   
            <div className='flex flex-col space-y-10'>
                <h1 className='text-5xl text-bold text-center'>Todo List</h1>
                <form className='mt-10 flex flex-row space-x-1'>

                    <input className='border border-gray-500 rounded-full' onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setTodoItem(e.target.value)
                    } type='text' placeholder='Task:' />

                    <button className='p-3 w-20 rounded-full text-white bg-red-500' onClick={handleAdd}>Add</button>
                
                </form>
            </div>

            <div className='pt-10 flex flex-col space-y-10'>
                {
                    items.filter((todoItem) => !todoItem.task_complete).map((todoItem) => {
                        return(
                            <button 
                            key={todoItem.id}
                            onClick={() => handleDone(todoItem.id)}
                            className={cx('item', { done: todoItem.task_complete })}>
                                <Todo key={todoItem.id} task_name={todoItem.task_name} task_complete={todoItem.task_complete} />
                            </button>
                        )
                    })
                }

                {           
                    items.filter((todo) => todo.task_complete).map((todo) => {
                        return(
                            <button 
                            key={todo.id}
                            onClick={() => handleDone(todo.id)}
                            className={cx('item', { done: todo.task_complete })}>
                                <Todo key={todo.id} task_name={todo.task_name} task_complete={todo.task_complete} />
                            </button>
                        )
                    })
                }
            </div>

            <div className='mx-auto'>
                <button onClick={saveTasks} className='border border-red-500 text-red-500 px-6 p-3 hover:opacity-75'>Save Tasks</button>
            </div>
        </div>
    </motion.section>
    )
}

export default Index;