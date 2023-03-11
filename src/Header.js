import React from 'react'

const Header = (props) => {

    console.log("Header(Props)++", props);




  return (
    <div className="App">

    {/* step-1 single element string */}

        <div>{props.Element}</div>

    {/* step-2 Array and multiple Object */}

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
        
    

        <nav>
            <div className='logo'>React</div>

            <ul>
                <li>Home</li>
                <li>React js</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </nav>
      
    </div>
  );
}

export default Header;
