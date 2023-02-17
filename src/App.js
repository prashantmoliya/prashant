import logo from './logo.svg';
import './App.css';

 // 14-02-23/ Tuesday 
    // -Arrays
    // -Classes

function App() {

 // 0- Syntax (classes) :-

      // class demo{
      //     constructor(.. , ..)  // perameter
      //     {
      //         // ..............  // perameter
      //         // ..............  // perameter
      //     }
      // }

    //   const s= new demo(".." , ",,");  // object
    //   const s1= new demo(".." , ",,");  // object (Array of object)



 // 1- step-1 (simple object)
  
    // const obj= {
    //     name : "mehul",
    //     age : "23",
    // }

    // class demo{
    //     constructor(name,age)
    //     {
    //         this.name= name;
    //         this.age= age;       
    //     }
    // }



 // 2- step-2 (simple object (1,3), new object (2,4), Array of object (5))
 
  // method-1 (simple object)

    // const p= {
    //     name : "Gopal",
    //     age : "23",
    // }

    // class demo{
    //     constructor(name,age)
    //     {
    //         this.name= name;
    //         this.age= age;
    //     }
    // }


  // method-2 (new object)

    // class demo{
    //     constructor(name,age)
    //     {
    //         this.name= name;
    //         this.age= age;
    //     }
    // }

    // const p= new demo("Mehul","29")


  // method-3 (simple object)

    // const c= {
    //     name : "BMW",
    //     company : "car-volty",
    //     model : "bm-7",
    //     color : "red",
    // }

    // class car{
    //     constructor(name,company,model,color)
    //     {
    //         this.name= name;
    //         this.company= company;
    //         this.model= model;
    //         this.color= color;
    //     }
    // }
    

  // method-4 (new object)

    // class car{
    //     constructor(name,company,model,color)
    //     {
    //         this.name= name;
    //         this.company= company;   
    //         this.model= model;
    //         this.color= color;
    //     }
    // }

    // const c= new car("Audi","audi-shop","ad-20","black");


  // method-5 (Array of object)

    // class bike{
    //     constructor(name,company,price)
    //     {
    //         this.name= name;
    //         this.company= company;
    //         this.price= price;
    //     }
    // }

    // const b= new bike("Shine","Honda","Rs. 1,10,000");
    // const b2= new bike("Splendar plus+","Hero","Rs. 78,000");



 // 3- step-3 (table-list student / map)

    // const list= [
    //     {
    //         id : "2303",
    //         name : "prashant",
    //         age : "17",
    //     },
    //     {
    //         id : "2304",
    //         name : "radhe",
    //         age : "18",
    //     },
    //     {
    //         id : "8975",
    //         name : "prashant",
    //         age : "17",
    //     },
    //     {
    //         id : "6782",
    //         name : "krishna",
    //         age : "19",
    //     },
    //     {
    //         id : "6757",
    //         name : "rahul",
    //         age : "18",
    //     },
    // ];

    // console.log("List++", list);







  return (
    <div className="App">

    {/* 1. step-1 (simple object) */}

         {/* demo Name : <b>{obj.name}</b> <br/>
         demo Age : <b>{obj.age}</b>  */}



    {/* 2. step-2 (simple object (1,3), new object (2,4), Array of object (5)) */}

       {/* method-1 (simple object) */}

         {/* <h3>Student</h3>

         <div> Name :- {p.name}</div>
         <div> Age :- {p.age}</div> */}


       {/* method-2 (new object) */}

         {/* <h3>Student</h3>

         <div> Name :- {p.name}</div>
         <div> Age :- {p.age}</div> */}


       {/* method-3 (simple object) */}

         {/* <h3>Car</h3>

         <div> Name :- {c.name} </div>
         <div> Company :- {c.company} </div>
         <div> Model :- {c.model} </div>
         <div> Color :- {c.color} </div> */}


       {/* method-4 (new object) */}

         {/* <h3>Car</h3>

         <div> Name :- {c.name}</div>
         <div> Company :- {c.company}</div>
         <div> Model :- {c.model}</div>
         <div> Color :- {c.color}</div> */}


       {/* method-5 (Array of object) */}

         {/* <h3>Bike</h3>

         <div> Name :- {b.name} </div>
         <div> Company :- {b.company} </div>
         <div> Price :- {b.price} </div>

                <br/>

         <div> Name :- {b2.name} </div>
         <div> Company :- {b2.company} </div>
         <div> Price :- {b2.price} </div> */}



    {/* 3. step-3 (table-List student / map) */}

         {/* <h3>List Student</h3>

         <table border={1}>
            <thead>
                <tr>
                    <td> <b>Id</b> </td>
                    <td> <b>Name</b> </td>
                    <td> <b>Age</b> </td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i) => {
                        return(
                            <tr>
                                <td> {i.id} </td>
                                <td> {i.name} </td>
                                <td> {i.age} </td>
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
