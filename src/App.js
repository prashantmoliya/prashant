import logo from './logo.svg';
import './App.css';
import Header from './Header';    
import Product from './Product';    // 1- Nested Elements (new file)
import Footer from './Footer';    // 1- Nested Elements (new file)

  // 21-02-23/ Tuesday
    // -Nested Elements
    // -Attributes
    // -Comments

function App() {

 // 1- Nested Elements

    // -Defination :-
                    // In React, we can nest components inside within one another. This helps in creating more complex User Interfaces. The components that are nested inside (parent components) are called (child components). (Import and Export) keywords facilitate nesting of the components.

                    // -પ્રતિક્રિયામાં, આપણે એક બીજાની અંદર ઘટકોને માળો બનાવી શકીએ છીએ. આ વધુ જટિલ યુઝર ઇન્ટરફેસ બનાવવામાં મદદ કરે છે. ઘટકો કે જે (પિતૃ ઘટકો)ની અંદર માળખામાં હોય છે તેને (બાળ ઘટકો) કહેવામાં આવે છે. (આયાત અને નિકાસ) કીવર્ડ્સ ઘટકોના માળખાને સરળ બનાવે છે.

    // -Nested Elements javascript na nested if statement ni jem ja work kare. 
    // -Nested Elements ae parent components ni under child components banave. / child components ni under pacho child components banave. meaning App.js ae parent components and Header/Product/Footer.js ae child components and Footer.js ni under sociallink.js ae child components. (Nested Elements) 

    // Example :-
                // -Nested Elements

      // App.js (parent components)
          // Header.js (child components)
          // Product.js (child components)
          // Footer.js (child components)
              // -SocialLink.js (child components)

              


 // 2- Attributes

    // HTML ma (Attribute)
            // -onclick
            // -className
            // -Id


    // Example :-
                // -javascript no function return ni upar ja lakhvo.

    let demo = () =>{
        console.log("hii how are you");
    }




 // 3- Comments

    // - ------------------------ 



        
  return (
    <div className="App">    

    {/* 1. Nested Elements */}

        <Header />
        <Product />
        <Footer />
                      


    {/* 2. Attributes */}

        {/* -Example :- */} 

         <button onClick={demo}>Click</button>



    {/* 3. Comments */}

        {/* ------------------------ */} 




    </div>
  );
}

export default App;
