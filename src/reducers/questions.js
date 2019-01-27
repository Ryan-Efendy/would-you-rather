import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION
} from '../actions/questions';

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      return action.answer === 'optionOne'
        ? {
            ...state,
            [action.qid]: {
              ...state[action.qid],
              optionOne: {
                ...state[action.qid].optionOne,
                votes: state[action.qid].optionOne.votes.concat([
                  action.authedUser
                ])
              }
            }
          }
        : {
            ...state,
            [action.qid]: {
              ...state[action.qid],
              optionTwo: {
                ...state[action.qid].optionTwo,
                votes: state[action.qid].optionTwo.votes.concat([
                  action.authedUser
                ])
              }
            }
          };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question
        }
      };
    default:
      return state;
  }
};

export default questions;
