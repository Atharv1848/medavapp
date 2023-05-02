import ReactResponsive from "react-player";
import "./style.scss";
import CariierIcon from "../assets/images/carrier.png"


export default function Video() {
  return (
    <div className="outer">
      <ReactResponsive
        url="https://media.exper.com/exper-content-temp/200.mp4"
        width="100%"
        height="500px"
        playing
        controls
        // light={CariierIcon}
      />
    </div>
  );
}
