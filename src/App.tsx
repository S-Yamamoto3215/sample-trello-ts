import './index.css';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
  return (
    <div className='dragDropArea'>
      <DragDropContext onDragEnd={() => console.log(1)}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId='item0' index={0}>
                {(provided) => (
                  <div
                    className='item'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
