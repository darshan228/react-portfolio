import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  overflow: hidden;
  padding: 12px 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:hover ${Document} {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

const Logo = styled.img`
  height: 50px;
  background-color: ${({ theme }) => theme.white};
  margin-top: 4px;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 100%;
  text-overflow: ellipsis;
`;
const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

function EducationCard({ education }) {
  return (
    <Card>
      <HeaderSection>
        <Logo src={education.img} />
        <TitleSection>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Duration>{education.date}</Duration>
        </TitleSection>
      </HeaderSection>
      <Grade>Grade: {education.grade}</Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
}

export default EducationCard;
