import { useGetTodosQuery } from './rtkQueryTasks'

export const Task = () => {
  const { data, error, isLoading } = useGetTodosQuery()
  console.log('rtkquery')
  console.log(data)
  return <></>
}
