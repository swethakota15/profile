import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
        state={
          profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
        imageHandler = (e) => {
          const reader = new FileReader();
          reader.onload = () =>{
            if(reader.readyState === 2){
              this.setState({profileImg: reader.result})
            }
          }
          reader.readAsDataURL(e.target.files[0])
        };
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            dateofbirth: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            dateofbirth: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            dateofbirth: " ",
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>
                <h1> PROFILE PAGE</h1>
				 <div className="img-holder"> </div>
					    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				 <div className="label">
                        <label className="image-upload" htmlFor="input">
						<i className="material-icons">Add_Photo</i>
					     </label>
                 </div>

                    <form onSubmit={this.handleSubmit}>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label className='form-label'>Date of birth</label>
          
                         <input type="date" id ="" name="birthday" /><br></br>
                        <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
