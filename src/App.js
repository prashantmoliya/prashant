import logo from './logo.svg';
import './App.css';
import Header from './Header';    
import Product from './Product';    
import Footer from './Footer';    

  // 22-02-23/ Wednesday
    // -State
    // -Props

function App() {

 // 1- State (Next day)

    // -Defination :-
                    // Variable ni value ne update karavse.
                    // React ma Ui ma value update karva maate "State" no use thay.




 // 2- Props 

    // (Full Form) Props :- Property

    // -Defination :-
                    // Koi aek components ma value malti hoy ane tene children components ma value joti hoy tyare "Props" no use thay.

    // -(main mathi children ma data pass karva.)



  //1- Header.js
    // step-1 single element string

        const element= "Prakash";
    
    // step-2 Array and multiple Object

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


  //2- Product.js
    // -single Object

        const object= {
            name : "Prakash",
            email : "Prakhsh@gmail.com",
        };

        
  //3- Footer.js
    // -Array and element string

        const array2= ['Instagram','Google','Facebook','WhatsApp'];


  
        
  return (
    <div className="App">    

    {/* 1. State */}

        
                     
    {/* 2. Props */}

        <Header Element={element} Array1={array1} />    {/* single element string / Array and multiple Object */}
        <Product Object={object} />    {/* single Object */}
        <Footer Array2={array2} />    {/* Array and element string */}



    </div>
  );
}

export default App;
