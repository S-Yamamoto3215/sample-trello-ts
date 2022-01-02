import { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";

import { TaskType } from "./Type";

export const TaskCard: React.VFC = () => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState<TaskType[]>([])

  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
      />
      <Tasks
        taskList={taskList}
      />
    </div>
  )
}
