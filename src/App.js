import logo from './logo.svg';
import './App.css';

  // 20-02-23/ Monday
    // Project-1 :- circlet

function App() {

    const result=[
        {
            subject : "Science",
            total_external : 80,
            total_internal : 20,
            marks_external : 69,
            marks_internal : 14,
        },
        {
            subject : "Maths",
            total_external : 80,
            total_internal : 20,
            marks_external : 60,
            marks_internal : 12,
        },
        {
            subject : "S.S.",
            total_external : 80,
            total_internal : 20,
            marks_external : 56,
            marks_internal : 10,
        },
        {
            subject : "English",
            total_external : 80,
            total_internal : 20,
            marks_external : 65,
            marks_internal : 16,
        },
        {
            subject : "Gujarati ",
            total_external : 80,    
            total_internal : 20,
            marks_external : 70,
            marks_internal : 12,
        },
        {
            subject : "Sanskrit ",
            total_external : 80,
            total_internal : 20,
            marks_external : 75,
            marks_internal : 18,
        },
    ];

    console.log("Result++", result);

    const a= result.filter((i)=> (i.marks_external+i.marks_internal >= 33) && (i.marks_external+i.marks_internal <= 100))

    const totalexternal= a.reduce((acc,curr)=>{
        return acc + curr.total_external
    },0)

    const totalinternal= a.reduce((acc,curr)=>{
        return acc + curr.total_internal
    },0)

    const markexternal= a.reduce((acc,curr)=>{
        return acc + curr.marks_external
    },0)

    const markinternal= a.reduce((acc,curr)=>{
        return acc + curr.marks_internal
    },0)

    const total= a.reduce((acc,curr)=>{
        return acc + (curr.marks_external + curr.marks_internal)
    },0)

    const Percentage= a.reduce((acc,curr)=>{
        return acc + ((curr.marks_external +  curr.marks_internal) / 600 * 100)
    },0)




  return (
    <div className="App">

        <h1 className='a2'>Student Marksheet</h1>

        <table>
            <thead className='a1 a2'>
                <tr>
                    <td>Sr no.</td>
                    <td>Subject</td>
                    <td>
                        Total Marks
                        <tr>
                                <td className='a'>External</td>
                                <td className='a'>Internal</td>
                        </tr>
                    </td>
                    <td>
                        Marks obtained
                        <tr>
                            <td className='a'>External</td>
                            <td className='a'>Internal</td>
                        </tr>
                    </td>
                    <td>Total </td>
                </tr>
            </thead>
            <tbody>
                {
                    result.filter((i)=> (i.marks_external+i.marks_internal >= 33) && (i.marks_external+i.marks_internal <= 100)).map((i,index)=>{
                        return(
                            <tr>
                                <td> {index + 1+"."} </td>
                                <td> {i.subject} </td>
                                <td>
                                    <tr>
                                        <td className='a'> {i.total_external} </td>
                                        <td className='a'> {i.total_internal} </td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td className='a'> {i.marks_external} </td>
                                        <td className='a'> {i.marks_internal} </td>
                                    </tr>
                                </td>
                                <td > <b>{i.marks_external + i.marks_internal}</b> </td>
                            </tr>
                        )
                    })
                }
                <tr className='a1'>
                    <td className='a2' colSpan={2}> <b>Total</b> </td>
                    <td>
                        <tr>
                            <td className='a'> <b>{totalexternal}</b> </td>
                            <td className='a'> <b>{totalinternal}</b> </td>
                        </tr>
                    </td>
                    <td>
                        <tr>
                            <td className='b'> <b>{markexternal}</b> </td>
                            <td className='b'> <b>{markinternal}</b> </td>
                        </tr>
                    </td>
                    <td> <b>{total}</b> </td>
                </tr>
                <tr className='a1'>
                    <td className='a2' colSpan={3}> <b>Percentage</b> </td>
                    <td colSpan={2}> <b>{Percentage}%</b> </td>
                </tr>
            </tbody>
        </table>

    </div>
  );
}

export default App;
