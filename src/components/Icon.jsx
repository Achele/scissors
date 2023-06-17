import logo from "../assets/SCISSOR.png";
import chainIcon from "../assets/Vector.png";
import lineIcon from "../assets/Vector 2.png";
import slash from "../assets/Vector 3.png";
import curves from "../assets/Vector (1).png";
import lineThrough from "../assets/Vector (2).png";
import arrow from "../assets/Line 7.png";
import line from "../assets/Line 70.png";
import grid from "../assets/grid.png";
import linkIcon from "../assets/link-2.png";
import edit from "../assets/edit.png";
import activity from "../assets/activity.png";

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

const Line = (props) => <img src={line} alt=" Scissors logo" {...props} />;

const Grid = (props) => <img src={grid} alt=" Scissors logo" {...props} />;

const LinkIcon = (props) => (
  <img src={linkIcon} alt=" Scissors logo" {...props} />
);

const Edit = (props) => <img src={edit} alt=" Scissors logo" {...props} />;

const Activity = (props) => (
  <img src={activity} alt=" Scissors logo" {...props} />
);

export {
  LogoIcon,
  ChainIcon,
  LineIcon,
  Slash,
  Curves,
  LineThrough,
  Arrow,
  Line,
  Grid,
  LinkIcon,
  Edit,
  Activity,
};
