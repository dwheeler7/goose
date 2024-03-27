import styles from './Button.module.scss'

export default function Button({value, handleClick}){
    return (
        <button onClick={handleClick}>{value}</button>
    )
}