import React, { Component } from 'react'

export default class BoxClass extends Component {
    render() {
        console.log("props:", this.props);
        return (
            <div className="box" id={this.props.result}>
                <h1>{this.props.title}</h1>
                <img className="item-img" src={this.props.item && this.props.item.img} alt=""/>
                <h2>{this.props.result}</h2>
            </div>
        )
    }
}
