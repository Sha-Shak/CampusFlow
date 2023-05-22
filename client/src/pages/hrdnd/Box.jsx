import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemType';
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};
export const Box = function Box({ name, icon }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, icon },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div>
      <div
        className="p-3 bg-purple-400 w-32 m-2 text-white text-2xl rounded-md text-center shadow-sm transform perspective(500px) rotate-x-2 rotate-y-2"
        ref={drag}
        data-testid={`box`}
        style={{ opacity }}
      >
        {name}
      </div>
    </div>
  );
};
