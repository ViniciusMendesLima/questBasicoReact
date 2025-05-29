import "./text.css";

const Text = ({
  label = "Padrão",
  color = "red",
  textTransform = "uppercase",
  backColor = "orange",
}) => {
  return (
    <button
      className="text"
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

export default Text;
