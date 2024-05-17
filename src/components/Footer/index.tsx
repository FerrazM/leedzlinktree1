import { DivFooter, ImageDiv, ImageFooter, LayoutFooter } from "./styles";
import mascotImage from '../../assets/Litto_3.png'

export const Footer = () => {
    return (
        <LayoutFooter>
            <DivFooter>Powered by Leedz Creative Agency</DivFooter>
        </LayoutFooter>
    )
}

export const MascotFooter = () => {
    return (
        <ImageDiv>
            <ImageFooter src={mascotImage} alt="" width={300} height={100}/>
        </ImageDiv>
    )
} 