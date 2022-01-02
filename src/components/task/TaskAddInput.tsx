import { TaskType } from './Type';

type TaskAddInputProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const TaskAddInput: React.VFC<TaskAddInputProps> = ({
  inputText,
  setInputText,
  setTaskList
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: TaskType = {
      title: inputText,
    }

    setTaskList((prevList) => [...prevList, newTask])
    setInputText("")
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add a Task'
          className='taskAddInput'
          onChange={handleOnChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
