import { ImageHeader, LayoutHeader, SubContainer } from "./styles"
import profileImage from '../../assets/profile_img.png'


export const Header = () => {
    return (
        <LayoutHeader>
            <ImageHeader src={profileImage} alt="" width={300} height={100} />
            <SubContainer>
                <div>Creative Agency</div>
            </SubContainer>
        </LayoutHeader>
    )
}

export default Header