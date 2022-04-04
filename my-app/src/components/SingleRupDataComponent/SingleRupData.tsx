import { toast } from 'react-toastify';
import RUPData from '../../Helpers/Classes';
import checkActiveSystemAndSetStyle from '../../Helpers/Styles';
import MyToast from '../MyToastComponent/MyToast';
import './SingleRupData.css';

type SingleRupDataState = {
  singleRupData: RUPData;
  activeSystem: string;
  hide: boolean;
}

function SingleRupData(state: SingleRupDataState) {
  const notifyDescription = () => toast.info(<MyToast rupRow={state.singleRupData} />);
  
  return (
    <p className={"singleRupData" + (state.hide ? " hiddenData" : "")} style={checkActiveSystemAndSetStyle(state.singleRupData, state.activeSystem)} onClick={notifyDescription}>{state.singleRupData.index} :: {state.singleRupData.name}</p>
  );
}

export default SingleRupData;
