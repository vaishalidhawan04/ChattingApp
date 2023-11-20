import logo from './logo.svg';
import './App.css';
import Form from './modules/Form'
import Dashboard from './modules/Dashboard';
import { Routes , Route, Navigate} from 'react-router-dom';

const ProtectedRoute = ({ children}) => {

  const isLoggedIn = localStorage.getItem('user:token') !== null || true;
  console.log('isLoggedIn :>> ', isLoggedIn);

  if(!isLoggedIn ) {

    return <Navigate to={'/users/sign_in'}/>

  }else if(isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)){
    return <Navigate to={'/'}/>
  }

  return children

}

function App() {
  return (

    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        
      }/>
      <Route path='/users/sign_in' element={
        <ProtectedRoute>
          <Form isSignInPage={true}/>
        </ProtectedRoute>
      }/>
      <Route path='/users/sign_up' element={
        <ProtectedRoute>
          <Form isSignInPage={false}/>
        </ProtectedRoute>
      }/> 


      {/* <Route path='/users/sign_in' element={<Form isSignInPage={true}/>}/>
      <Route path='/users/sign_up' element={<Form isSignInPage={false}/>}/> */}
      {/* <Route path='/users/sign_in' element={<Form/>}/>
      <Route path='/users/sign_up' element={<Form/>}/> */}
    </Routes>


    // <div className='bg-[#e1edff] h-screen flex justify-center items-center'>
    //   {/* <Form/> */}
    //   <Dashboard/>
    // </div>
  );
}

export default App;
