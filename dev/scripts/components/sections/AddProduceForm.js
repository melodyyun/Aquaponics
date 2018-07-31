import React from "react";

class AddProduceForm extends React.Component {
  constructor(){
    super();
    this.saveProduceInfo = this.saveProduceInfo.bind(this);
  }

  saveProduceInfo(e) {
    e.preventDefault();
    console.log(e.target);
    const produceInfo = {
      //[e.target.name]: e.target.value;
    }
    console.log(produceInfo);
    //save this name into the database
  }

  render() {
    return (
      <form action="" onSubmit={e => this.saveProduceInfo()}>
        <input name="produce" type="text" placeholder="crop/fish" />
        <input name="price" type="text" placeholder="price" />
        <select name="status">
          <option value="planned">planned</option>
          <option value="planted">planted</option>
          <option value="ready">ready</option>
          <option value="harvested">harvested</option>
        </select>
        <textarea name="desc" placeholder="desc" />
        <input name="image" type="text" placeholder="image" />
        <button type="submit"> + produce </button>
      </form>
    );
  }
}

export default AddProduceForm;
