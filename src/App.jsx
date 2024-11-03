import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState(""); // Current result
  const [lastValidResult, setLastValidResult] = useState(""); // Last valid result

  useEffect(() => {
    if (exp) {
      try {
        const evaluatedResult = eval(exp.replace(/x/g, "*").replace(/÷/g,"/")); // Convert 'x' to '*' for multiplication
        setResult(evaluatedResult);
        setLastValidResult(evaluatedResult); // Update last valid result
      } catch (error) {
        setResult(lastValidResult); // Retain the last valid result
      }
    } else {
      setResult(""); // Clear the result if expression is empty
    }
  }, [exp, lastValidResult]); // Add lastValidResult as a dependency

  const btnfunc = (e) => {
    const value = e.target.innerText;
    setExp((prevExp) => prevExp + value);
  };
  

  return (
    <div className="h-screen w-screen bg-[#E7E8E6] text-2xl text-zinc-200 p-10 flex justify-center items-center">
      <div className="bg-[#22252E] h-[90vh] w-[50vh] rounded-3xl relative overflow-hidden">
        <div className="absolute bg-[#292C37] flex rounded-2xl text-xl top-5 left-[37%] px-3 py-2 gap-5 text-zinc-300">
          <i className="ri-moon-line text-white"></i>
          <i className="ri-sun-line"></i>
        </div>
        <div className="absolute text-2xl font-semibold top-[20%] right-4">
          {exp}
        </div>
        <div className="absolute text-5xl font-semibold top-[27%] right-4">
          <h1>{result}</h1>
        </div>
        <div className="bg-[#292C37] absolute bottom-0 w-full h-[60%] rounded-tl-[8%] rounded-tr-[8%] grid grid-cols-4 text-center items-center px-4 gap-x-5 py-2">
          <button
            className="p-5 rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#3CE8D5] hover:bg-[#22252E]"
            onClick={() => {
              setExp("");
              setResult(""); // Clear the result when AC is pressed
            }}
          >
            AC
          </button>
          <button
            className="p-5 rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#3CE8D5] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            /
          </button>
          <button
            className="p-5 rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#3CE8D5] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            %
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#EC7D7C] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            ÷
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            7
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            8
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            9
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#EC7D7C] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            x
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            4
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            5
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            6
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#EC7D7C] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            -
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            1
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            2
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            3
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#EC7D7C] hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            +
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={() => {
              setExp((prev) => {
                if (prev !== "") {
                  return prev.substring(0, prev.length - 1);
                }
                return prev;
              });
            }}
          >
            <i className="ri-arrow-go-back-line"></i>
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            0
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 hover:bg-[#22252E]"
            onClick={(e) => btnfunc(e)}
          >
            .
          </button>
          <button
            className="p-5 font-bold rounded-2xl bg-[#272B34] shadow-xl shadow-zinc-900 text-[#EC7D7C] hover:bg-[#22252E]"
            onClick={() => {
              try {
                const finalResult = eval(exp);
                setResult(finalResult);
              } catch (error) {
                setResult("Invalid Expression");
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
