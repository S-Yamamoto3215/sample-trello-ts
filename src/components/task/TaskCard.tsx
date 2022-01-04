import { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";

import { TaskType } from "./Type";

type TaskCardProps = {
  id: string;
  title: string;
  draggableId: string;
  tasks: TaskType[],
}

export const TaskCard: React.VFC<TaskCardProps> = ({
  id,
  title,
  draggableId,
  tasks,
}) => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState<TaskType[]>(tasks)

  return (
    <div className='taskCard'>
      <div className='taskCardHeader'>
        <TaskCardTitle title={title} />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
      />
      <Tasks
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}
