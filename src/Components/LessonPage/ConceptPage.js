import {Component} from 'react'
import {connect} from 'react-redux'
import MCQQuestion from '../QuestionTypes/MCQQuestion'
import { CONCEPT_TYPE_TITLE , CONCEPT_TYPE_TEXT , CONCEPT_TYPE_VIDEO ,
    CONCEPT_TYPE_QUIZ_MCQ , CONCEPT_TYPE_QUIZ_MULTI_MCQ,CONCEPT_TEXT_TYPE_URL,
CONCEPT_TEXT_TYPE_ABBREVATION,CONCEPT_TEXT_TYPE_FOCUS,CONCEPT_TEXT_TYPE_CONPUTER_OUTPUT,
CONCEPT_TEXT_TYPE_DETAILS, CONCEPT_TYPE_IMAGE, CONCEPT_TYPE_CODE,CONCEPT_CODE_TYPE_VAR,CONCEPT_CODE_TYPE_STRING
,CONCEPT_CODE_TYPE_CONSOLE,CONCEPT_CODE_TYPE_FUNCTIONS, CONCEPT_CODE_TYPE_COMMENT, CONCEPT_CODE_TYPE_NEW_LINE,
CONCEPT_TYPE_BASIC} from '../../Utils/Concepts_Types'

class ConceptPage extends Component {
  conceptTextDecide(objectT) {
    switch (objectT.type) {
      case CONCEPT_TEXT_TYPE_URL:
        return (
          <a
            href={objectT.url}
            rel="noreferrer"
            target="_blank"
            className="text-blue-600 underline hover:text-purple-600"
          >
            {objectT.text}
          </a>
        );

      case CONCEPT_TEXT_TYPE_ABBREVATION:
        return (
          <pre>
            <abbr title={objectT.title}>{objectT.text}</abbr>
          </pre>
        );

      case CONCEPT_TEXT_TYPE_FOCUS:
        return (
          <pre>
            <kbd>{objectT.text}</kbd>
          </pre>
        );

      case CONCEPT_TEXT_TYPE_CONPUTER_OUTPUT:
        return (
          <pre>
            <samp>{objectT.text}</samp>
          </pre>
        );

      case CONCEPT_TEXT_TYPE_DETAILS:
        return (
          <details>
            <summary>{objectT.summary}</summary>
            {objectT.text}
          </details>
        );

      default:
        return <span>objectT.text</span>;
    }
  }


    conceptCodeDecide(objectT) {
      switch (objectT.type) {
        case CONCEPT_CODE_TYPE_VAR:
          return (
            <code className="font-semibold text-base">
              {objectT.text}&nbsp;
            </code>
          );

        case CONCEPT_CODE_TYPE_STRING:
          return (
            <code className="text-base text-red-400">{objectT.text}&nbsp;</code>
          );

        case CONCEPT_CODE_TYPE_CONSOLE:
          return (
            <code className="text-base text-blue-400">{objectT.text}</code>
          );

        case CONCEPT_CODE_TYPE_FUNCTIONS:
          return (
            <code className="text-base text-yellow-400">
              {objectT.text}&nbsp;
            </code>
          );

        case CONCEPT_CODE_TYPE_COMMENT:
          return (
            <code className="text-base text-gray-400">
              {objectT.text}&nbsp;
            </code>
          );

        case CONCEPT_CODE_TYPE_NEW_LINE:
          return (
            <br />
          );

        default:
          return <code>{objectT.text}&nbsp;</code>;
      }
    }

  conceptDecide(concept) {
    switch (concept.type) {
      case CONCEPT_TYPE_BASIC:
        return (
          <div className="flex justify-center content-center">
              {concept.text}
          </div>
        );

      case CONCEPT_TYPE_TITLE:
        return (
          <div className="flex justify-center content-center w-full">
            <h3 className="m-3 p-2 bg-gray-700 text-blue-400 font-bold text-2xl rounded-full shadow-2xl ">
              {concept.text}
            </h3>
          </div>
        );

      case CONCEPT_TYPE_TEXT:
        return (
          <div className="flex flex-row flex-wrap justify-start content-center p-5 mx-10">
            {concept.text.map((textOrObject, index) => (
              <span key={index} className=" text-sm font-medium">
                {typeof textOrObject === "string"
                  ? textOrObject
                  : this.conceptTextDecide(textOrObject)}
                &nbsp;
              </span>
            ))}
          </div>
        );

      case CONCEPT_TYPE_VIDEO:
        return (
          <div className="flex justify-center content-center">
            <iframe
              width="770"
              height="433"
              src={concept.url}
              title="YouTube video player"
              className="m-10"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );

      case CONCEPT_TYPE_QUIZ_MCQ:
        return <MCQQuestion quiz={concept.quiz} />;

      case CONCEPT_TYPE_QUIZ_MULTI_MCQ:
        return <div className="flex justify-center content-center"></div>;

      case CONCEPT_TYPE_IMAGE:
        return (
          <div>
            <img
              src={concept.imgURL}
              alt="pic"
              className=" w-full object-cover "
            />
            <p className="font-xl p-5 mx-10 text-gray-700 text-lg">
              {concept.text}
            </p>
          </div>
        );

      case CONCEPT_TYPE_CODE:
        return (
          <pre className=" flex flex-row flex-wrap border-2 border-gray-400 p-8 m-4 shadow-lg rounded-lg">
            {concept.code.map((code, index) => this.conceptCodeDecide(code))}
          </pre>
        );

      default:
        return undefined;
    }
  }

  render() {
    let concept = this.props.Concepts[this.props.currentConceptID];
    if (concept === undefined) {
      return <div></div>;
    }
    return (
      <div className="w-4/5 flex flex-col absolute right-0 top-top-nav">
        {concept.conceptList.map((cConcept, index) => (
          <div key={index}>{this.conceptDecide(cConcept)}</div>
        ))}
      </div>
    );
  }
}

function mapStateToProps ({Concepts}) {
  return {
      Concepts
  }
}
export default connect(mapStateToProps)(ConceptPage);