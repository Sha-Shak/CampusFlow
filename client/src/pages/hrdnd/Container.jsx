import { Box } from './Box';
import { Dustbin } from './Dustbin';
export const Containers = function Container() {
  return (
    <div className="flex justify-center items-center mt-32">
      <div
        className="p-5 border-2 border-dashed border-red-400 mr-10 "
        style={{ overflow: 'hidden', clear: 'both' }}
      >
        <Box
          name="React"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Box
          name="Node"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Box
          name="Angular"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Box
          name="MongoDB"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Box
          name="Clean Code"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </div>
      <div className="flex-[0.3]" style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div
        className=" p-5 border-2 border-dashed border-blue-400"
        style={{ overflow: 'hidden', clear: 'both' }}
      >
        <Box
          name="React"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Box
          name="Node"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
        />
        <Box
          name="Angular"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png"
        />
        <Box
          name="MongoDB"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png"
        />
        <Box
          name="Clean Code"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </div>
    </div>
  );
};
