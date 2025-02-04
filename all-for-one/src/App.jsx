import "./App.css";
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="min-h-screen bg-[url(src/assets/background.jpeg)] bg-[length:100vw_100vh] bg-no-repeat bg-center grid grid-col-12 grid-rows-12">
      <div className="lg:col-start-5 lg:col-end-8 lg:row-start-4 lg:row-end-9 flex flex-col bg-[#85735D] shadow-[.5rem_.5rem_0rem_.5rem_#000] rounded-[2rem]">
        <li>
          <ul>
            <Link to="/AddingTwoNumbers">
              <button className="bg-white" type="button">Adding Two Numbers</button>
            </Link>
          </ul>
          <Link to="/AddingTwoNumbers">
            <button type="button">Asking Questions</button>
          </Link>
          <ul>
            <Link to="/AskingQuestion">
              <button type="button">Greater Than Or Less Than</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Guess It</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Hello World</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Madlib</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Odd Or Even</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Restaurant Picker</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Reverse It Alphanumeric</button>
            </Link>
          </ul>

          <ul>
            <Link to="/AddingTwoNumbers">
              <button type="button">Reverse It Numbers Only</button>
            </Link>
          </ul>
        </li>

      </div>
    </div>
  );
}

export default App;
