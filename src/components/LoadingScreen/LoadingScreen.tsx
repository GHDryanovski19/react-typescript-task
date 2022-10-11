import { IoCloseSharp } from 'react-icons/io5'
import { LoadingScreenType } from '../../types'
import style from './LoadingScreen.module.scss'

const LoadingScreen = ( { isVisible, functionality } : LoadingScreenType ) => {
  return (
    <div className={isVisible ? "" : style["display-none"]}>
        <div className={style["blurred-screen-loader-container"]}></div>
        <div className={style["blurred-screen-loader-x-position"]}>
            <IoCloseSharp className={style["x-icon"]} onClick={() => functionality()}/>
        </div>
        <div className={style["blurred-screen-loader-position"]}>
            <div className={style["spinner-loader"]}></div>
        </div>
        <div className={style["blurred-screen-loader-position-text"]}>
            <text>Processing</text>
        </div>
    </div>
  )
}

export default LoadingScreen