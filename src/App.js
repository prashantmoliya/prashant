import logo from './logo.svg';
import './App.css';
// import Header from './Header';    
import Product from './Product';    // 1- Function Components
import Product_ClassComponents from './Product_ClassComponents';    // 2- Class Components 
// import Footer from './Footer';    

  // 23-02-23/ Thursday
    // -Function Components
    // -Class Components

function App() {

 // 1- Function Components

    // -rafc
    // -(Full Form) rafc :- React Arrow Function Components 

    // -atyar sudhi all js ni file ma function components no use karta hta.




 // 2- Class Components 

    // -rcc
    // -(Full Form) rcc :- React Class Components 

    // -class components ma render() ni upar const,let,var no use thase nhi (let demo= "admin1"). tema sidhu variable name (demo= "admin1";) no use thase.
    // -(const,var,let) ne badle (this.__) method use thase. 






  // 1- / 2-  Product.js / Product_ClassComponents.js (Props thi)
    // step-1 single element string

        const element= "Prakash";

    // step-2 single Object

        const object= { 
            name : "Mehul",
            email : "Mehul@gmail.com",
        };
    
    // step-3 Array and multiple Object

        const array1= [{
            name : "Mehul",
            email : "Mehul@gmail.com",
            phone : "1234562",
        },
        {
            name : "Naman",
            email : "Naman@gmail.com",
            phone : "5632148",
        },
        {
            name : "Rahul",
            email : "Rahul@gmail.com",
            phone : "4567891",
        },{
            name : "Manan",
            email : "Manan@gmail.com",
            phone : "8589631",
        },
        ];

    // step-4 Array and element string

        const array2= ['Instagram','Google','Facebook','WhatsApp'];


  
        
  return (
    <div className="App">    

  {/* (Props thi) /*}
    {/* 1. Function Components */}

        <Product Element={element} Object={object} Array1={array1} Array2={array2} />    


    {/* 2. Class Components */}

        <Product_ClassComponents Element={element} Object={object} Array1={array1} Array2={array2} />





      
    {/* (Props) */}

        {/* <Header Element={element} Array1={array1} />    {/* single element string / Array and multiple Object */}
        {/* <Product Object={object} />    {/* single Object */}
        {/* <Footer Array2={array2} />    {/* Array and element string */}

        

    </div>
  );
}

export default App;
