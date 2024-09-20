import './Sass/App.scss';
import SidebarContainer from './components/SidebarContainer' ;
import MainContentContainer from './components/MainContentContainer';
function App() {
  return (
    <div className="container">
         <SidebarContainer/>
         <MainContentContainer/>
    </div>
  );
}

export default App;
