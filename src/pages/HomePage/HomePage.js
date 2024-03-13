import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import PostList from '../../components/PostList/PostList'
//import LoginForm from '../../components/LoginForm/LoginForm'

export default function HomePage(){
    return (
        <>
        <NavBar />
        <h1>This is the HomePage</h1>
        <PostList />
        <form>
            <label>Name<input type="text"></input></label>
        </form>
        <Button />
        </>
    )
}