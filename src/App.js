import logo from './logo.svg';
import './App.css';

 // 16-02-23/ Thursday
    // -Map and Key
    // -Filter and reduce

    // Using this day(-filter / -includes / -reduce)

function App() {

 // 1- Filter 

    // const list= [
    //     {
    //         id : "2303",
    //         name : "Mouse",
    //         description : "Mouse is computer fast work.",
    //         quantity : 2,
    //         price : 600,
    //     },
    //     { id : "2153", name : "Vefar", description : "Poteto Vefar balaji fever.", quantity : 5, price : 20, },
    //     { id : "5623", name : "volyboll", description : "volyboll is smart ball.", quantity : 10, price : 700, },
    //     { id : "7856", name : "Keyboard", description : "Key-board is tying process.", quantity : 10, price : 750, },
    //     { id : "9564", name : "Vadapav", description : "Vadapav enjoy watching time movie.", quantity : 25, price : 100, },
    //     { id : "0125", name : "Protocol", description : "Key-board protocol blue color.", quantity : 16, price : 200, },
    //     { id : "9658", name : "Pendrive", description : "32GB Pendrive 1peice.", quantity : 8, price : 530, },
    // ];

    // console.log("List++", list);




 // 2- includes

    // const list= [
    //     {
    //         id : "2303",
    //         name : "Mouse",
    //         description : "Mouse is computer fast work.",
    //         quantity : 2,
    //         price : 600,
    //     },
    //     { id : "2153", name : "Vefar", description : "Poteto Vefar balaji fever.", quantity : 5, price : 20, },
    //     { id : "5623", name : "volyboll", description : "volyboll is smart ball.", quantity : 10, price : 700, },
    //     { id : "7856", name : "Keyboard", description : "Key-board is tying process.", quantity : 10, price : 750, },
    //     { id : "9564", name : "Vadapav", description : "Vadapav enjoy watching time movie.", quantity : 25, price : 100, },
    //     { id : "0125", name : "Protocol", description : "Key-board protocol blue color.", quantity : 16, price : 200, },
    //     { id : "9658", name : "Pendrive", description : "32GB Pendrive 1peice.", quantity : 8, price : 530, },
    // ];

    // console.log("List++", list);




 // 3- reduce

  // method-1 (simple reduce)

    // const list= [
    //     {
    //         id : "2303",
    //         name : "Mouse",
    //         description : "Mouse is computer fast work.",
    //         quantity : 2,
    //         price : 600,
    //     },
    //     { id : "2153", name : "Vefar", description : "Poteto Vefar balaji fever.", quantity : 5, price : 20, },
    //     { id : "5623", name : "volyboll", description : "volyboll is smart ball.", quantity : 10, price : 700, },
    //     { id : "7856", name : "Keyboard", description : "Key-board is tying process.", quantity : 10, price : 750, },
    //     { id : "9564", name : "Vadapav", description : "Vadapav enjoy watching time movie.", quantity : 25, price : 100, },
    //     { id : "0125", name : "Protocol", description : "Key-board protocol blue color.", quantity : 16, price : 200, },
    //     { id : "9658", name : "Pendrive", description : "32GB Pendrive 1peice.", quantity : 8, price : 530, },
    // ];

    // console.log("List++", list);

    // const totalquantity= list.reduce((acc,curr)=>{
    //     return acc + curr.quantity
    // },0)

    // const totalprice= list.reduce((acc,curr)=>{
    //     return acc + curr.price
    // },0)

    // const total= list.reduce((acc,curr)=>{
    //     return acc + curr.quantity * curr.price
    // },0)



  // method-2 (filter & reduce mix)

    // const list= [
    //     {
    //         id : "2303",
    //         name : "Mouse",
    //         description : "Mouse is computer fast work.",
    //         quantity : 2,
    //         price : 600,
    //     },
    //     { id : "2153", name : "Vefar", description : "Poteto Vefar balaji fever.", quantity : 5, price : 20, },
    //     { id : "5623", name : "volyboll", description : "volyboll is smart ball.", quantity : 10, price : 700, },
    //     { id : "7856", name : "Keyboard", description : "Key-board is tying process.", quantity : 10, price : 750, },
    //     { id : "9564", name : "Vadapav", description : "Vadapav enjoy watching time movie.", quantity : 25, price : 100, },
    //     { id : "0125", name : "Protocol", description : "Key-board protocol blue color.", quantity : 16, price : 200, },
    //     { id : "9658", name : "Pendrive", description : "32GB Pendrive 1peice.", quantity : 8, price : 530, },
    // ];

    // console.log("List++", list);

    // const a= list.filter((i)=> i.quantity > 3)    //(method 1 - qty)
    // // const a= list.filter((i)=> i.quantity > 3 && i.quantity < 20)    //(method 2 - qty)
    // // const a= list.filter((i)=> i.price > 500)    //(method 3 - price)
    // // const a= list.filter((i)=> i.price >= 50 && i.price <= 600)    //(method 4 - price)

    // const totalquantity= a.reduce((acc,curr)=>{
    //     return acc + curr.quantity
    // },0)

    // const totalprice= a.reduce((acc,curr)=>{
    //     return acc + curr.price
    // },0)

    // const total= a.reduce((acc,curr)=>{
    //     return acc + curr.quantity * curr.price
    // },0)




  return (
    <div className="App">

    {/* 1. Filter */}

         {/* <h2>Product List</h2>
 
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
                     list.filter((i)=> i.quantity > 3).map((i,index)=>{    //(method 1 - qty)
                     // list.filter((i)=> i.quantity > 3 && i.quantity < 20).map((i,index)=>{    //(method 2 - qty)
                     // list.filter((i)=> i.price > 500).map((i,index)=>{    //(method 3 - price)
                     // list.filter((i)=> i.price >= 50 && i.price <= 600).map((i,index)=>{    //(method 4 - price)
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
         </table> */}




    {/* 2. includes */}

         {/* <h2>Product List</h2>
 
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
                     list.filter((i)=> i.id.includes('9')).map((i,index)=>{    //(method 1 - id)
                     // list.filter((i)=> i.name.includes('P')).map((i,index)=>{    //(method 2 - name)
                     // list.filter((i)=> i.description.includes('32')).map((i,index)=>{    //(method 3 - description)
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
         </table> */}




    {/* 3. reduce */}

       {/* method-1 (simple reduce) */}

         {/* <h2>Product List</h2>
 
         <table>
             <thead>
                 <tr>
                     <td>Sr no.</td>
                     <td>Id</td>
                     <td>Product Name</td>
                     <td>Description</td>
                     <td>Quantity</td>
                     <td>Price</td>
                     <td>Total</td>
                 </tr>
             </thead>
             <tbody>
                 {
                     list.map((i,index)=>{    
                         return(
                             <tr>
                                 <td> <b>{index + 1+"."}</b> </td>
                                 <td> {i.id} </td>
                                 <td> {i.name} </td>
                                 <td> {i.description} </td>
                                 <td> {i.quantity} </td>
                                 <td> {i.price} </td>
                                 <td> <b>{i.quantity * i.price}</b> </td>
                             </tr>
                         )
                     })
                 }
                 <tr>
                    <td colSpan={2}> <b>Total</b> </td>
                    <td> <b>-</b> </td>
                    <td> <b>-</b> </td>
                    <td> <b>{totalquantity}</b> </td>
                    <td> <b>{totalprice}</b> </td>
                    <td> <b>{total}</b> </td>
                 </tr>
             </tbody>
         </table> */}



       {/* method-2 (filter & reduce mix) */}

         {/* <h2>Product List</h2>
 
         <table>
             <thead>
                 <tr>
                     <td>Sr no.</td>
                     <td>Id</td>
                     <td>Product Name</td>
                     <td>Description</td>
                     <td>Quantity</td>
                     <td>Price</td>
                     <td>Total</td>
                 </tr>
             </thead>
             <tbody>
                 {
                     list.filter((i)=> i.quantity > 3).map((i,index)=>{    //(method 1 - qty)   
                     // list.filter((i)=> i.quantity > 3 && i.quantity < 20).map((i,index)=>{    //(method 2 - qty)  
                     // list.filter((i)=> i.price > 500).map((i,index)=>{    //(method 3 - price) 
                     // list.filter((i)=> i.price >= 50 && i.price <= 600).map((i,index)=>{    //(method 4 - price) 
                         return(
                             <tr>
                                 <td> <b>{index + 1+"."}</b> </td>
                                 <td> {i.id} </td>
                                 <td> {i.name} </td>
                                 <td> {i.description} </td>
                                 <td> {i.quantity} </td>
                                 <td> {i.price} </td>
                                 <td> <b>{i.quantity * i.price}</b> </td>
                             </tr>
                         )
                     })
                 }
                 <tr>
                    <td colSpan={2}> <b>Total</b> </td>
                    <td> <b>-</b> </td>
                    <td> <b>-</b> </td>
                    <td> <b>{totalquantity}</b> </td>
                    <td> <b>{totalprice}</b> </td>
                    <td> <b>{total}</b> </td>
                 </tr>
             </tbody>
         </table> */}


         
    </div>
  );
}

export default App;
