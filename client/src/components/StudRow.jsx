import '../css/Table.css'
import '../css/index.css'
import '../css/App.css'

function App(student){

    return (
        <> 
            <tr>
                <td className="Table__data">{student.IDnumber}</td>
                <td className="Table__data">{student.name}</td>
                <td className="Table__data">{student.course}</td>
                <td className="Table__data">{student.year}</td>
                <td className='Table__data'>
                    <span id="points" className="Points">{student.points}</span>
                </td>
                <td className='Table__data'>
                    <button className="subtract-points-button MinusButton"  onClick={()=>{student.handleMinusPoints(student.IDnumber)}}>–</button>
                    <button className="add-points-button PlusButton" onClick={()=>{student.handleAddPoints(student.IDnumber)}}>➕</button>
                    <button className="delete-button DeleteButton" onClick={()=>{student.handleDelete(student.IDnumber)}}>✕</button>
                </td>
            </tr>
        </>

    )
}

export default App