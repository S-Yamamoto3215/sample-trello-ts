import { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";

import { CardType, TaskType } from "./Type";

type TaskCardProps = {
  id: string;
  title: string;
  draggableId: string;
  tasks: TaskType[];
  setTaskCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const TaskCard: React.VFC<TaskCardProps> = ({
  id,
  title,
  draggableId,
  tasks,
  setTaskCardList
}) => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState<TaskType[]>(tasks)

  return (
    <div className='taskCard'>
      <div className='taskCardHeader'>
        <TaskCardTitle title={title} />
        <TaskCardDeleteButton
          id={id}
          setTaskCardList={setTaskCardList}
        />
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
