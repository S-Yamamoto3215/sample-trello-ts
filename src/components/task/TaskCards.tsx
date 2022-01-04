import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useState } from "react";

import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

import { CardType } from "./Type";

type reorderCardListType = (cardList: CardType[], sourceIndex: number, destinationIndex: number) => CardType[]
const reorderCardList: reorderCardListType = (cardList, sourceIndex, destinationIndex) => {
  const targetCard = cardList.splice(sourceIndex, 1)
  cardList.splice(destinationIndex, 0, targetCard[0])
  return cardList
}

export const TaskCards: React.VFC = () => {
  const [taskCardList, setTaskCardList] = useState<CardType[]>([])

  const handleDragEnd = (result: DropResult) => {
    const {source, destination} = result

    if (!destination) {
      return
    }

    setTaskCardList((prevCardList) => reorderCardList(prevCardList, source.index, destination.index))
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <Droppable droppableId={"droppableCard"} direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardList && (
              taskCardList.map((taskCard, index) => {
                return (
                  <TaskCard
                    index={index}
                    key={taskCard.id}
                    id={taskCard.id}
                    title={taskCard.title}
                    draggableId={taskCard.draggableId}
                    tasks={taskCard.tasks ? taskCard.tasks : []}
                    setTaskCardList={setTaskCardList}
                  />
                )
              })
            )}
            {provided.placeholder}
            <AddTaskCardButton
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
