import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../User/User';
import { calcAge } from '../Age/Age';
import { countArray } from '../Count/Count';

// import Filter from '../Filter/Filter';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      someArray: [],
      gender: '',
      minAge: 18,
      maxAge: 99,
      seed: '123',
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({ 
      someArray: [], 
      users: []  
    }); 
    switch (e.target.id) {
      case "btnReset":
        window.location.reload()
      break;
      case "btnSubmit":
        getRandomUsers(10, this.state.seed, this.state.gender)
          .then( (data) => {
            this.setState({
              users: data,
              seed: ""
            });
          });
      break;
      default:
    }
  }

   handleChange(e) {
        this.setState({ 
      someArray: [], 
      users: []  
    }); 
    switch (e.target.id) {
      case "minAge":
      this.setState({ 
        minAge: e.target.value,
        seed: ""
       });
      break;
      case "maxAge":
      this.setState({ 
        maxAge: e.target.value, 
        seed: ""
      });
      break;
      case "rbMale":
      this.setState({
        gender: e.target.value,
        seed: ""
      });
      break;
      case "rbFemale":
      this.setState({
        gender: e.target.value,
        seed: ""
      });
      break;
      default:
    }
  }

  componentWillMount() {
      //request random users
    getRandomUsers(10, this.state.seed, this.state.gender)
      .then( (data) => {
        this.setState({
          users: data
        });
      });
  }

  renderUserItems() {
    // capitalize first letter
    const ucFirst = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    // iterate results and push by filter preference
    let user = this.state.users;
    let userByAge = this.state.someArray;
    let minAge = this.state.minAge;
    let maxAge = this.state.maxAge;
    let count = 0;
    Object.keys(user).find(function(key, index) {
      let val = user[key];
      if (calcAge(val.dob) >= minAge && calcAge(val.dob) <= maxAge) {
      userByAge.push(val);
      }
    });

     return userByAge.map((user, index) => {
      const title = ucFirst(user.name.title);
      const first = ucFirst(user.name.first);
      const last = ucFirst(user.name.last);
      const email = user.email;
      const age = calcAge(user.dob);
      const phone = user.phone;
      const cell = user.cell;
      const nat = user.nat;
      return (
        <UserItem
          key={first+last+index}
          title={title}
          firstName={first}
          lastName={last}
          email={email}
          age={age}
          phone={phone}
          cell={cell}
          large={user.picture.large}
          nat={nat}/> 
      );
    });
  }
  
  render () {
    if(this.state.fetching) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
    <div>
      <div id="userPreferences">
        <h2>Search Criteria</h2>
          <div className="form">
            <div className="form-group">
            <label className="control-label">Age</label>
              <label className="radio-inline"><input id="minAge" type="number" value={this.state.value} onChange={this.handleChange} defaultValue="18"/></label>
              <label className="radio-inline"><input id="maxAge" type="number" value={this.state.value} onChange={this.handleChange} defaultValue="99"/></label>
            </div>
            <div className="form-group" onClick={this.handleChange.bind(this)} onChange={this.handleChange.bind(this)}>
              <label className="radio-inline"><input id="rbMale" type="radio" value="male" name="gender"/> Male </label>
              <label className="radio-inline"><input id="rbFemale" type="radio" value="female" name="gender"/> Female </label>
            </div>
            <input className="btn btn-default" id="btnReset" type="submit" value="Reset" onClick={this.handleSubmit}/>
            <input className="btn btn-primary" id="btnSubmit" type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </div>
        <div id="searchResults">
            <h1>{countArray(this.state.users, this.state.minAge, this.state.maxAge)}</h1>
          <h2> Candidates Found!</h2>
            <div id="snap">
              {this.renderUserItems()}
            </div>
        </div>    
      </div>
    );
  }
}