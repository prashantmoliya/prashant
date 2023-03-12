import React from 'react'

const Product = (props) => {

    console.log("Product(Props)++", props);


    const product= [
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

    console.log("Product++", product);


    

  return (
    <div className="App">

        <h1><u>Function Component</u></h1>

    {/* step-1 single element string */}

        <div>{props.Element}</div>

    {/* step-2 single Object */}
    
        <div>
           {props.Object.name}, 
           {props.Object.email}
        </div>

    {/* step-3 Array and multiple Object */}

      {/* -simple */}   

        <div>
            {
                props.Array1.map((i)=>{
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
                    props.Array1.map((i)=>{
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

        <div>{props.Array2}</div>



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
                     product.map((i,index)=>{
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
         </table> 
      
    </div>
  );
}

export default Product;
