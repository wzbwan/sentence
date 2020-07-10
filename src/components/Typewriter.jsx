import React, { Component } from 'react';

class Typewriter extends Component {
    state = {
        words:[]
    }

    componentDidMount(){
        let speed = this.props.speed?this.props.speed:100
        let delay = 0
        let finishDelay = this.props.finishDelay?this.props.finishDelay:300
        this.props.data.map((word,index)=>{
            if (word === "==") {
                delay = this.props.speed
            } else {
                delay = 0
            }

            setTimeout(() => {
                let array = this.state.words.concat()
                array.push(word)
                this.setState({
                    words:array
                })
                
            }, index * speed + delay);

            if (index === this.props.data.length - 1) {
                setTimeout(() => {
                    if (this.props.finish) {
                        this.props.finish()
                    }
                }, index * speed + finishDelay);
            }
        })
    }

    render() {
        let words = [""]
        let row = 0
        this.state.words.map((word,index)=>{
            if (word === "/") {
                row += 1
                words.push("")
            }else if ( word === "==" ) {

            }else{
                words[row] += word
            }
        })
        let text = []
        words.map((line,row)=>{
            text.push(<h2 key={row}>{line}</h2>)
        })
        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Typewriter;