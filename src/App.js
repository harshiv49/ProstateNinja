
import {Route,Routes} from 'react-router-dom'
import Home from './routes/home/home_component';
import Navigation from './routes/navigation/navigation_component';
function App() {
  return (
  
    <Routes>
       <Route path="/" element={<Navigation/>}>
           <Route index={true} element={<Home></Home>}/>
       </Route>
    </Routes>
    

  );
}

export default App;
