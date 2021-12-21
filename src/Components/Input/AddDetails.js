import Button from "../UI/Button";
import {useState} from 'react'
import styles from './ShowDetails.module.css'


const AddDetails = (props) => {



    const [name, setName] = useState()
    const [age, setAge] = useState()

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        

        props.getData({name: name, age: age});
        
    }


    return (
        <div style={{padding: '10px'}}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" onChange={nameHandler}></input>
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" onChange={ageHandler}></input>  
                <Button type="submit" text="Add Details"/>          
                </form>
        </div>
    )
}

export default AddDetails;