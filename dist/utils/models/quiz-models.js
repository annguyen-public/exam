"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidTrueFalseAnswers = exports.noOptions = exports.noAnswerQuestion = exports.noAnswersQuestion = exports.invalidQuestionType = exports.noQuestionAnswerTypeQuiz = exports.noQuestionQuiz = exports.noQuestionsQuiz = exports.noTimeQuiz = exports.noMarkQuiz = exports.noDescriptionQuiz = exports.noTitleQuiz = exports.validQuiz = void 0;
const validQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
        {
            question: 'This is my question',
            type: 'true_false',
            answers: { answer: true, options: [true, false] },
        },
        {
            question: 'This is my question',
            type: 'short_answer',
            answers: { answer: 'correct answer', options: [] },
        },
    ],
};
exports.validQuiz = validQuiz;
const noTitleQuiz = {
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noTitleQuiz = noTitleQuiz;
const noOptions = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer' },
        },
    ],
};
exports.noOptions = noOptions;
const noDescriptionQuiz = {
    title: 'my first quiz',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noDescriptionQuiz = noDescriptionQuiz;
const noMarkQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noMarkQuiz = noMarkQuiz;
const noTimeQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noTimeQuiz = noTimeQuiz;
const noQuestionsQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
};
exports.noQuestionsQuiz = noQuestionsQuiz;
const noQuestionQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noQuestionQuiz = noQuestionQuiz;
const noQuestionAnswerTypeQuiz = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noQuestionAnswerTypeQuiz = noQuestionAnswerTypeQuiz;
const invalidQuestionType = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'hello',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.invalidQuestionType = invalidQuestionType;
const noAnswersQuestion = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
        },
    ],
};
exports.noAnswersQuestion = noAnswersQuestion;
const noAnswerQuestion = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { options: ['true answer', 'hello', 'hi', 'why'] },
        },
    ],
};
exports.noAnswerQuestion = noAnswerQuestion;
const invalidTrueFalseAnswers = {
    title: 'my first quiz',
    description: 'my first quiz description',
    mark: 20,
    time: 30,
    questions: [
        {
            question: 'This is my question',
            type: 'mcq',
            answers: { answer: 'true answer', options: ['true answer', 'hello', 'hi', 'why'] },
        },
        {
            question: 'This is my question',
            type: 'true_false',
            answers: { answer: 'hi', options: [true, true] },
        },
        {
            question: 'This is my question',
            type: 'short_answer',
            answers: { answer: 'correct answer', options: [] },
        },
    ],
};
exports.invalidTrueFalseAnswers = invalidTrueFalseAnswers;
