import recycle from './assets/recycle.png'
import computer from './assets/computer.png'
import folder from './assets/folder.png'
function Body(){
    return(
        <>
        <div className='body'>
            <img src={recycle} alt="" />
            <img src={computer} alt="" className='comp' />
            <img src={folder} alt="" />
            <img src={folder} alt="" />
        </div>
        </>

    )
}
export default Body