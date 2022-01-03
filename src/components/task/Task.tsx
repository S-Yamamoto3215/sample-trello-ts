import { FaTrashAlt } from "react-icons/fa";

import { TaskType } from './Type'

type TaskProps = {
  task: TaskType
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const Task: React.VFC<TaskProps> = ({
  task,
  setTaskList
}) => {
  const removeTask = (taskId: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((prevTask) => prevTask.id !== taskId))
  }

  return (
    <div className='taskBox'>
      <p className='taskText'>{task.title}</p>
      <button
        className='taskRemoveBtn'
        onClick={() => removeTask(task.id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  )
}
