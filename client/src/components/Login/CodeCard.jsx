import React from 'react';

function CodeCard() {
  return (
    <div className="mockup-code bg-white bg-opacity-20 border-2 border-indigo-400 w-28 h-40">
      <pre data-prefix="$" className="text-rose-100">
        <code>npm i projectcode</code>
      </pre>
      <pre data-prefix=">" className="text-yellow-600">
        <code>installing...</code>
      </pre>
      <pre data-prefix=">" className="text-green-600">
        <code>Done!</code>
      </pre>
    </div>
  );
}

export default CodeCard;
