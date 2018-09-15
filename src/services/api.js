import { database } from './firebase'

// firebase db
const tasksCollection = database.collection("tasks")

export const createNewTask = (description, uid) => {
    const currentDate = new Date()
    const creationTime = currentDate.toString()

    const taskObject = {
        uid,
        description,
        creationTime,
        isDone: false
    }

    return tasksCollection.add(taskObject)
}

export const getUndoneTasksByUser = (uid) => {
    return tasksCollection
        .where('uid', '==', uid)
        .where('isDone', '==', false)
        .get()
        .then(querySnapshot => {
            const undoneTasks = [];

            querySnapshot.forEach(doc =>
                undoneTasks.push({
                    taskId: doc.id,
                    ...doc.data()
                })
            )

            return undoneTasks
        })
}

export const getTasks = () => {
    return tasksCollection.get().then(querySnapshot => {
        const allTasks = []

        querySnapshot.forEach(doc => allTasks.push({
            taskId: doc.id,
            ...doc.data()
        }));

        return allTasks
    });
}

export const getUndoneTasks = () => {
    return tasksCollection
        .where('isDone', '==', false)
        .get()
        .then(querySnapshot => {
            const undoneTasks = []

            querySnapshot.forEach(doc => undoneTasks.push({
                taskId: doc.id,
                ...doc.data()
            }))

            return undoneTasks
        })
}

export const updateTask = (id, updates) => {
    return tasksCollection.doc(id).update(updates)
}
