//Styling
import { AvocadoImage } from "../styles";

const AvocadoItem = (props) => {
  const avocado = props.avocado;
  return (
    <AvocadoImage key={avocado.id} src={avocado.image} alt={avocado.name} />
  );
};

export default AvocadoItem;
