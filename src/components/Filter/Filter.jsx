import { Component } from 'react';

class Filter extends Component {
  filterChange = e => {
    const filterValue = e.target.value.toLowerCase().trim();
    this.props.filterContacts(filterValue);
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.filterChange} />
      </div>
    );
  }
}

export default Filter;
