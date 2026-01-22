// 1
import { useRef } from "react";
function Updown() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const topinputRef=useRef(null);
  const bottominputRef=useRef(null);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
    topinputRef.current.focus();
  };
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
    bottominputRef.current.focus();
  };

  return (
    <div>
        <div ref={topRef}>
        <h2>Top</h2>
        <input ref={topinputRef} />
        <button onClick={scrollToBottom}>Go to Bottom ⬇</button>
        </div>
        <div style={{height:"100vh"}}></div>
        <div ref={bottomRef}>
        <h2>Bottom</h2>
        <input ref={bottominputRef} />
        <button onClick={scrollToTop}>Go to Top ⬆</button>
        </div>
    </div>
  );
}
export default Updown;
// 2
function Scrollpage(){
    const topref=useRef(null);
    const bottomref=useRef(null);
    const mid1ref=useRef(null);
    const mid2ref=useRef(null);
    const topinputref=useRef(null);
    const bottominputref=useRef(null);
    const mid1inputref=useRef(null);
    const mid2inputref=useRef(null);
    const goDown=()=>{
        mid1ref.current.scrollIntoView({behavior:"smooth"});
        mid1inputref.current.focus();
    };
    const gomid1=()=>{
       mid2ref.current.scrollIntoView({behavior:"smooth"});
       mid2inputref.current.focus();
    };

const goMid2=()=>{
        bottomref.current.scrollIntoView({behavior:"smooth"});
        bottominputref.current.focus();
    };
    const goUp=()=>{
        topref.current.scrollIntoView({behavior:"smooth"});
        topinputref.current.focus();
    };


    return (
        <div>
            <div ref={topref}>
            <h2>Top</h2>
            <input ref={topinputref} />
            <button onClick={goDown}>⬇️ Down</button>
        </div>

         <div style={{ height: "25vh" }}></div>

          <div ref={mid1ref}>
           <h2>Mid1</h2>
           <input ref={mid1inputref} />
           <button onClick={goUp}>⬆️ Up</button> 
           <button onClick={gomid1}>⬇️ Down</button>
          </div>

          <div style={{ height: "25vh" }}></div>

          <div>
            <div ref={mid2ref}>
            <h2>Mid2</h2>
            <input ref={mid2inputref} />
            <button onClick={goUp}>⬆️ Up</button>
            <button onClick={goMid2}>⬇️ Down</button>
        </div>

         <div style={{ height: "25vh" }}></div>

          <div ref={bottomref}>
           <h2>Bottom</h2>
           <input ref={bottominputref} />
           <button onClick={goUp}>⬆️ Up</button> 
          </div>
        </div>
        </div>
    );
}
export {Scrollpage};