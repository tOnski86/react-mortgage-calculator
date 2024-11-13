/* eslint-disable react/prop-types */
function Button({ onClick, type, children, icon }) {
  return (
    <div>
      <button onClick={onClick} className={customButton[type]}>
        {icon ? (
          <div className='flex items-center justify-center gap-3'>
            <img src={icon} />
            <span>{children}</span>
          </div>
        ) : (
          <span>{children}</span>
        )}
      </button>
    </div>
  );
}

const customButton = {
  pill: 'bg-yellow py-3 px-6 text-slate-900 font-bold text-lg rounded-full hover:bg-yellow/50 transition-all hover:scale-105 active:scale-95 outline-none focus:ring focus:ring-yellow/50',

  text: 'text-slate-700 hover:text-slate-900 transition-all underline underline-offset-4 focus:text-slate-900 outline-none active:scale-95',
};

export default Button;
