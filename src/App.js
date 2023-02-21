import logo from './logo.svg';
import './App.css';

 // 15-02-23/ Wednesday
    // -Array and Object Intro
    // -Available Methods

function App() {

 // 1- table (employee list student / map (-simple function))

    // const list= [
    //     {
    //         id : "2301",
    //         name : "Nayan",
    //         mobile : "9987563250",
    //         higher_secondary : "true",
    //         degree : "true",
    //         color : "blue",
    //     },
    //     {
    //         id : "2302",
    //         name : "Om",
    //         mobile : "8000753080",
    //         higher_secondary : "false",
    //         degree : "false",
    //         color : "black",
    //     },
    //     {
    //         id : "2303",
    //         name : "Prashant",
    //         mobile : "7984385230",
    //         higher_secondary : "true",
    //         degree : "true",
    //         color : "red",
    //     },
    //     {
    //         id : "2304",
    //         name : "Radhe",
    //         mobile : "8568563285",
    //         higher_secondary : "false",
    //         degree : "true",
    //         color : "blue",
    //     },
    //     {
    //         id : "2305",
    //         name : "Dhruv",
    //         mobile : "9722552187",
    //         higher_secondary : "true",
    //         degree : "false",
    //         color : "white",
    //     },
    // ];

    // console.log("List++", list);




 // 2- table (higher_secondary & degree object (1), color Array (2))

  // method-1 (higher_secondary & degree object (-if-else condition)) 

    // const list= [
    //     { 
    //         id : "1132", 
    //         name : "Mehul",
    //         mobile : "9978562356",
    //         study : {
    //             higher_secondary : false,
    //             degree : true,
    //         },
    //         color : "red",
    //     },
    //     { id : "2391", name : "Rahul", mobile : "895632147", study : { higher_secondary : true, degree : false, }, color : "blue", },
    //     { id : "3545", name : "Lokesh", mobile : "9512476375", study : { higher_secondary : true, degree : true, }, color : "red", },
    //     { id : "9879", name : "Karan", mobile : "8756321492", study : { higher_secondary : false, degree : true, }, color : "black", },
    //     { id : "6577", name : "Raj", mobile : "9163254785", study : { higher_secondary : true, degree : true, }, color : "red", },
    //     { id : "4353", name : "Naman", mobile : "9045678325", study : { higher_secondary : false, degree : false, }, color : "red", },
    // ];

    // console.log("List++", list);



  // method-2 (color Array (-map / if-else condition)) 

    // const list= [
    //     { 
    //         id : "1132", 
    //         name : "Mehul",
    //         mobile : "9978562356",
    //         higher_secondary : "No",
    //         degree : "Yes",
    //         color : [
    //             {
    //                 red : true,
    //                 blue : true,
    //                 black : true,   
    //                 white : true
    //             }
    //         ],
    //     },
    //     { id : "2391", name : "Rahul", mobile : "895632147", higher_secondary : "Yes", degree : "No", color : [{ red : false, blue : true, black : true, white : true }], },
    //     { id : "3545", name : "Lokesh", mobile : "9512476375", higher_secondary : "Yes", degree : "Yes", color : [{ red : true, blue : false, black : true, white : true }], },
    //     { id : "9879", name : "Karan", mobile : "8756321492", higher_secondary : "No", degree : "Yes", color : [{ red : true, blue : true, black : false, white : false }], },
    //     { id : "6577", name : "Raj", mobile : "9163254785", higher_secondary : "Yes", degree : "Yes", color : [{ red : false, blue : true, black : true, white : true }], },
    //     { id : "4353", name : "Naman", mobile : "9045678325", higher_secondary : "No", degree : "No", color : [{ red : false, blue : false, black : true, white : true }], },
    // ];

    // console.log("List++", list);




 // 3- table (higher_secondary & degree object // color Array (-if-else condition // -map / if-else condition)) 

    // const list= [
    //     {
    //         id : "2309",
    //         name : "naman",
    //         mobile : "896523147",
    //         study : {
    //             higher_secondary : true,
    //             degree : false,
    //         },
    //         color : [
    //             {
    //                 red : true,
    //                 blue : true,
    //                 black : true,
    //                 white : true
    //             }
    //         ],
    //     },
    //     { id : "5896", name : "manan", mobile : "785412369", study : { higher_secondary : true , degree : true, }, color : [{ red : false, blue : true, black : true, white : true }], },
    //     { id : "2335", name : "naimish", mobile : "658932147", study : { higher_secondary : false , degree : false, }, color : [{ red : true, blue : false, black : true, white : true }], },
    //     { id : "5645", name : "kavan", mobile : "963258741", study : { higher_secondary : false , degree : true, }, color : [{ red : true, blue : true, black : false, white : true }], },
    //     { id : "2314", name : "karan", mobile : "951235478", study : { higher_secondary : true , degree : false, }, color : [{ red : false, blue : false, black : true, white : true }], },
    //     { id : "8976", name : "raj", mobile : "874569321", study : { higher_secondary : false , degree : true, }, color : [{ red : false, blue : true, black : true, white : true }], },
    // ];

    // console.log("List++", list);


       

  return (
    <div className="App">

    {/* 1. table (employee list student / map (-simple function)) */}

         {/* <h2>Employee List Student </h2>

         <table>
            <thead>
                <tr>
                    <td> <b>Sr no.</b> </td>
                    <td> <b>Id</b> </td>
                    <td> <b>Full Name</b> </td>
                    <td> <b>Mobile Number</b> </td>
                    <td> <b>Higher Secondary</b> </td>
                    <td> <b>Graduation</b> </td>
                    <td> <b>Color</b> </td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i,index)=>{
                        return(
                            <tr>
                                <td> {index + 1+"."} </td>
                                <td> {i.id} </td>
                                <td> {i.name} </td>
                                <td> {i.mobile} </td>
                                <td> {i.higher_secondary} </td>
                                <td> {i.degree} </td>
                                <td> {i.color} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
         </table> */}




    {/* 2. table (higher_secondary & degree object (1), color Array (2)) */}

       {/* method-1 (higher_secondary & degree object (-if-else condition)) */}

         {/* <h2>Employee List Student</h2>

         <table>
            <thead>
                <tr>
                    <td> <b>Sr no.</b> </td>
                    <td> <b>Id</b> </td>
                    <td> <b>Full Name</b> </td>
                    <td> <b>Mobile Number</b> </td>
                    <td> <b>Higher Secondary</b> </td>
                    <td> <b>Graduation</b> </td>
                    <td> <b>Color</b> </td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i,index)=>{
                        return(
                            <tr>
                                <td> {index + 1+"."} </td>
                                <td> {i.id} </td>
                                <td> {i.name} </td>
                                <td> {i.mobile} </td>
                                <td> {i?.study?.higher_secondary === true ? 'Yes' : 'No'} </td>
                                <td> {i?.study?.degree === false ? 'No' : 'Yes'} </td>
                                <td> {i.color} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
         </table> */}
         


       {/* method-2 (color Array (-map / if-else condition)) */}

         {/* <h2>Employee List Student</h2>

         <table>
            <thead>
                <tr>
                    <td> <b>Sr no.</b> </td>
                    <td> <b>Id</b> </td>
                    <td> <b>Full Name</b> </td>
                    <td> <b>Mobile Number</b> </td>
                    <td> <b>Higher Secondary</b> </td>
                    <td> <b>Graduation</b> </td>
                    <td> <b>Color</b> </td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i,index)=>{
                        return(
                            <tr>
                                <td> {index + 1+"."} </td>
                                <td> {i.id} </td>
                                <td> {i.name} </td>
                                <td> {i.mobile} </td>
                                <td> {i.higher_secondary} </td>
                                <td> {i.degree} </td>
                                <td> 
                                    {i?.color.map((c)=> <span>{ c.red === true ? 'red , ' : ''}</span>)}
                                    {i?.color.map((c)=> <span>{ c.blue === true ? 'blue , ' : ''}</span>)}
                                    {i?.color.map((c)=> <span>{ c.black === true ? 'black , ' : ''}</span>)}
                                    {i?.color.map((c)=> <span>{ c.white === true ? 'white' : ''}</span>)}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
         </table> */}




    {/* 3. table (higher_secondary & degree object // color Array (-if-else condition // -map / if-else condition)) */}


         {/* <h2>Employee List Student</h2>

         <table>
            <thead>
                <tr>
                    <td>Sr no.</td>
                    <td>Id</td>
                    <td>Full Name</td>
                    <td>Mobile Number</td>
                    <td>Higher Secondary</td>
                    <td>Graduation</td>
                    <td>Color</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i,index)=>{
                        return(
                            <tr>
                                <td> {index + 1+"."} </td>
                                <td> {i.id} </td>
                                <td> {i.name} </td>
                                <td> {i.mobile} </td>
                                <td> {i?.study?.higher_secondary === true ? 'Yes' : 'No'} </td>
                                <td> {i?.study?.degree === false ? 'No' : 'Yes'} </td>
                                <td> 
                                    {i?.color?.map((c)=> <span>{ c.red === true ? 'red , ' : ''}</span>)} 
                                    {i?.color?.map((c)=> <span>{ c.blue === true ? 'blue , ' : ''}</span>)} 
                                    {i?.color?.map((c)=> <span>{ c.black === true ? 'black , ' : ''}</span>)} 
                                    {i?.color?.map((c)=> <span>{ c.white === true ? 'white' : ''}</span>)} 
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
         </table> */}



    </div>
  );
}

export default App;
