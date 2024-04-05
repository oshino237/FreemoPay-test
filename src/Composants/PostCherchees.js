import { useLocation } from "react-router-dom";

export default function RecetteCherchees(props) {
  let location = useLocation();
  console.log("LA LOCATION EST ICI", location);
  return (
    <div className="postfind">
      <h2>{location.state.param.title}</h2>
      <br />
      {location.state.param.body}
      {/* <br />
      <b>id :{location.state.param.id}</b>

      <br />
      <b>userId : {location.state.param.userId}</b> */}
    </div>
  );
}
