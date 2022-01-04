import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";

import { CardType, TaskType } from "./Type";

type TaskCardProps = {
  index: number;
  id: string;
  title: string;
  draggableId: string;
  tasks: TaskType[];
  setTaskCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const TaskCard: React.VFC<TaskCardProps> = ({
  index,
  id,
  title,
  draggableId,
  tasks,
  setTaskCardList
}) => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState<TaskType[]>(tasks)

  return (
    <Draggable index={index} draggableId={draggableId}>
      {(provided) => (
        <div
          className='taskCard'
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className='taskCardHeader'
            {...provided.dragHandleProps}
          >
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
      )}
    </Draggable>
  )
}
