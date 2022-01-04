const Button = (props) => {
  const buttonWidth = props.size === "lg" ? "w-36" : "w-18";
  return (
    <div
      onClick={props.onClick}
      className={`${buttonWidth} h-15 bg-indigo-600 border inline-block text-white font-bold text-center text-xl pt-3 hover:bg-indigo-700 hover:cursor-pointer select-none`}
    >
      {props.digit}
    </div>
  );
};

export default Button;
