import {useState} from "react"
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. (3, 4)의 결과를 가지고 승패 결정
// 6. 승패 결과에 따라 테두리 색이 바뀜(이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/manoega-scissors-stainless-steel-black__1215197_pe911911_s5.jpg?f=s"
  },
  paper: {
    name: "Paper",
    img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2"
  }
};

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log('선택됨', userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    setResult(judgement(choice[userChoice], choice[computerChoice]));
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) return "tie";
    if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
    if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
    if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
  }

  const randomChoice = () => {
    // Object.keys: 매개변수로 주어진 객체의 키값만 뽑아서 배열로 반환하는 함수
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return final;
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result === "tie" ? "tie" : result === "win" ? "lose" : result === "lose" ? "win" : ""}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
