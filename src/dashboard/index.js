import { GiOpenBook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

function Dashboard() {

  
  
  
  // const [data, setdata] = useState(produk);
 let navigate= useNavigate();
  return (
  <div>
    <div className='mt-2 box-content h-24 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto'>
  WELCOME TO FAKE MOODLE
  </div>
  <div className='mt-2 box-content h-52 w-full bg-stone-300	 p-4 border-4 max-w-7xl max-h-max mx-auto'>
    <div className='flex flex-col'>
  <h3 className='mb-14'>Pelajaran</h3>
  <GiOpenBook className='mx-5 text-7xl mt-2 cursor-pointer' onClick={()=>navigate("/dashboard/beranda")}  />
  </div>
  </div>
  <ToastContainer/>
  </div>)
}

export default Dashboard;
