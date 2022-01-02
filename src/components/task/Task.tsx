import { FaTrashAlt } from "react-icons/fa";

import { TaskType } from './Type'

type TaskProps = {
  task: TaskType
}

export const Task: React.VFC<TaskProps> = ({
  task
}) => {
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.title}</p>
      <button className='taskRemoveBtn'>
        <FaTrashAlt />
      </button>
    </div>
  )
}
