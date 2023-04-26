import logo from './logo.svg';
import './App.css';
import ContactForm from './components/contactForm';

function App() {

  const submitForm = (values)=>{
    console.log(values);
  }
  
  return (
    <div className="App">
      <ContactForm onSubmit={submitForm}/>
    </div>
  );
}

export default App;
