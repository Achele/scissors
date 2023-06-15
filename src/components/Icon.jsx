import logo from "../assets/SCISSOR.png";
import chainIcon from "../assets/Vector.png";
import lineIcon from "../assets/Vector 2.png";
import slash from "../assets/Vector 3.png";
import curves from "../assets/Vector (1).png";
import lineThrough from "../assets/Vector (2).png";
import arrow from "../assets/Line 7.png";

const LogoIcon = (props) => <img src={logo} alt=" Scissors logo" {...props} />;

const ChainIcon = (props) => (
  <img src={chainIcon} alt=" Scissors logo" {...props} />
);

const LineIcon = (props) => (
  <img src={lineIcon} alt=" Scissors logo" {...props} />
);

const Slash = (props) => <img src={slash} alt=" Scissors logo" {...props} />;

const Curves = (props) => <img src={curves} alt=" Scissors logo" {...props} />;

const LineThrough = (props) => (
  <img src={lineThrough} alt=" Scissors logo" {...props} />
);

const Arrow = (props) => <img src={arrow} alt=" Scissors logo" {...props} />;
export { LogoIcon, ChainIcon, LineIcon, Slash, Curves, LineThrough, Arrow };
