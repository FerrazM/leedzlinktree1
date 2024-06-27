import { DivFooter, ImageDiv,ImageDivv, ImageFooter, ImageFooterCenter, LayoutFooter } from "./styles";
import mascotImage from '../../assets/Litto_3.png'
import fogueteImage from '../../assets/foguete.png'

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

export const FogueteFooter = () => {
    return (
        <ImageDivv>
            <ImageFooterCenter src={fogueteImage} alt="" width={300} height={100} />
        </ImageDivv>
    )
}

