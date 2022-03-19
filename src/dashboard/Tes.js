import parse from "html-react-parser";
import { useEffect, useRef, useState } from "react";
import produk from "../db.json";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { READY, SAVE_ANSWER, TIME } from "../store/type";

function Tes() {
  const [error, setError] = useState(false);
  const Ref = useRef(null);
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  const already = useSelector((state) => state.already);
  const answers = useSelector((state) => state.answers);
  const data = produk.questions;
  const inputRef = useRef();

  let navigate = useNavigate();

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    console.log(total, "total");
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (x) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(x);
    if (total >= 0) {
      dispatch({type:TIME,timer:(hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':'
      + (seconds > 9 ? seconds : '0' + seconds)})
   
    }
  };

  const clearTimer = (x) => {
    // setTimer('00:00:10');
    dispatch({type:TIME,timer:'00:10:00'})

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(x);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // deadline.setSeconds(deadline.getSeconds() + 10);

    deadline.setMinutes(deadline.getMinutes() + 10);
    console.log(deadline);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());

     if(already){
      toast.error("Tidak ada kesempatan untuk mengerjakan lagi");
       navigate(-1)}
  }, []);

  useEffect(() => {
    // localStorage.timer=JSON.stringify(timer)

  	if(timer === '00:00:00'){
      console.log('berhasil');
   dispatch({type:READY})
      navigate(-1)
    }

  }, [timer]);

  // console.log(!answers.length, "length");
  useEffect(() => {
 
    if (!answers.length) {
      let array = data.slice(1).map((n, i) => {
        return null;
      });
      dispatch({ type: SAVE_ANSWER, answers: array });
    }
   
    // }
  }, []);

  const handleChange = (e, i, idx) => {
    if (e.target.checked) {
      let newdata = [...answers];
      newdata[i] = idx;
      dispatch({ type: SAVE_ANSWER, answers: newdata });

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const soal = answers;
    const result = soal.filter((s) => s === null);
    const hasil = result.length + " soal belum dikerjakan";
    const id = result.map((v, i) => i + 1);
    // await navigate("/tes#" + id[0]);
    //   if(inputRef.current.checked === false){
    //   inputRef.current.focus()
    // }

    // Ref.current.focus()
    if (result.length === 0) {
      toast.succes("Semua soal sudah dikerjakan");
    } else {
      toast.error(hasil);
    }

    // let array = answers.map((n, i) => {
    //   return n;
    // });
    // console.log(array);

    dispatch({ type: READY });
    // localStorage.already = JSON.stringify(true)

    navigate(-1);
  };

  // console.log(answer);

  return (
    <div>
      <div className="flex justify-end">
        <h2>{timer}</h2>
      </div>
      <div className="mt-2 box-content h-32 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto text-4xl">
        ASPD 2022
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 justify-items-center gap-1 mt-2 ml-4  box-content h-max bg-stone-300 p-4 border-4 ">
          <h2 className="mb-2 col-span-4"> Sidebar</h2>
          {answers?.map((value, index) => (
            <div
              className={`flex justify-center bg-white w-12 h-12 items-center ${
                value !== null ? "bg-green-500" : "bg-none"
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
                id={i + 1} /* ref={inputRef} */
              >
                {parse(item.questiontext)}
                <div>
              
                  {item?.answers?.map((v, idx) => (
                    <div>
                      <input
                        onChange={(e) => handleChange(e, i, idx)}
                        // ref={Ref}

                        type="radio"
                        // required
                        // autoFocus
                        value={idx}
                        name={item.name}
                        defaultChecked={answers && answers[i] === idx}
                      />
                      {String.fromCharCode(97 + idx)} {parse(v.text)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-400	rounded px-4 py-1 relative mb-5"
            >
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
