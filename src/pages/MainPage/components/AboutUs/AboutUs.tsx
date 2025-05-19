import styled from "styled-components";
import { routes } from "@/const/routes.ts";

interface AboutUsProps {
  title: string;
  description: string;
  imgUrl: string;
  bgUrl: string;
}

const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding-left: 210px;
  padding-right: 150px;
  margin-top: 170px;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 60%;
    border-radius: 35px;
  }

  @media (max-width: 1650px) {
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: column-reverse;
    > img {
      max-width: 90%;
    }
  }
  @media (max-width: 800px) {
    margin-top: 100px;
    gap: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
    gap: 25px;
    > img {
      max-width: 95%;
    }
  }
`;

const AboutUsContentStyled = styled.div<Partial<AboutUsProps>>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  background: url(${(props) => props.bgUrl}) no-repeat right bottom;
  width: 625px;

  > h1 {
    font-size: 60px;
    font-weight: 500;
  }

  > p {
    font-size: 26px;
    font-weight: 500;
    color: #48494b;
    padding-bottom: 20px;
  }

  > a {
    padding: 19px 40px;
    font-size: 26px;
    font-weight: 500;
    background-color: black;
    color: white;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 1650px) {
    width: 100%;
    background-position-x: 100%;
    background-size: 300px, 100%;
  }
  @media (max-width: 800px) {
    background-size: 200px 100%;
    > h1 {
      font-size: 45px;
    }

    > p {
      font-size: 20px;
    }

    > a {
      padding: 15px 35px;
      font-size: 22px;
    }
  }
  @media (max-width: 500px) {
    gap: 15px;
    background-size: 100px 100%;
    > h1 {
      font-size: 20px;
    }

    > p {
      font-size: 19px;
    }

    > a {
      font-size: 16px;
      padding: 10px 25px;
    }
  }
`;

export function AboutUs({ title, description, imgUrl, bgUrl }: AboutUsProps) {
  return (
    <AboutUsStyled id="AboutUs">
      <img src={imgUrl} alt="" />
      <AboutUsContentStyled bgUrl={bgUrl}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          Проект создан при поддержке Федерального государственного бюджетного
          учреждения Фонд содействия развитию малых форм предприятий в
          научно-технической сфере в рамках программы "Студенческий стартап"
          федерального проекта "Платформа университетского технологического
          предпринимательства".
        </p>
        <a href={routes.products}>Каталог</a>
      </AboutUsContentStyled>
    </AboutUsStyled>
  );
}
