import { useState } from "react";
import './index.css';

import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

const App = () => {
  type itemType = {
    id: number;
    text: string;
  }
  const [items, setItems] = useState<itemType[]>([
    {id: 0, text: 'item0'},
    {id: 1, text: 'item1'},
    {id: 2, text: 'item2'},
  ])

  type ondragendType = (result: DropResult) => void;
  const ondragend: ondragendType = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return
    }

    const _items = [...items]
    const removeItem = _items.splice(source.index, 1);
    _items.splice(destination?.index, 0, removeItem[0])
    setItems(_items)
  };

  return (
    <div className='dragDropArea'>
      <DragDropContext onDragEnd={ondragend}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.text} index={index}>
                    {(provided) => (
                      <div
                        className='item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
