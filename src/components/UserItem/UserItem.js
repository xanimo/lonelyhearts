import React, { Component, PropTypes } from 'react';
import newId from '../NewId/newid';
import { titleize } from '../Titleize/Titleize';
import './UserItem.css';


export default class UserItem extends Component {
    constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.id = newId();
  }

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    largePicture: PropTypes.string
  };
  render() {
    const targetId = "#" + this.id;
    let count = 0;
    count = "#" + this.id;
    console.log("#" + this.id);
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const title = titleize(this.props.title);
    const email = this.props.email;
    const age = this.props.age;
    const phone = this.props.phone;
    const cell = this.props.cell;
    const largePicture = this.props.large;
    return (
    <div className="card">
      <img className="photo" src={largePicture} alt="Profile Avatar"/>
      <div className="card-body">
      <h5 className="card-title">{title} {firstName} {lastName}</h5>
        <h4>{age}</h4>
         
      
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={targetId}>
            Contact
          </button>

          <div className="modal fade" id={this.id} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Contact {title} {firstName} {lastName}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                    <div className="modal-body">
                        <div>Phone: {phone} </div>
                        <div>Cell: {cell} </div>
                        <div>Email: {email} </div>
                    </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
      </div>  
      </div>
    </div>
    );
  }
}
