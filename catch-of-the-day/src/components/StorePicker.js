import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    // grab text from box
    const storeId = this.storeInput.value;
    // transition to store in router
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=> {this.storeInput = input}} />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;
