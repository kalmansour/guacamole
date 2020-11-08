//Styling
import { HoleImage, AvocadoImage } from "../styles";

const CircleItem = (props) => {
  const circle = props.circle;
  if (circle.id === 3)
    return (
      <HoleImage key={circle.id}>
        <AvocadoImage src="https://cdn3.vectorstock.com/i/thumb-large/59/57/kawaii-avocado-cartoon-design-vector-26515957.jpg" />
      </HoleImage>
    );
  else return <HoleImage />;
};

export default CircleItem;
