import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

export const TaskCards: React.VFC = () => {
  return (
    <div className='taskCardsArea'>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}
