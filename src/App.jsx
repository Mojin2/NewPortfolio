import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  // const backGroundColor = `linear-gradient(#614385,#516395)`;
  // const backGroundColor = `linear-gradient(159deg,#3a98ce 0%, #474da5 50%,#2d44ad 100%)`;
  // const [backGroundColor, setBackGroundColor] = useState("#FFFFFF");
  useEffect(() => {
    setMenuOpened(false);
    // if (section > 0) {
    //   setBackGroundColor("#000000");
    // } else {
    //   setBackGroundColor("#FFFFFF");
    // }
  }, [section]);
  let backgroundColors = ["blue", "green", "red", "yellow"];
  const backgroundColor = backgroundColors[section];

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface section={section} setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
