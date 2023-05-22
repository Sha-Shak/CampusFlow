import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from './ItemType';
import './style.scss';

const style = {
  animation: 'spin 5s linear infinite',
};

const keyframes = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

export const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const [droppedBox, setDroppedBox] = useState([]);

  const handleDrop = (item) => {
    setDroppedBox((prevDroppedBox) => [...prevDroppedBox, item]);
  };

  console.log(droppedBox);
  const isActive = canDrop && isOver;
  let backgroundColor = 'purple';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <>
      <style>{keyframes}</style>
      <div className="wrapper">
        <div
          ref={drop}
          // style={style}
          className="innerdiv flex justify-center items-center   text-3xl bg-purple-50 border-4 border-dashed border-purple-400 w-96 h-96 rounded-full"
        >
          <div
            className=""
            ref={drop}
            // style={{ ...style, backgroundColor }}
            data-testid="selection"
          >
            {droppedBox.length > 0 ? (
              droppedBox.map((item) => (
                <div className=" p-2 py-1 m-2 rounded-full" key={item.name}>
                  <img className="w-16" src={item.icon} />
                </div>
              ))
            ) : (
              <>{isActive ? 'Release to drop' : 'Drag a skill here'}</>
            )}
          </div>
        </div>
      </div>
      <div class="wrapper">
        <p>
          <span></span>
        </p>
      </div>
    </>
  );
};
