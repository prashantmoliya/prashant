import React, { Component } from 'react'

class Product_ClassComponents extends Component {

    constructor(props){
        super(props);

        console.log("Product_ClassComponents(Props)++", props);
    }
    

    product= [
        {
            id : "2303",
            name : "Mouse",
            description : "Mouse is computer fast work.",
            quantity : 2,
            price : 600,
        },
        { id : "2153", name : "Vefar", description : "Poteto Vefar balaji fever.", quantity : 5, price : 20, },
        { id : "5623", name : "volyboll", description : "volyboll is smart ball.", quantity : 10, price : 700, },
        { id : "7856", name : "Keyboard", description : "Key-board is tying process.", quantity : 10, price : 750, },
        { id : "9564", name : "Vadapav", description : "Vadapav enjoy watching time movie.", quantity : 25, price : 100, },
        { id : "0125", name : "Protocol", description : "Key-board protocol blue color.", quantity : 16, price : 200, },
        { id : "9658", name : "Pendrive", description : "32GB Pendrive 1peice.", quantity : 8, price : 530, },
    ];




 // Class Components thi data(value) display
  // 1- simple element string

    demo= "prashant"

  // 2- Object

    obj= {
        name : "xyz",
        email : "xyz@gmail.com"
    }

  // 3- Array
    // -multiple object

    arr1= [
        { id : 1, name : "om", email : "om@gmail.com"},
        { id : 2, name : "jay", email : "jay@gmail.com"},
        { id : 3, name : "raj", email : "raj@gmail.com"},
        { id : 4, name : "jit", email : "jit@gmail.com"},
        { id : 5, name : "yug", email : "yug@gmail.com"},
    ];

    // -element string
        
    arr2= ["Javascript", "React js", "Node js", "Php", "Python"];



    
    render() {
    return (
      <div className="App">

          <h1><u>Class Component</u></h1>

      {/* step-1 single element string */}

          <div>{this.props.Element}</div>

      {/* step-2 single Object */}

          <div>
              {this.props.Object.name}
              {this.props.Object.email}
          </div>

      {/* step-3 Array and multiple Object */}

        {/* -simple */}   

          <div>
              {
                  this.props.Array1.map((i)=>{
                      return <div>{i.name} / {i.email} / {i.phone}</div>
                  })
              }
          </div>

        {/* -table */}

          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email Id</th>
                      <th>Phone No.</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.props.Array1.map((i)=>{
                          return(
                              <tr>
                                  <td>{i.name}</td>
                                  <td>{i.email}</td>
                                  <td>{i.phone}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>

      {/* step-4 Array and element string */}

          <div>{this.props.Array2}</div>



           <h2>Product List</h2>

           <table>
               <thead>
                   <tr>
                       <td>Sr no.</td>
                       <td>Id</td>
                       <td>Product Name</td>
                       <td>Description</td>
                       <td>Quantity</td>
                       <td>Price</td>
                   </tr>
               </thead>
               <tbody>
                   {
                       this.product.map((i,index)=>{
                           return(
                               <tr>
                                   <td> <b>{index + 1+"."}</b> </td>
                                   <td> {i.id} </td>
                                   <td> {i.name} </td>
                                   <td> {i.description} </td>
                                   <td> {i.quantity} </td>
                                   <td> {i.price} </td>
                               </tr>
                           )
                       })
                   }
               </tbody>
           </table><br/><br/>




    {/* Class Components thi data(value) display */}
      {/* 1. simple element string */}

        <div>{this.demo}</div>

      {/* 2. Object */}

        <div>{this.obj.name} , {this.obj.email}</div>

      {/* 3. Array */}
        {/* -multiple object */}

        <div>
            {
                this.arr1.map((i)=>{
                    return <div>{i.id + "."} / {i.name} / {i.email}</div>
                })
            }
        </div>

        {/* -element string */}

        <div>{this.arr2}</div>



        
      </div>
    );
  }
}

export default Product_ClassComponents;

