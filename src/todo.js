const Todo = (title, desc, date, prio, details) => {
  
  let status = false
  
  const getTitle = () => title
  const getDesc = () => desc
  const getDate = () => date
  const getPrio = () => prio
  const getDetails = () => details
  const getStatus = () => status

  const setTitle = (x) => title = x
  const setDesc = (x) => desc = x
  const setDate = (x) => date = x
  const setPrio = (x) => prio = x
  const setDetails = (x) => details = x
  const setStatus = (x) => status = x

  return { getTitle, getDesc, getDate, getPrio, getDetails, getStatus, setTitle, setDesc, setDate, setPrio, setDetails, setStatus }
}

export {Todo}