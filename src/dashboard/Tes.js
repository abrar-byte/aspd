import parse from "html-react-parser";
import produk from '../db.json'


function Tes() {

  const data=produk.questions
  console.log(data);
    
 
  return <div>
    <div className='mt-2 box-content h-32 w-full bg-stone-300	 p-4 border-4 max-w-7xl mx-auto text-4xl'>
  ASPD 2022
  </div>
  <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto'>
    <div className='mt-2 mx-auto box-content h-96 w-96 bg-stone-300	 p-4 border-4'>
      Sidebar
    </div>
    <div className='mt-2 mx-auto col-span-2 '>
     {data?.slice(1).map((item,i) => ( 
       <form>
        <div className=' box-content h-full w-full bg-stone-300	 p-4 border-4 max-w-3xl  my-2'>
         {parse(item.questiontext)}

          <div>
            {item.answers.map((v,idx) => (
              <div>                
                <input onclick="" type="radio" value={idx} name={item.name} /> {String.fromCharCode(97+idx)}  {parse(v.text)}

              </div>

            ))}
          </div>
         </div>
         </form>
        
         ))}
         </div>

</div>

  </div>;
}

export default Tes;
