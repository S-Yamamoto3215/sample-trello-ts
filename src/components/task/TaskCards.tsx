import { useState } from "react";

import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

import { CardType } from "./Type";

export const TaskCards: React.VFC = () => {
  const [taskCardList, setTaskCardList] = useState<CardType[]>([])

  return (
    <div className='taskCardsArea'>
      {taskCardList && (
        taskCardList.map((taskCard, index) => {
          return (
            <TaskCard
              key={taskCard.id}
              id={taskCard.id}
              title={taskCard.title}
              draggableId={taskCard.draggableId}
              tasks={taskCard.tasks ? taskCard.tasks : []}
            />
          )
        })
      )}
      <AddTaskCardButton
        setTaskCardList={setTaskCardList}
      />
    </div>
  )
}
