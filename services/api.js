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

export const getUndoneTasks = () => {
    return new Promise(resolve => {
        return tasksRef
            .orderByChild("isDone")
            .equalTo(false)
            .on('value', data => resolve(data.val()))
    })
}

export const updateTask = (id, updates) => {
    return database.ref().child(`/tasks/${id}`).update(updates)
}

export const deleteTask = (id) => {
    tasksRef.remove(id)
}
