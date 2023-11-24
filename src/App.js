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
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import RenderPropsCounter from './Components/RenderPropsCounter';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';
import PostList from './HTTPRequests/PostList';
import PostForm from './HTTPRequests/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm/>
      {/* <PostList/> */}

      {/* <UserProvider value = "Daniel">
        <ComponentC/>
      </UserProvider> */}

      {/* <RenderPropsCounter> 
        {(count, incrementCount) => (
          <ClickCounterTwo count = {count} incrementCount = {incrementCount}/> 
        )}
      </RenderPropsCounter>

      <RenderPropsCounter>
        {(count, incrementCount) => (
          <HoverCounterTwo count = {count} incrementCount = {incrementCount}/> 
        )}
      </RenderPropsCounter> */}

      {/* The below code can be  replaced using he render props functionality as above
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render = {(isLoggedIn) => isLoggedIn ? 'Daniel' : 'Guest' }/> */}

      {/* <ClickCounter name='Daniel'/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
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
