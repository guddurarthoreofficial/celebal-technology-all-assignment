import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  todo: ["Task 1", "Task 2"],
  inProgress: ["Task 3"],
  done: ["Task 4"]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);
    const destTasks = Array.from(tasks[destination.droppableId]);
    destTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destTasks
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {Object.entries(tasks).map(([column, items]) => (
          <Droppable droppableId={column} key={column}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ margin: 8, padding: 8, border: '1px solid gray', minHeight: 300, width: 200 }}>
                <h3>{column.toUpperCase()}</h3>
                {items.map((item, index) => (
                  <Draggable draggableId={item} index={index} key={item}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ ...provided.draggableProps.style, padding: 8, marginBottom: 4, backgroundColor: 'lightgray' }}>
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;