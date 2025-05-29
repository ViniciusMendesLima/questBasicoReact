import "./button.css";

const Button = ({
  label = "Padrão",
  color = "red",
  textTransform = "uppercase",
  backColor = "orange",
}) => {
  return (
    <button
      className="btn"
      style={{
        color,
        textTransform,
        backgroundColor: backColor,
      }}
      onClick={() => {
        alert(`O label desse botão é ${label}`);
      }}
    >
      {label}
    </button>
  );
};

export default Button;
