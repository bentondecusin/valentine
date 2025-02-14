import { useState } from "react";

export default function Choice() {
  const [yesSize, setYesSize] = useState(25);
  const [noSize, setNoSize] = useState(25);
  const [nClick, setNClick] = useState(0);

  const zhananyulu = [
    "No 🥀",
    "You must've misclicked 🤨",
    "You are the CSS to my HTML!! 🥹",
    "Are you FIFO? Bc you're a Queue<T>!",
    "Are you https?? Bc without you I'm just ://",
    "Are you a double? Bc you are floating in my mind",
    "Are you a function? Let me call you",
    "Are you an exception? Let me catch you",
    "We can merge, without conflicts!",
    "Let me inject my SQL into your application layer.",
    "Add my heart because I'm ready to commit",
  ];
  const [display, setDisplay] = useState(false);
  const onYesClick = () => {
    setDisplay(true);
  };

  const onNoClick = () => {
    setNClick(nClick + 1);
    setYesSize(yesSize + 2);
    if (nClick == zhananyulu.length) setNoSize(0);
    else setNoSize(noSize - 1);
  };
  return (
    <div className="flex flex-col justify-center text-center lg:mb-10 lg:text-center mb-10">
      <div className="">
        {!display && (
          <button
            className={`bg-emerald-400 hover:border-emerald-300/90 hover:bg-emerald-300/80 rounded-lg border border-transparent px-5 py-4 transition-transform hover:translate-y-1 motion-reduce:transform-none`}
            onClick={onYesClick}
          >
            <h2 className={"font-semibold"}>
              {nClick < zhananyulu.length ? (
                <p style={{ fontSize: yesSize + "px" }}>Yes 🌹</p>
              ) : (
                <p>Yes 🌹 (You know you can always say no)</p>
              )}
            </h2>
          </button>
        )}
        {display && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-300 h-screen w-screen z-[10]">
            <div className="flex h-screen items-center justify-center">
              <h2 className={"text-5xl font-semibold"}>
                <p>Lysm 😘😘😘</p>
              </h2>
            </div>
          </div>
        )}
      </div>

      {!display && nClick < zhananyulu.length && (
        <div
          style={{ transform: `translate(0, ${nClick * 30}px)` }}
          className="ml-3"
        >
          <button
            className={`bg-rose-400 hover:border-rose-300/80 hover:bg-rose-300/90 rounded-lg border border-transparent px-5 py-4 transition-transform hover:translate-y-1 motion-reduce:transform-none`}
            onClick={onNoClick}
          >
            <h2 className="font-semibold">
              <p
                style={{
                  fontSize: noSize + "px",
                }}
              >
                {zhananyulu[nClick]}
              </p>
            </h2>
          </button>
        </div>
      )}
    </div>
  );
}
