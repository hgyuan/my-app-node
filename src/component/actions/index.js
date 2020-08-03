export const increaseTodo = num => {
    return {
        type: 'INCREASE_TODO',
        num:num,
    }
}

export const decreaseTodo = num => {
    return {
        type: 'DECREASE_TODO',
        num:num,
    }
}

export const resetTodo = num => {
    return {
        type: 'RESET',
    }
}