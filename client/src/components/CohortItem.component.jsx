function getRandomGradient() {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(to bottom, hsl(${hue}, 50%, 90%), hsl(${
    hue + 40
  }, 50%, 80%))`;
}

function CohortItem({ name, url }) {
  const date = new Date(name.slice(8));

  const monthYearText = date.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          style={{
            background: getRandomGradient(),
            height: '150px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            opacity: '0.9',
          }}
        >
          <p className="text-[50px] font-black leading-10	 text-black uppercase m-1">
            {monthYearText}
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-md btn-outline rounded-lg w-full">
              View Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CohortItem;
