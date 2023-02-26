import style from './App.module.scss'
import FirstBanner from './components/FirstBanner';
import Header from './components/Header';
import LogoFilterSearchBasketUser from './components/LogoFilterSearchBasketUser';

function App() {

  return (
    <div >
      <Header/>
      <div className={style.container}>
         <LogoFilterSearchBasketUser/>
         <FirstBanner />
      </div>
     
    </div>
  )
}

export default App;
