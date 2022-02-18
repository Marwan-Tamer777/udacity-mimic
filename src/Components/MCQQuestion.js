import './css/MCQQuestion.css'
import {Component} from 'react'
import {connect} from 'react-redux'
import "./css/main.css";

class MCQ_Question extends Component { 

    question = this.props.quiz
    checkBoxes= []
    optionsList = {}

    componentDidMount(){
        this.checkBoxes= document.querySelectorAll(`input[name=${this.question.ID}]`)
        this.optionsList = document.querySelector(".Check_box")
    }

    onCheck(cIndex){
        this.checkBoxes.forEach((checkBox,index)=>(
            (
                checkBox.closest('li').lastChild.classList.contains("Apendded") ? (checkBox.closest('li').removeChild(checkBox.closest('li').lastChild)):(''),
                checkBox.checked= false,
                cIndex===index &&(checkBox.checked = !checkBox.checked)
                )
        ))
    }

    onSubmit(){
        this.checkBoxes.forEach(
          (checkBox, index) =>
            checkBox.checked === true &&
            !checkBox.closest("li").lastChild.classList.contains("Apendded") &&
            (index === this.question.answerIndex
              ? checkBox.closest("li").insertAdjacentHTML(
                    "beforeEnd",
                    `<p class="Apendded text-lg font-semibold text-green-500">${this.question.reviews[index]}</p>`
                  ): 
              checkBox.closest("li")
                  .insertAdjacentHTML(
                    "beforeEnd",
                    `<p class="Apendded text-lg font-semibold text-red-500">${this.question.reviews[index]}</p>`
                  ))
        );
    }

    render(){

        return(<div className="flex flex-col content-start">

            <h2 className="m-3 p-3 text-xl font-semibold border-2 text-blue-400 border-gray-300 shadow-xl rounded-xl">MCQ Question!</h2>

            <p className=" font-medium text-lg">{this.question.question}</p>

            <ul className="Check_box m-4 border-4 border-gray-500 rounded-xl">
                {
                    this.question.options.map((cOption,index)=>(
                        <li key={index} className="m-2">
                                <input type="checkbox" className="m-2" value={cOption} name={this.question.ID} id={this.question.question+index} onClick={()=>(this.onCheck(index))}></input>
                                <label className="font-medium">{cOption}</label>
                        </li>
                    ))
                }
            </ul>
            <input type="submit" className=" self-center m-4 rounded-xl w-1/12 border-2 border-black bg-gray-700 text-blue-400 
             font-bold uppercase text-lg bg-gradient-to-br hover:from-red-400 hover:to-yellow-400" onClick={()=>(this.onSubmit())}></input>
        </div>)
    }


}

export default connect()(MCQ_Question);

