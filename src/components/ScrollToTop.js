import React, {useState, useEffect} from "react";
// css
import './css/ScrollToTop.css'
// from npm package
import { useWindowScroll } from "react-use"

export default function ScrollToTop() {
    const {y: Yaxis} = useWindowScroll();
    const [hideBtn, setHideBtn] = useState(true)

    useEffect(() => {
        if(Yaxis>400){
            setHideBtn(false)
        } else setHideBtn(true)
    }, [Yaxis])

    const scrollToTopHandler=()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    }

  return (
    <>
      {!hideBtn && <div className="scrollToTop">
        <button
        className="scrollToTop-btn"
        onClick={scrollToTopHandler}
        >&#11165;</button>
      </div>}
    </>
  );
}
