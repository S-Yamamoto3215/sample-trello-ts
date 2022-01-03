import { TaskType } from './Type'

import { Task } from "./Task";

type TaskAddInputProps = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const Tasks: React.VFC<TaskAddInputProps> = ({
  taskList,
  setTaskList
}) => {
  return (
    <div>
      {taskList.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            setTaskList={setTaskList}
          />
        )
      })}
    </div>
  )
}
