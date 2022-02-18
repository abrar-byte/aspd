import { GiOpenBook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

function Dashboard({isLogged}) {

  useEffect(() => {
    if(isLogged === false){
      alert("Login Dulu")
    }
  }, [])
  
  
  // const [data, setdata] = useState(produk);
 let navigate= useNavigate();
  return (
  <div>
    <div className='mt-2 box-content h-32 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto'>
  WELCOME TO FAKE MOODLE
  </div>
  <div className='mt-2 box-content h-32 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto'>
  <h3>Pelajaran</h3>
  <GiOpenBook className='text-4xl mt-2 cursor-pointer' onClick={()=>navigate('/tes')}  />
  </div>
  <ToastContainer/>
  </div>)
}

export default Dashboard;
