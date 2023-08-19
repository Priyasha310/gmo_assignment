import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostsTable from './components/PostsTable';
import UserForm from './components/UserForm';
import Checkbox from './components/GroupCheckbox';


const App = () => {
  // Check if the form data is already submitted
  const isFormDataSubmitted = localStorage.getItem('formData') !== null;

  return (
    <Router>
      <Routes>
        {/* Redirect user if the form is not submitted to prevent direct entry to data page */}
        <Route path="/home" element={isFormDataSubmitted ? 
          <><PostsTable /> <Checkbox/></> 
          : 
          <Navigate to="/" />
        } />

        <Route path="/" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
