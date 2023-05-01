import ReactResponsive from "react-player";
import "./style.scss";

export default function Video() {
  return (
    <div className="outer">
      <ReactResponsive
        url="https://media.exper.com/exper-content-temp/200.mp4"
        width="300px"
        height="500px"
        controls
        playing
        className="react-player"
      />
    </div>
  );
}
