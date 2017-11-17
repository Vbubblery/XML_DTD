import alt from '../alt';

class HomeAction {
  constructor(){
    this.generateActions(
      'sendDone',
      'sendFail',
      'updateData',
      'updateDTD'
    );
  }
  checkInServer(data,dtd){
    var d = {"data":JSON.stringify(data),"dtd":JSON.stringify(dtd)}
     $.ajax({ 
      type:'POST',
      url: '/api/check',
      data: d
    })
      .done((data) => {
        this.actions.sendDone(data);
      })
      .fail((jqXhr) => {
        this.actions.sendFail(jqXhr)
      });
  }
}
export default alt.createActions(HomeAction);