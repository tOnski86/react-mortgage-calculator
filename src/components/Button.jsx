/* eslint-disable react/prop-types */
function Button({ onClick, type, children, icon, className }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${customButton[type]} ${className}`}
      >
        {icon ? (
          <div className='flex items-center justify-center font-0 gap-3'>
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
  pill: 'bg-yellow py-3 px-8 text-slate-900 font-bold text-lg rounded-full hover:bg-yellow/50 transition-all outline-none w-full md:w-auto',

  text: 'text-slate-700 hover:text-slate-900 font-medium transition-all underline underline-offset-4 focus:text-slate-900 outline-none active:scale-95',
};

export default Button;
