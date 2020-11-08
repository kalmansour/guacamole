import circles from "../circles";

//components
import CircleItem from "./CircleItem";

//styles
import ListWrapper from "../styles";

const CircleList = () => {
  const circleList = circles.map((circle) => (
    <CircleItem circle={circle} key={circle.id} />
  ));
  return <ListWrapper>{circleList}</ListWrapper>;
};

export default CircleList;
