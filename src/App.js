import UseWindowSize from "./hooks/use-window-size";
import PostLists from "./components/PostLists";
import "./styles.css";
import DebouncedInput from "./components/DebouncedInput";
import UserInfo from "./components/UserInfo";
import IntersectionElement from "./components/IntersectionElement";

export default function App() {
  // const windowSize = UseWindowSize();
  return (
    <div className="App">
      {/* <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p> */}
      {/* <PostLists /> */}
      {/* <DebouncedInput /> */}
      {/* <UserInfo /> */}
      <IntersectionElement />
    </div>
  );
}
