import RUPData from '../../Helpers/Classes';
import './MyToast.css';
import 'react-toastify/dist/ReactToastify.css';

type MyToastState = {
  rupRow: RUPData;
}

function MyToast(state:MyToastState){

  return(
    <div className="MyToast">
      <div className='MyToastLine'>Name: <br></br>{state.rupRow.name}</div>
      <div className='MyToastLine'>Predecessors: <br></br>{state.rupRow.predecessors}</div>
      <div className='MyToastLine'>Author: <br></br>{state.rupRow.author}</div>
      <div className='MyToastLine'>Description: <br></br>{state.rupRow.description}</div>
    </div>
  );
}

export default MyToast;