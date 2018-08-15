import { database } from './firebase'

// firebase db
const tasksRef = database.ref('tasks')

export const createNewTask = (task) => {
    const currentDate = new Date()
    const creationTime = currentDate.toString()

    const taskObject = {
        task,
        creationTime,
        isDone: false
    }

    return tasksRef.push(taskObject)
}

export const getTasks = () => {
    return new Promise(resolve => {
        return tasksRef.on('value', data => resolve(data.val()) )
    })
}
