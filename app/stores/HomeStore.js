import alt from '../alt';
import HomeAction from '../actions/HomeAction';

class HomeStore{
  constructor(){
    this.bindActions(HomeAction);
    this.data = null;
    this.dtd = null;
    this.msg = '';
  }
  onUpdateData(arr){
    this.data = arr;
  }
  onUpdateDTD(arr){
    this.dtd = arr;
  }
  onSendDone(data){
    this.msg = data;
  }
  onSendfail(data){
    console.log(data);
  }
}  
export default alt.createStore(HomeStore);
