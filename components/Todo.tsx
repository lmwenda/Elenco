import React from 'react'

interface T{
    id?: string,
    task_name: string,
    task_complete: boolean
}

const Todo: React.FC<T> = ({ task_name, task_complete }) => {
  return (
    <div className={`bg-red-500 text-bold text-white p-5 w-96 rounded-lg`}>
        {task_name}
    </div>
  )
}

export default Todo;