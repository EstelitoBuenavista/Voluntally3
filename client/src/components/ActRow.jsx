import '../css/Table.css'
import '../css/index.css'
import '../css/App.css'

function App(activity){
    return (
    <>
    <tr>
        
      <td className="Table__data">{activity.title}</td>
      <td className="Table__data">{activity.date}</td>
      <td className="Table__data">{activity.location}</td>
      <td className="Table__data">{activity.desc}</td>
      <td className="Table__data">{activity.status}</td>
      <td className="Table__data">
        <button className="delete-button DeleteButton" onClick={() => {activity.handleDelete(activity.id)}}>✕</button>
      </td>
      </tr>
      
      </>
    )
}

export default App