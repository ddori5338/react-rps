import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        };
    };
    
    play = (userChoice) => {
        console.log('선택됨', userChoice);
        this.setState({userSelect: choice[userChoice]});
        let computerChoice = this.randomChoice();
        this.setState({computerSelect: choice[computerChoice]});
        this.setState({result: this.judgement(choice[userChoice], choice[computerChoice])});
    }
    
    judgement = (user, computer) => {
        if (user.name === computer.name) return "tie";
        if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
        if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
        if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
    }
    
    randomChoice = () => {
        // Object.keys: 매개변수로 주어진 객체의 키값만 뽑아서 배열로 반환하는 함수
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return final;
    }

    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result === "tie" ? "tie" : this.state.result === "win" ? "lose" : this.state.result === "lose" ? "win" : ""}/>
                </div>
                <div className="main">
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
