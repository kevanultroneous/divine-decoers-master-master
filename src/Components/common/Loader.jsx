import { Image } from "react-bootstrap"
import Loading from  "../../Assets/images/loader.gif"
const Loader = () => {
    return (
         <div className = "loaders-contain" >
             <div style={{
                 height:'100%',
                 display:'flex',
                 alignItems:'center',
                 justifyContent:'center',
             }}>
             <Image src={Loading} height={300}/>
             </div>
        </div>
         )
}
export default Loader