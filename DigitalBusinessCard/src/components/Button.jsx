const Button = ({ bgColor, textColor, label, Icon }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="flex items-center gap-2 px-3 py-1 w-[100px] justify-center rounded-sm text-xs font-medium"
    >
      {Icon && <Icon className="w-3 h-3" />}
      <p className="text-[12px]">{label}</p>
    </button>
  );
};

export default Button;
