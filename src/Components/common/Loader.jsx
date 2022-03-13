import { Image } from "react-bootstrap"
import Loading from  "../../Assets/images/icon.png"
import {Spinner} from "react-bootstrap"
const Loader = () => {
    return (
         <div className = "loaders-contain" >
            
             <div style={{
                 height:'100%',
                 display:'flex',
                 alignItems:'center',
                 justifyContent:'center',
                 transition:'4s'
             }}>
<Spinner animation="border" variant="secondary" size="lg" />
             </div>
        </div>
         )
}
export default Loader