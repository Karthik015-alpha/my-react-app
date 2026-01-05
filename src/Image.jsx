import rulesLogo from './assets/Rules.jpeg'
import './App.css'
function Image(){
    return(
        <div>
            <img src={rulesLogo} className="img" alt="Rules" width="300"/>
        </div>
    );
}
export default Image;