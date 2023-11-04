import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedbackBtnContainer}>
        {options.map(option => (
        <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={css.feedbackBtn}
         >{option}</button>
         ))}   
        </div>
    )
}