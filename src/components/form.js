import React from "react";
import './form.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please Fill the column.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        document.getElementById("name").style="border: 1px solid red";
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please Fill the email.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Invalid Email.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please Fill the password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h1>Dynamic Form</h1>
      <form method="post" id="name"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your Name:</label><br/>
      <input type="text" name="username" placeholder="Your Username" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div><br/>
      <label>Enter your Email:</label><br/>
      <input type="text" name="emailid" placeholder="Your Email" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div><br/>
      <label>Enter your Password:</label><br/>
      <input type="password" name="password" placeholder="Your Password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div><br/><br/><br/>
      <input type="submit" id="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>

    );
}


}

export default RegisterForm