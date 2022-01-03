import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt } from "react-icons/fa";

import { TaskType } from './Type'

type TaskProps = {
  index: number;
  task: TaskType
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const Task: React.VFC<TaskProps> = ({
  index,
  task,
  setTaskList
}) => {
  const removeTask = (taskId: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((prevTask) => prevTask.id !== taskId))
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className='taskBox'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.title}</p>
          <button
            className='taskRemoveBtn'
            onClick={() => removeTask(task.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      )}
    </Draggable>
  )
}
