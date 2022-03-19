import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
// import { Dialog } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeDashboard() {
  let navigate = useNavigate();
  // const dispatch=useDispatch();
  const already = useSelector((state) => state.already);

  // const logout=()=>{
  //  dispatch({type:SAVE_LOGOUT})
  // }
 
  // const [already, setAlready] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onNavigate =()=>{
    navigate('/dashboard/beranda/tes')
  }

  // useEffect(() => {
  //   if (localStorage.already) {
  //     console.log("berhasil");
  //     setAlready(true);
  //   }
  // }, []);

  return (
    <div>
      <div className="mt-2 box-content h-24 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto">
        WELCOME TO FAKE MOODLE
      </div>
      <div className="mt-2 box-content h-52  w-full bg-stone-300	 p-4 border-4 max-w-7xl max-h-max	 mx-auto">
        <div className="flex flex-col ">
          <h1 className="mb-3">bindomtkipa</h1>
          <p>Waktu : 10 menit </p>
        </div>
        <div className="grid justify-items-center	 mt-5	">
          <p>Jumlah percobaan yang diperbolehkan : 1</p>
          <p>Waktu pengerjaan : 10 min</p>
          {already ? (
            <button
              className="bg-zinc-500		 px-2 py-1 rounded-md	 mt-10 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Kembali ke Kursus
            </button>
          ) : (
            <>
                 <button
                className="bg-blue-600 px-2 py-1 rounded-md	 mt-10 cursor-pointer"
                // onClick={() => navigate("/dashboard/beranda/tes")}
                onClick={openModal}
              >
                Kerjakan Sekarang
              </button>
            {/* <div className="fixed inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Open dialog
              </button>
            </div> */}
      
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>
      
                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                       Mulai Percobaan
                      </Dialog.Title>
                      <div className="mt-2">
                        <h3>Batasan Waktu</h3>
                        <p className="text-sm text-gray-500 mt-3">
                         Upaya anda akan memiliki batas waktu 10 min...
                        </p>
                      </div>
      
                      <div className="flex justify-between w-48	 mt-4">
                      <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={onNavigate}
                        >
                          Mulai ujian
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={closeModal}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </>
      
            // <div>
            
              // <button
              //   className="bg-blue-600 px-2 py-1 rounded-md	 mt-10 cursor-pointer"
              //   // onClick={() => navigate("/dashboard/beranda/tes")}
              //   onClick={() => setIsOpen(true)}
              // >
              //   Kerjakan Sekarang
              // </button>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
}
