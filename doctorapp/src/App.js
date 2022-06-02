import logo from './logo.svg';
import './App.css';

import { ToastProvider } from 'react-toast-notifications';
import DoctorAdd from './components/doctor/DoctorCreate/doctorCreate';
import DoctorList from './components/doctor/DoctorList/doctorList';

function App() {
  return (
    <div className="App">
      <ToastProvider>
       {/* <DoctorAdd/> */}
       <DoctorList/>
      </ToastProvider>
     
    </div>
  );
}

export default App;
