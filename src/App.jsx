import style from './App.module.scss'
import Header from './components/Header';
import LogoFilterSearchBasketUser from './components/LogoFilterSearchBasketUser';

function App() {

  return (
    <div >
      <Header/>
      <div className={style.container}>
         <LogoFilterSearchBasketUser/>
      </div>
     
    </div>
  )
}

export default App;
