import logo from './logo.svg';
import './App.css';
import Header from './Header.js';    // 3- Rendering Elements (new file)

  // 20-02-23/ Monday
    // -Understand directory structure
    // -Introduction of jsx
    // -Rendering Elements

function App() {

 // 1- Understand directory structure (Thiyri)

    // -import / export different (Imp) (All file ma use kevi thay and new file ma kai rite karvo.)




 // 2- Introduction of jsx (Thiyri)

    // (Full Form) JSX :- Javascript XML 
    
    // -index.html / index.js (bey file ma javascript ni id (root) kevi rite work kare ae explain / index.html ma id (root) aeno datatype index.js ni file ma meaning ae process backend thay. browswer page ma inspect kri html no code batavse but datatype nai batave.(backend process))




 // 3- Rendering Elements (new file)
 
    // -new file create kri tyare link kevi rite karavi (2 js ni file App.js/(Header.js (new file)) ek ma use kevi rite karvi / meaning code alag-alag file ma header no header.js ma footer no footer.js ma. browser ma show App.js thi j thay. all file nu code App.js ma kai rite levu.)

    // -new file create kri tyare pela vs-code ma (Extensions) jai (ES7 All install) karva

    // -new file create after
        // -ES7 All install
        // -Search :- (rafc / rcc)
                     // -function components
                     // -class components

    // -(App.js) :-

        // import Header from './Header.js';

        // <Header /> (return ni niche pela / element name import ma rakhi aej rakhvanu)



        
  return (
    <div className="App">    

    {/* 1. Understand directory structure */}

         {/* -Thiyri */} 
                      


    {/* 2. Introduction of jsx */}

         {/* -Thiyri */} 



    {/* 3. Rendering Elements */}

         {/* -new file (Header.js) */} 
         
         <Header />



    </div>
  );
}

export default App;
