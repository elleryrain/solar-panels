import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { routes } from "@/const/routes.ts";

interface MainItemProps {
  id: number;
  title: string;
  description: string;
  img: string;
  weight: string;
  power: string;
  size: string;
}

const MainItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 115px;
  margin-top: 144px;
  padding-left: 150px;
  padding-right: 150px;

  > img {
    border-radius: 35px;
    height: 100%;
    width: 865px;
    object-fit: cover;
  }

  @media (max-width: 1650px) {
    gap: 90px;
    padding-left: 0;
    padding-right: 0;
    > img {
      width: 750px;
    }
  }
  @media (max-width: 1500px) {
    gap: 60px;

    > img {
      width: 600px;
    }
  }
  @media (max-width: 1200px) {
    gap: 45px;

    > img {
      width: 500px;
    }
  }
  @media (max-width: 1000px) {
    gap: 25px;

    > img {
      width: 450px;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 47px;
  }
  @media (max-width: 500px) {
    > img {
      width: 340px;
    }
  }
`;

const MainItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

const MainTextContainer = styled.div`
  width: 676px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h1 {
    font-size: 60px;
  }

  > p {
    font-size: 30px;
  }

  @media (max-width: 1650px) {
    width: 600px;
    > h1 {
      font-size: 50px;
    }

    > p {
      font-size: 25px;
    }
  }
  @media (max-width: 1500px) {
    width: 450px;
    > h1 {
      font-size: 40px;
    }

    > p {
      font-size: 20px;
    }
  }
  @media (max-width: 1200px) {
    width: 335px;
    > h1 {
      font-size: 30px;
    }

    > p {
      font-size: 16px;
    }
  }
  @media (max-width: 1000px) {
    width: 335px;
    > h1 {
      font-size: 27px;
    }

    > p {
      font-size: 14px;
    }
  }
  @media (max-width: 500px) {
    > h1 {
      font-size: 30px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

const Characteristics = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30px;
    font-weight: 500;
    color: #48494b;
  }

  > span {
    font-family: Jost, sans-serif;
    font-size: 50px;
    font-weight: 400;
  }

  @media (max-width: 1650px) {
    > h1 {
      font-size: 25px;
    }

    > span {
      font-size: 45px;
    }
  }
  @media (max-width: 1500px) {
    > h1 {
      font-size: 20px;
    }

    > span {
      font-size: 35px;
    }
  }
  @media (max-width: 1200px) {
    > h1 {
      font-size: 18px;
    }

    > span {
      font-size: 30px;
    }
  }
  @media (max-width: 1000px) {
    > h1 {
      font-size: 15px;
    }

    > span {
      font-size: 27px;
    }
  }
  @media (max-width: 500px) {
    > h1 {
      font-size: 16px;
    }

    > span {
      font-size: 25px;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    gap: 15px;
  }
  @media (max-width: 500px) {
    gap: 10px;
    width: 100%;
  }
`;

const ButtonPreOrder = styled.div`
  font-size: 30px;
  background-color: black;
  color: white;
  padding: 18px 45px;
  border-radius: 100px;
  box-shadow: 0 0 10px 5px #00000040;
  border: none;
  cursor: pointer;

  @media (max-width: 1650px) {
    font-size: 25px;
  }
  @media (max-width: 1500px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 17px;
  }
  @media (max-width: 1000px) {
    padding: 18px 35px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    box-shadow: 0 0 5px 2px #00000040;
    padding: 10px 25px;
    font-size: 16px;
  }
`;

const ButtonDetails = styled.div`
  font-size: 30px;
  background-color: #dcdedd;
  border: none;
  padding: 18px 45px;
  border-radius: 100px;
  cursor: pointer;

  @media (max-width: 1650px) {
    font-size: 25px;
  }
  @media (max-width: 1500px) {
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 17px;
  }
  @media (max-width: 1000px) {
    padding: 18px 35px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    padding: 10px 25px;
    font-size: 16px;
  }
`;

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const MainItem: FC<MainItemProps> = ({
  id,
  title,
  description,
  img,
  weight,
  power,
  size,
}) => {
  const navigate = useNavigate();
  const btnHandler = (id: number) => {
    navigate(`${routes.configurator}?id=${id}`);
  };

  return (
    <MainItemStyled>
      <MainItemContainer>
        <MainTextContainer>
          <h1>{title}</h1>
          <p>{description}</p>
        </MainTextContainer>

        <CharacteristicsContainer>
          <Characteristics>
            <h1>Масса, кг</h1>
            <span>{weight}</span>
          </Characteristics>

          <Characteristics>
            <h1>Мощность, Вт</h1>
            <span>{power}</span>
          </Characteristics>

          <Characteristics>
            <h1>Размер, см</h1>
            <span>{size}</span>
          </Characteristics>
        </CharacteristicsContainer>

        <ButtonContainer>
          <ButtonPreOrder onClick={() => btnHandler(id)}>
            Предзаказ
          </ButtonPreOrder>
          <ButtonDetails onClick={() => btnHandler(id)}>
            Подробнее
          </ButtonDetails>
        </ButtonContainer>
      </MainItemContainer>
      <img src={img} alt="" />
    </MainItemStyled>
  );
};
