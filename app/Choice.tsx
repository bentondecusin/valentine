import { useState } from "react";

export default function Choice() {
  const [yesSize, setYesSize] = useState(25);
  const [noSize, setNoSize] = useState(25);
  const [nClick, setNClick] = useState(0);

  const zhananyulu = [
    "No 🥀",
    "Are you sure? 🥺",
    "I'm gonna cry 🥺",
    "I'm really crying 🥹",
    "You see my tear? 🥹",
    "Babe pls!! 🥹",
    "I dream about you every night 🥹",
    "You are yin to my yang 🥹",
    "I know you love me 🥹",
    "I can't live without you! 🥹",
    "Babe that hurts~~ 🥹",
    "wwwwwwwww~~ 🥹",
  ];
  const [display, setDisplay] = useState(false);
  const onYesClick = () => {
    setDisplay(true);
  };

  const onNoClick = () => {
    setNClick(nClick + 1);
    setYesSize(yesSize + 4);
    if (nClick > 4) setNoSize(noSize - 4);
    else setNoSize(noSize - 1);
  };
  return (
    <div className="flex flex-row text-center lg:mb-10 lg:text-center mb-10">
      <div className="">
        <button
          className={`bg-emerald-400 hover:border-emerald-300/90 hover:bg-emerald-300/80 rounded-lg border border-transparent px-5 py-4 transition-transform hover:translate-y-1 motion-reduce:transform-none`}
          onClick={onYesClick}
        >
          <h2 className={"font-semibold"}>
            <p style={{ fontSize: yesSize + "px" }}>Yes 🌹</p>
          </h2>
        </button>

        {display && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-300 h-screen w-screen z-[10]">
            <div className="flex h-screen items-center justify-center">
              <h2 className={"text-5xl font-semibold"}>
                {nClick < zhananyulu.length ? (
                  <p>Yes Babe! 😘😘😘</p>
                ) : (
                  <p>What a choice Babe! 😘😘😘</p>
                )}
              </h2>
            </div>
          </div>
        )}
      </div>

      {nClick < zhananyulu.length && (
        <div
          style={{ transform: `translate(0,${-nClick * 15}px)` }}
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
