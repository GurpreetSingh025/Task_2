import HeaderContainer from "./HeaderContainer.js";
import ContentContainer from "./ContentContainer.js";
function MainContentContainer(){
    return(
        <div className="main-content">
            <HeaderContainer/>
            <ContentContainer/>
        </div>
    )
}
export default MainContentContainer ;