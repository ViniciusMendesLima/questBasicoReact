import "./index.css";

const AlertButton = ({
  label = "Padrão",
  color = "red",
  textTransform = "uppercase",
  backColor = "orange",
}) => (
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

export default AlertButton;
