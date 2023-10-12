import { useState } from "react";
import { PaperClip } from "./components/PaperClip";
import Data from "./data.json";
function App() {
  const [lang, setLang] = useState<any>("en");
  const [data, _] = useState<any>(Data);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <h5 className="text-7xl font-light">Özgür Çiriş</h5>
        <p className="p-5">Frontend Developer</p>
        <a
          href="#experience"
          className="p-3 rounded-md text-black absolute bottom-10"
        >
          {lang === "en" ? "Projects" : "Projeler"}
        </a>

        <div className="w-full h-32 absolute top-0 flex justify-end mr-10  items-center">
          <button
            className={
              lang === "tr"
                ? "bg-black text-white p-1 rounded m-2"
                : "p-1 rounded m-2"
            }
            onClick={() => setLang("tr")}
          >
            TR
          </button>
          <button
            className={
              lang === "en" ? "bg-black text-white p-1 rounded" : "p-1 rounded"
            }
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>
      <div
        id="experience"
        className="w-full min-h-screen bg-black py-2 flex px-8 border-box justify-between item-centers flex-wrap"
      >
        <div className="w-full text-white text-2xl mb-10 md:mb-0 md:text-6xl mt-12">
          <h5>Deliveryhero | Yemeksepeti</h5>
        </div>

        {data[lang].experience.map(({ label, detail }: any) => (
          <>
            <div className="text-white w-full md:w-[50%] ">
              <PaperClip label={label} />
              <p className=" w-[90%] mt-5 text-left text-gray-400 text-sm">
                {detail}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
