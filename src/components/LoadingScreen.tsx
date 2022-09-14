import { IoCloseSharp } from 'react-icons/io5'
import { LoadingScreenType } from '../types'

const LoadingScreen = ( { isVisible, functionality } : LoadingScreenType ) => {
  return (
    <div className={isVisible ? "" : "display-none"}>
        <div className="blurred-screen-loader-container"></div>
        <div className="blurred-screen-loader-x-position">
            <IoCloseSharp className="x-icon" onClick={() => functionality()}/>
        </div>
        <div className="blurred-screen-loader-position">
            <div className="spinner-loader"></div>
        </div>
        <div className="blurred-screen-loader-position-text">
            <text>Processing</text>
        </div>
    </div>
  )
}

export default LoadingScreen