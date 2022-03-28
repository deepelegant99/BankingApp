import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
export default function App() {
  //Styling
  const bankStyle = {
    backgroundColor: "lightgray",
    width: "50%",
    margin: "auto",
    height: "50px",
    padding: "80px"
  };

  //State Management
  const accountVal = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <div style={bankStyle}>
        {" "}
        You bank balance is now:
        <span style={{ backgroundColor: "lightblue" }}>{accountVal}</span>
      </div>
      <button onClick={() => depositMoney(5)}>Deposite 5$</button>
      <button onClick={() => withdrawMoney(5)}>Withdraw 5$</button>
    </div>
  );
}
