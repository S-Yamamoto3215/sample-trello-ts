import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";


export const TaskCard: React.VFC = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}
