import { useState } from "react";

type TaskCardTitleProps = {
  title: string;
}

export const TaskCardTitle: React.VFC<TaskCardTitleProps> = ({
  title
}) => {
  const [isClick, setIsClick] = useState(false)
  const [inputCardTitle, setInputCardTitle] = useState(title)

  const handleClick = () => {
    setIsClick(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsClick(false)
  };

  const handleBlur = () => {
    setIsClick(false)
  }

  return (
    <div onClick={handleClick} className='taskCardTitle'>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            type="text"
            value={inputCardTitle}
            autoFocus
            maxLength={10}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )
      }
    </div>
  )
}
