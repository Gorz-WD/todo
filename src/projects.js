const Project = (name) => {

  let list = []

  const getName = () => name
  const setName = (x) => name = x

  const getList = () => list
  const addTodo = (todo) => list.push(todo)
  const deleteTodo = (todoIndex) => list.splice(todoIndex, 1)

  return { getName, setName, getList, addTodo, deleteTodo }

}

export { Project }