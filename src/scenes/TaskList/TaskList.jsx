import React from 'react';
import TaskCard from './TaskCard';
import * as styled from './styled'

const mockTasks = [
    {
        description: "Book hotel in amsterdam",
        isDone: false
    },
    {
        description: "Make my bed",
        isDone: false
    },
    {
        description: "Call mom and say hi!",
        isDone: false
    },
]

const TaskList = () => (
    <div>
        <styled.TopBarWrapper>
            <div>02/02/2018</div>
            <div>0/2 Tasks</div>
            <div>Add task + </div>
        </styled.TopBarWrapper>
        {
            mockTasks.map( task => <TaskCard key={task.description} description={task.description} /> )
        }
    </div>
)

export default TaskList
