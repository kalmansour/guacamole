import holes from "../holes";

//components
import HoleItem from "./HoleItem";

//styles
import ListWrapper from "../styles";

const HoleList = () => {
  const holeList = holes.map((hole) => <HoleItem hole={hole} key={hole.id} />);
  return <ListWrapper>{holeList}</ListWrapper>;
};

export default HoleList;

// onClcks={event => console.log(event.target.value)}
