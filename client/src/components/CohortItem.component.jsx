import { FaGithub } from 'react-icons/fa';
function getRandomGradient() {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(to bottom, hsl(${hue}, 50%, 90%), hsl(${
    hue + 40
  }, 50%, 80%))`;
}

function CohortItem({ name, html_url }) {
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
          <p className="text-right text-[50px] font-black leading-10	 text-gray-800 uppercase m-1">
            {monthYearText}
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title uppercase">{name}</h2>

          <div className="flex card-actions items-center">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-md btn-outline rounded-lg bg-black font-semibold text-white mr-2 flex-1">
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </a>
            <button className="btn btn-md btn-outline rounded-lg flex-1">
              View Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CohortItem;
