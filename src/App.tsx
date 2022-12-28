import "@/styles/css/index.css";
import "@/styles/less/index.less";
import IconSvgAndroid from "./components/core/Icon/AssetsSvgIcon/Android";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Hello world!</h1>

      <div>
        <IconSvgAndroid />
      </div>
    </div>
  );
}

export default App;
