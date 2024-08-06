import {useRef, useState} from "react";
import MainContent from './modules/main/routes/MainContent';

function App() {

  const [scrollHandleCount, setScrollHandleCount] = useState<number>(0);
  const [
    scrollDebounceHandleCount,
    setScrollDebounceHandleCount
  ] = useState<number>(0);
  const timerDebounceRef = useRef();

  return (
    <MainContent />
  )
}



export default App
