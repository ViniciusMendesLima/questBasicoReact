import "./text.css";

const Text = (props) => {
  return (
    <p className="text" style={{color: props.color, textTransform:props.textTransform}}>{props.content}</p>
  );
};

// class Text extends React.Component {
//   render() {
//     return <p className="text">{this.props.content}</p>;
//   }
// }

export default Text;
