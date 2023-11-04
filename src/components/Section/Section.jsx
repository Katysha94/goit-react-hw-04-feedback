import css from './Section.module.css'

export const Section = ({ title, children }) => {
    return (
        <div>
            <h2 className={css.feedbackTitle}>{title}</h2>
            {children}
        </div>
       
    )
}