import css from './Notification.module.css'

export const Notification = ({ message }) => {
    return (
        <>
            <h2 className={css.notificationTitle}>{message}</h2>
        </>
    )
}