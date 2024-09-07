import ErrorPage from '../../assets/Json/ErrorPage404.json'
import '@lottiefiles/lottie-player';

function notfound() {
  return (
    <div>
      <lottie-player 
        src={JSON.stringify(ErrorPage)} 
        background="transparent" 
        speed="0.9"
        style={{ width: '100vw', height: '100vh' }} 
        loop 
        autoplay>
      </lottie-player>
    </div>
  )
}

export default notfound