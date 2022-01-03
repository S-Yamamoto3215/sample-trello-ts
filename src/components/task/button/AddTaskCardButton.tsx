import { v4 as uuidv4 } from 'uuid';

import { CardType } from "../Type";

type AddTaskCardButtonProps = {
  setTaskCardList: React.Dispatch<React.SetStateAction<CardType[]>>
}

export const AddTaskCardButton: React.VFC<AddTaskCardButtonProps> = ({
  setTaskCardList
}) => {

  const addTaskCard = () => {
    const cardId = uuidv4();

    const newCard: CardType = {
      id: cardId,
      title: "Sample",
      draggableId: `card-${cardId}`,
      tasks: [],
    }

    setTaskCardList((prevTaskCardList) => [...prevTaskCardList, newCard])
  }

  return (
    <div className='addTaskCardBtnArea'>
      <button
        className='addTaskCardBtn'
        onClick={addTaskCard}
      >+
      </button>
    </div>
  )
}
