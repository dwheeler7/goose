import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'

export default function HomePage(){
    return (
        <>
        <NavBar />
        <h1>This is the HomePage</h1>
        <form>
            <label>Name<input type="text"></input></label>
        </form>
        <Button />
        </>
    )
}