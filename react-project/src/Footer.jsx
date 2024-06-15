import drive from './assets/drive.png'
import chrome from './assets/chrome.png'
import windows from './assets/windows.png'
import store from './assets/store.png'


function Footer(){
    return(
        <>
        <nav className='navbar'>
        <img src={windows} className='icon1'/>

        <div className='foot'>
            <img src={drive} className='icon2' />
            <img src={chrome} className='icon3'/>
            <img src={store}  className='icon4'/>
        </div>
        <h4 className='text'>21:08 <br />Saturday, June 15, 2024</h4>
        </nav>
        </>
    )
}

export default Footer