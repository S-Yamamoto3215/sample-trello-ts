import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { TaskType } from './Type'

import { Task } from "./Task";

type TaskAddInputProps = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

type reorderTaskListType = (taskList: TaskType[], sourceIndex: number, destinationIndex: number) => TaskType[]
const reorderTaskList: reorderTaskListType = (taskList, sourceIndex, destinationIndex) => {
  const targetTask = taskList.splice(sourceIndex, 1)
  taskList.splice(destinationIndex, 0, targetTask[0])
  return taskList
}

export const Tasks: React.VFC<TaskAddInputProps> = ({
  taskList,
  setTaskList
}) => {
  const handleDragEnd = (result: DropResult) => {
    const {source, destination} = result

    if (!destination) {
      return
    }

    setTaskList((prevTaskList) => reorderTaskList(prevTaskList, source.index, destination.index))
  }

  return (
    <div>
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        <Droppable droppableId={"droppable"}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => {
                return (
                  <Task
                    index={index}
                    key={task.id}
                    task={task}
                    setTaskList={setTaskList}
                  />
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
