import { TaskType } from './Type'

import { Task } from "./Task";

type TaskAddInputProps = {
  taskList: TaskType[];
}

export const Tasks: React.VFC<TaskAddInputProps> = ({
  taskList
}) => {
  return (
    <div>
      {taskList.map((task, index) => {
        return (
          <Task key={index} task={task}/>
        )
      })}
    </div>
  )
}
