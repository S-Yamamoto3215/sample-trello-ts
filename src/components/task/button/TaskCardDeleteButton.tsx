import { FaTimes } from "react-icons/fa";

import { CardType } from "../Type";

type TaskCardDeleteButtonProps = {
  id: string;
  setTaskCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const TaskCardDeleteButton: React.VFC<TaskCardDeleteButtonProps> = ({
  id,
  setTaskCardList,
}) => {

  const taskCardDelete = (cardId: string) => {
    setTaskCardList((prevCardList) => prevCardList.filter((prevCard) => prevCard.id !== cardId))
  }

  return (
    <div>
      <button
        className='taskCardDeleteBtn'
        onClick={() => taskCardDelete(id)}
      >
        <FaTimes />
      </button>
    </div>
  )
}
