import parse from "html-react-parser";
import { useEffect, useState } from "react";
import produk from "../db.json";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tes() {
  const [answer, setAnswer] = useState(null);
  let navigate = useNavigate();

  const data = produk.questions;

  useEffect(() => {
    if (localStorage.getItem("answer") === null) {
      let array = data.slice(1).map((n, i) => {
        return { nomor: i + 1, score: null, answer: null };
      });
      localStorage.setItem("answer", JSON.stringify(array));
      setAnswer(array);
    } else {
      setAnswer(JSON.parse(localStorage.answer));
    }
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault()
    console.log(e.target);

    // localStorage.setItem("submit", JSON.stringify(answer));
    // localStorage.submit=JSON.stringify(answer)
    const soal = answer;
    const result = soal.filter((s) => s.answer === null);
    const hasil = result.length + " soal belum dikerjakan";
    const id = result.map((v) => v.nomor);
    await navigate("/tes#" + id[0]);

    if (result.length === 0) {
      toast.succes("Semua soal sudah dikerjakan");
    } else {
      toast.error(hasil);
    }

    let array = answer.map((n, i) => {
      return { nomor: i + 1, score: n.score };
    });
    localStorage.submit = JSON.stringify(array);

    // console.log(array,"submit");
  };

  console.log(answer);

  return (
    <div>
      <div className="mt-2 box-content h-32 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto text-4xl">
        ASPD 2022
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 justify-items-center gap-1 mt-2 ml-4  box-content h-max bg-stone-300 p-4 border-4 ">
          <h2 className="mb-2 col-span-4"> Sidebar</h2>
          {answer?.map((value, index) => (
            <div
              className={`flex justify-center bg-white w-12 h-12 items-center ${
                value.answer !== null ? "bg-red-500" : "bg-none"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <form className="grid mt-2 col-span-2 gap-6" onSubmit={handleSubmit}>
          {data?.slice(1).map((item, i) => (
            <div key={i} className=" grid grid-cols-4 gap-4">
              <div className="flex box-content bg-stone-300 h-12 w-12 p-2 justify-center justify-self-center items-center text-xl font-bold">
                {i + 1}
              </div>
              <div
                className="-ml-10 col-span-3 box-content bg-stone-300 p-4 border-4 max-w-3xl"
                id={i + 1}
              >
                {parse(item.questiontext)}
                <div>
                  {item?.answers?.map((v, idx) => (
                    <div>
                      <input
                        onChange={(e) => {
                          if (e.target.checked) {
                            let newdata = [...answer];
                            newdata[i].answer = idx;
                            newdata[i].score = v.score;
                            console.log(newdata[i]);
                            localStorage.answer = JSON.stringify(newdata);
                            setAnswer(JSON.parse(localStorage.answer));
                            console.log(answer[i].answer, idx, "checked");
                          }
                        }}
                        type="radio"
                        value={idx}
                        name={item.name}
                        defaultChecked={answer && answer[i].answer === idx}
                      />
                      {String.fromCharCode(97 + idx)} {parse(v.text)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button type="submit" className="bg-green-400	rounded px-4 py-1 relative mb-5">
              SUBMIT
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tes;
