import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const answerQuestion = ({ authedUser, qid, answer }) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer
});

export const handdleAnswerQuestion = info => dispatch => {
  dispatch(answerQuestion(info));

  return saveQuestionAnswer(info).catch(e => {
    console.warn('Error in handleToggleTweet: ', e);
    dispatch(answerQuestion(info));
    alert('The was an error liking the tweet. Try again.');
  });
};
