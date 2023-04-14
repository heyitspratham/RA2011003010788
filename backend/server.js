import express, { response } from 'express';
import axios from 'axios';

const server = express();

const data = {
    "companyName": "Pratham"
}
// let auth = 'sd';

//registering the user 
// axios.post('http://localhost:3000/register', data,{
//     headers: {
//         'Content-Type': 'application/json'
//       }
// }).then(response=>{
//     auth = JSON.stringify(response.data);
// }).catch(err=>{
//     console.log(err);
// })

// console.log(auth);

//authenticating
// axios.post('http://localhost:3000/auth', auth,{
//     headers: {
//         'Content-Type': 'application/json'
//       }
// }).then(response=>{
//     console.log(response.data.access_token);
// }).catch(err=>{
//     console.log(err);
// })
let trainData= {}

// getting trains
const getData = async ()=>{

    const response = await axios.get('http://localhost:3000/trains', {
        headers:{
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODE0ODI2MzMsImNvbXBhbnlOYW1lIjoiUHJhdGhhbSIsImNsaWVudElEIjoiNWRhZjg5ZjUtMGJhNy00NTUxLWE3YmQtNDM1OWUxNGVhMTYzIn0.nEuIXobX3BARVPWNX0elg9P1CbHOaWXRArcikm8y59U`
        }
    }).then(response=>{
        trainData = response.data;
    }).catch(error=>{
        console.log(error);
    })
    
}
getData();
console.log((response.json()));





server.listen(5555, ()=>{
    console.log("server working");
})


