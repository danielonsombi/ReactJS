import logo from './logo.svg';
import './App.css';
//import {Greet} from './Components/Greet';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragementDemo from './Components/FragementDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp/>
      {/* <PureComp/> */}
      {/* <Table/> */}
      {/* <FragementDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/>*/}
      {/* <Message/> */}
      {/* <Greet name = "Canine" heroName = "Batman">
        <p>This are Children Props</p>
      </Greet>
      <Greet name = "Daniel" heroName = "Superman">
        <button>Click Here</button>
      </Greet>
      
      <Greet name = "Brandon" heroName = "Yourman">
        <button>Click Here</button>
      </Greet>
      <Welcome name = "Canine" heroName = "Batman"/>
      
      <Welcome name = "Daniel" heroName = "Superman"/>
      <Welcome name = "Brandon" heroName = "Yourman"/> */}
    </div>
  );
}

export default App;
