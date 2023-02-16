import logo from './logo.svg';
import './App.css';

 // 13-02-23/ Monday 
    // -ES6 let and const
    // -ES6 Arrow function

function App() {

 // Arrays Method
    // 1. length
    // 2. sort()
    // 3. concat()
    // 4. reverse()
    // 5. pop()
    // 6. push()
    // 7. shift()
    // 8. unshift()
    // 9. indexOf()
    // 10. toString()
    // 11. slice()
    // 12. splice()
    // 13. map()
    // 14. foreach()
    // 15. filter()


  // 1-length :-

    // var arr= ["10","15","20","25","30","35","40","45","50"];
    // var len= arr.length;

    // console.log(len);


  // 2-sort :-

    // let arr= ["40","35","25","10","30","50","20","45","15"];
    // let sort= arr.sort();
    // let join= arr.join("-");

    // console.log(sort);


  // 3-concat :-

    // const arr1= ["React js is a "];
    // const arr2= ["javascript library."];
    // const con= arr1.concat(arr2);


  // 4-reverse :-

    // const arr= ["React js","Javascript","JQuery","Bootstrap","Css","Html"];
    // let rev= arr.reverse();
    // var join= arr.join("-");
    
    // console.log(rev);


  // 5-pop :-

    // let arr= ["10","15","20","25","30","35","40","45","50"];
    // let pop= arr.pop();

    // console.log(pop);


  // 6-push :-

    // let arr= ["10","15","20","25","30","35","40","45","50"];
    // let push= arr.push("55");

    // console.log(push);


  // 7-shift :-

    // const arr= ["10","15","20","25","30","35","40","45","50"];
    // const shift= arr.shift(); 

    // console.log(shift);


  // 8-unshift :-

    // const arr= ["10","15","20","25","30","35","40","45","50"];
    // const un= arr.unshift("5");

    // console.log(un);

    
  // 9-indexOf :-

    // let arr= ["Php", "Node", "Javascript","Reactjs","Flutter"];
    // let inx= arr.indexOf("Reactjs");

    // console.log(inx);


  // 10-toString :-

    // const arr= ["Php", "Node", "Javascript","Reactjs","Flutter"];
    // const str= arr.toString();

    // console.log(str);


  // 11-slice :-

    // let arr= ["Php", "Node", "Javascript","Reactjs","Flutter"];
    // let slc= arr.slice(2);
    // let join= slc.join("-");

    // console.log(slc);


  // 13-map :-

    // const arr= [10,15,20,25,30,35,40,45,50];
    // const arr= [1,2,3,4,5,6,7,8,9,10];    // multipication / 6 table print 


  // 15-filter :- (condition vali multiple value)

    // const arr= [10,15,20,25,30,35,40,45,50];
    // const arr= [1,2,3,4,5,6,7,8,9,10];    // multipication / 6 table print / Even-Odd number
    

    console.log("Array++",arr); 


  return (
    <div className="App">

      {/* 1. length :- */}
        {/* <div> <b>Length :-</b> {len}</div> */}


      {/* 2. sort :- */}
        {/* <div> <b>Sort :-</b> {sort}</div> */}
        {/* <div> <b>Sort / join :-</b> {sort,join}</div> */}


      {/* 3. concat :-  */}
        {/* <div> <b>Concat :-</b> {con}</div> */}


      {/* 4. reverse :-  */}
        {/* <div> <b>Reverse :-</b> {rev}</div> */}
        {/* <div> <b>Reverse / join :-</b> {rev,join}</div> */}


      {/* 5. pop :-  */}
        {/* <div> <b>Pop :-</b> {pop}</div> */}


      {/* 6. push :-  */}
        {/* <div> <b>Push :-</b> {push}</div> */}


      {/* 7. shift :-  */}
        {/* <div> <b>Shift :-</b> {shift}</div> */}


      {/* 8. unshift :-  */}
        {/* <div> <b>Unshift :-</b> {un}</div> */}


      {/* 9. indexOf :-  */}
        {/* <div> <b>Index of :-</b> {inx}</div> */}


      {/* 10. toString :-  */}
        {/* <div> <b>Array to String Convert :-</b> {str}</div> */}


      {/* 11. slice :-  */}
        {/* <div> <b>Slice :-</b> {slc}</div>
        <div> <b>Slice / join :-</b> {slc,join}</div> */}


      {/* 13. map :-  */}
        {/* <div> 
            <b>Map :-</b>
            {
                arr.map((i)=>{
                    // return <div> {i} </div>
                    // return <div> {i * 2} </div>   // multipication 
                    // return <div> {i * 6} </div>   // 6-table print  
                })
            }
        </div> */}


      {/* 15. filter :-  */}
        {/* <div> 
            <b>Filter :-</b>
            {
                arr.filter((i)=> i>20).map((i)=>{
                    // return <div> {i} </div>
                    // return <div> {i * 2} </div>   // multipication (i>0)
                    // return <div> {i * 6} </div>   // 6-table print (i>0) 
                    // return <div> {i} </div>    // Even number (i>0 && i%2==0)
                    // return <div> {i} </div>    // Odd number (i>0 && i%2==1)
                })
            }
        </div> */}

    

    </div>
  );
}

export default App;
