import { IconImage, LayoutLinks, StyledLink } from "./styles"
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";


export const SocialMedia = () => {
    return (
        <LayoutLinks>
            <StyledLink target="_blank" href="https://www.instagram.com/agencialeedz/">
              <IconImage>
                <SlSocialInstagram />
                </IconImage>Instagram
                </StyledLink>
            <StyledLink target="_blank" href="https://wa.me/5511998231157"><IconImage><FaWhatsapp /></IconImage>WhatsApp</StyledLink>
            <StyledLink target="_blank" href="tel:5511998231157"><IconImage><IoCallOutline /></IconImage> Telefone</StyledLink>         
            <StyledLink target="_blank" href="https://www.linkedin.com/company/ag%C3%AAncia-leedz/people/"><IconImage><CiLinkedin /></IconImage>LinkedIn</StyledLink>
            <StyledLink target="_blank" href="https://agencialeedz.com/"><IconImage><RiComputerLine /></IconImage>
            Site</StyledLink>
        </LayoutLinks>
    )     
}

export default SocialMedia