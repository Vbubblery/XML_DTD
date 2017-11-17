import React from 'react';
import HomeAction from '../actions/HomeAction';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }
  
  onChange(state) {
    this.setState(state);
  }
  handleDataChange(e){
    var reader = new FileReader()
    reader.readAsText(document.getElementById("input-b1").files[0], "UTF-8");
    reader.onload = function(evt){
      var fileString = evt.target.result;
      var arr = fileString.split(/\r\n|[\r\n]/);
      arr = arr.filter(i=>i!='');
      HomeAction.updateData(arr);
    }
  }
  handleDTDChange(e){
    var reader = new FileReader()
    reader.readAsText(document.getElementById("input-b2").files[0], "UTF-8");
    reader.onload = function(evt){
      var fileString = evt.target.result;
      var arr = fileString.split(/\r\n|[\r\n]/);
      arr = arr.filter(i=>i!='')
      HomeAction.updateDTD(arr);
    }
  }
  handleClick(e){
    HomeAction.checkInServer(this.state.data,this.state.dtd)
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">XML</li>
          <li className="list-group-item"><input id="input-b1" name="input-b1" type="file" onChange={this.handleDataChange.bind(this)} className="file" /></li>
          <li className="lis t-group-item">DTD</li>
          <li className="list-group-item"><input id="input-b2" name="input-b2" type="file" onChange={this.handleDTDChange.bind(this)} className="file" /></li>
        </ul>
        <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Check</button>
        <div className="alert alert-info alert-dismissable">
          {this.state.msg}
        </div>
      </div>
    );
  }
}

export default Home;
