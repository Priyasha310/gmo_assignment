import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostsTable from './components/PostsTable';
import UserForm from './components/UserForm';
import Checkbox from './components/NestedCheckbox';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
  const isFormDataSubmitted = localStorage.getItem('formData') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/home" element={isFormDataSubmitted ? 
          <><Sidebar/> <PostsTable /> <Checkbox/></> 
          : 
          <Navigate to="/" />
        } />

        <Route path="/" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
