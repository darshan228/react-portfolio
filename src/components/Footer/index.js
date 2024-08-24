import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import styled from "styled-components";
import { Details } from "../../data/Constants";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 12px;
    text-align: center;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CopyRight = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.soft2};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Darshan Rathod</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Details.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Details.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Details.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Details.github} target="display">
            <GithubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Details.whatsapp} target="display">
            <WhatsappIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <CopyRight>Made with &hearts; by Darshan Rathod</CopyRight>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
