import { FaTimes } from "react-icons/fa";

export const TaskCardDeleteButton: React.VFC = () => {
  return (
    <div>
      <button
        className='taskCardDeleteBtn'
      >
        <FaTimes />
      </button>
    </div>
  )
}
