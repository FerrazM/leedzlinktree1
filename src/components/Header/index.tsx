import { ImageHeader, LayoutHeader, SubContainer } from "./styles"
import profileImage from '../../assets/profile_img.png'


export const Header = () => {
    return (
        <LayoutHeader>
           <a href="">
            <ImageHeader src={profileImage} alt="" width={300} height={100} />
            </a>
            <SubContainer>
                <div>Creative Agency</div>
            </SubContainer>
        </LayoutHeader>
    )
}

export default Header