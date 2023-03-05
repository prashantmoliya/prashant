import logo from './logo.svg';
import './App.css';

  // 17-02-23/ Friday
    // -Merging
    // -Spreading
    // -destructuring

function App() {

 // 1- Merging (total 1-step)

  // method-1 (two Array object join)

    // const cart= [
    //   { id : "1234", name : "mehul", cart : "pen", qty : 2, price : 10, },
    //   { id : "2356", name : "raj", cart : "pencil", qty : 4, price : 5, },
    //   { id : "2356", name : "nikil", cart : "rabar", qty : 1, price : 5, },
    // ];

    // const cart2= [
    //   { id : "1234", name : "om", cart : "stel", qty : 3, price : 10, },
    //   { id : "2356", name : "naman", cart : "pencil", qty : 4, price : 5, },
    //   { id : "2356", name : "jay", cart : "sancho", qty : 2, price : 5, },
    // ];

    // const MergeArray= cart.concat(cart2);    // step-3 (variable thi merge)

    // console.log("Cart++", cart,cart2);    // step-1 (simple) 
    // console.log("Cart++", cart.concat(cart2));    // step-2 (merge)
    // console.log("Cart++", MergeArray);    // step-3 (variable thi merge)


  // method-2 (two Array element join)
  
    // const fruits= ["f1","f2","f3"];
    // const fruits2= ["f4","f5","f6"];

    // const MergeArray= fruits.concat(fruits2);    // step-3 (variable thi merge)
    
    // console.log("Fruits++", fruits,fruits2);    // step-1 (simple)
    // console.log("Fruits++", fruits.concat(fruits2));    // step-2 (merge)
    // console.log("Fruits++", MergeArray);    // step-3 (variable thi merge)


  // method-3 (three Array element join)

    // const fruits= ["f1","f2","f3"];
    // const fruits2= ["f4","f5","f6"];
    // const fruits3= ["f7","f8","f9"];

    // const MergeArray= fruits.concat(fruits2).concat(fruits3);    // step-3 (variable thi merge)

    // console.log("Fruits++", fruits,fruits2,fruits3);    // step-1 (simple)
    // console.log("Fruits++", fruits.concat(fruits2).concat(fruits3));    // step-2 (merge)
    // console.log("Fruits++", MergeArray);    // step-3 (variable thi merge)




 // 2- Spreading (total 2-step)

  // method-1 (1- Array chuto kre, 2- Array object join)

    // const cart= [
    //   { id : "1234", name : "mehul", cart : "pen", qty : 2, price : 10, },
    //   { id : "2356", name : "raj", cart : "pencil", qty : 4, price : 5, },
    //   { id : "2356", name : "nikil", cart : "rabar", qty : 1, price : 5, },
    // ];

    // const cart2= [
    //   { id : "1234", name : "om", cart : "stel", qty : 3, price : 10, },
    //   { id : "2356", name : "naman", cart : "pencil", qty : 4, price : 5, },
    //   { id : "2356", name : "jay", cart : "sancho", qty : 2, price : 5, },
    // ];

    // const SpreadArray= [...cart,...cart2];    // step-4 (variable thi spread Array ma / sem-merge)

    // console.log("Cart++ 1", cart,cart2);    // step-1 (simple)
    // console.log("Cart++ 2", cart.concat(cart2));    // step-2 (merge)
    // console.log("Cart++ 3", ...cart,...cart2);    // step-3 (spread)
    // console.log("Cart++ 4", SpreadArray);    // step-4 (variable thi spread Array ma / sem-merge)


  // method-2 (1- Array chuto kre, 2- Array element join)

    // const fruits= ["f1","f2","f3"];
    // const fruits2= ["f4","f5","f6"];

    // const SpreadArray= [...fruits,...fruits2];    // step-4 (variable thi spread Array ma / sem-merge)

    // console.log("Fruits++ 1", fruits,fruits2);    // step-1 (simple)
    // console.log("Fruits++ 2", fruits.concat(fruits2));    // step-2 (merge)
    // console.log("Fruits++ 3", ...fruits,...fruits2);    // step-3 (spread)
    // console.log("Fruits++ 4", SpreadArray);    // step-4 (variable thi spread Array ma / sem-merge)


  // method-3 (1- Array chuto kre, 2- Array element join)

    // const fruits= ["f1","f2","f3"];
    // const fruits2= ["f4","f5","f6"];
    // const fruits3= ["f7","f8","f9"];

    // const SpreadArray= [...fruits,...fruits2,...fruits3];    // step-4 (variable thi spread Array ma / sem-merge)

    // console.log("Fruits++ 1", fruits,fruits2,fruits3);    // step-1 (simple)
    // console.log("Fruits++ 2", fruits.concat(fruits2).concat(fruits3));    // step-2 (merge)
    // console.log("Fruits++ 3", ...fruits,...fruits2,...fruits3);    // step-3 (spread)
    // console.log("Fruits++ 4", SpreadArray);    // step-4 (variable thi spread Array ma / sem-merge)




 // 3- destructuring (total 2-step)

  // method-1 (Array chuto kre)

    // const fruits= ['f1','f2','f3'];    // 1 
    // const [fruits1,fruits2]= ['f1','f2','f3'];    // 2
    //     // const [test1,test2]= ['f1','f2','f3'];    // 2
    // const [fruits1,fruits2,fruits3]= ['f1','f2','f3'];    // 3 
    // const [fruits1,fruits2,fruits3,fruits4]= ['f1','f2','f3'];    // 4  


    // console.log("Fruits++ 1", fruits);    // step-1 (simple)
    // console.log("Fruits++ 2", fruits1, fruits2);    // step-2 (two variable - length 3)
    //     // console.log("Fruits++ 2", test1, test2);    // step-2 (variable name koi pan chale)
    // console.log("Fruits++ 3", fruits1, fruits2,fruits3);    // step-3 (three variable - length 3)
    // console.log("Fruits++ 4", fruits1, fruits2, fruits3, fruits4);    // step-4 (four variable - length 3 (last variable ni value undefine--tema 4-length nthi aetle undefine))


  // method-2 (Object chuto kre)

    // const person= {    // step-1 (simple)
    //     name : "naman",
    //     age : 23,
    // }

    // const {name,age}= {    // step-2 (destructure / Object chuto kre)
    //   name : "raj",
    //   age : 20,
    // } 

    // console.log("Person++ 1", person);    // step-1 (simple)
    // console.log("Person++ 2", name, age);    // step-2 (destructure / Object chuto kre)
    // console.log("Person++ 3 ", {name, age});    // step-3 (destructure / Object ma (Key & value sathe)) 
    // console.log("Person++ 4", [name, age]);    // step-4 (destructure / Array ma (element string ma))
    // console.log("Person++ 5", [{name, age}]);    // step-5 (destructure / Array and Object ma)




  return (
    <div className="App">

    {/* 1. Merging */}
         
         {/* Syntax :- */}
                      {/* a.concat(b) */}

         {/* -total 1-step */}
                      {/* a.concat(b) (Array object/element join) */}
                      


    {/* 2. Spreading */}

         {/* Syntax :- */}
                      {/* ...a,...b  */}

         {/* -total 2-step */}
                      {/* ...a,...b (Array chuto kre) */}
                      {/* [...a,...b] (Array object/element join) */}



    {/* 3. destructuring */}

         {/* Syntax :- */}
                      {/* concat [x,y]= ["admin1","admin2"] */}
                      {/* concat {id,no}= { id : "om", no : 02} */}

         {/* -total 2-step */}
                      {/* concat [a1,a2]= ["admin1","admin2"] (Array chuto kre) */}
                      {/* concat {name,age}= { name : "om", age : 12} (Object chuto kre) */}





         
    </div>
  );
}

export default App;
