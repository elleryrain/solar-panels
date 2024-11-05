import { act, FC, useState } from "react";
import styled from "styled-components";
import AddIcon from "@/assets/img/AddIcon.svg?react";
import OpenIcon from "@/assets/img/OpenIcon.svg?react";
import CloseIcon from "@/assets/img/CloseIcon.svg?react";
import RemoveIcon from "@/assets/img/RemoveIcon.svg?react";

interface IConfigItem {
  [key: string]: {
    price: number;
    countUsb: number;
  };
}

interface IConfigItemProps {
  name: string;
  price: number;
  description: string[];
  config?: {
    [key: string]: {
      desc: string;
      configOptions: IConfigItem;
    };
  };
}

const ContentWrapper = styled.div<{ removed: boolean, opened: boolean }>`
  margin-bottom: 20px;
  border: ${(props) =>
    props.removed ? "1px solid #B5B5B5" : (props.opened ? "" : "1px solid #000000")};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1074px;
  background-color: ${(props) => (props.opened ? "#424242" : "")};
`;

const Container = styled.div<{ removed: boolean; opened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom: ${(props) =>
    props.opened ? `1px solid ${props.removed ? "#D9D9D9" : "white"}` : "0px solid transparent"
  };

`;

const Header = styled.h2<{ removed: boolean, opened: boolean }>`
  font-size: 25px;
  font-weight: 300;
  margin-left: 10px;
  text-decoration: ${(props) => (props.removed ? "line-through" : "none")};
  text-decoration-color: #b5b5b5;
  color: ${(props) => (props.removed ? "#B5B5B5" : (props.opened ? "white" : "black"))};
`;

const OpenActionContainer = styled.div<{ removed: boolean, opened: boolean }>`
  border-left: ${(props) =>
    props.removed ? "1px solid #B5B5B5" : (props.opened ? "" : "1px solid black")};
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  
`;
const ActionAddContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const actionRemoveAddDimentions = {
  height: 20,
  width: 20,
};
const actionOpenCloseDimentions = {
  height: 20,
  width: 20,
};

const EquipmentInfoContainer = styled.div<{ display: "block" | "none" }>`
  margin: 50px 0 30px 0;
  display: flex;
  flex-direction: column;
  display: ${(props) => props.display};
`;
const CharactersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const ImgEquipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 274px;
  height: 274px;
`;
const ImgEquipSpan = styled.span`
  font-size: 23px;
  font-weight: 500;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const DescriptionItemContainer = styled.div`
  background-color: #e3ffa6;
  border-radius: 20px;
  min-height: 120px;
  min-width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: #2c2c2c;
  border-radius: 20px;
  width: 274px;
  padding: 20px;
`;

const MainDescriptionItemContainer = styled.div``;
const MainDescriptionItemHeader = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
`;
const MainDescriptionItemSpan = styled.div`
  font-family: Jost, sans-serif;
  line-height: 27px;
  font-size: 20px;
  font-weight: 400;
  color: #e3e3e3;
`;
const DescriptionSpan = styled.span`
  font-family: Jost, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 72.25px;
`;

const ConfigContainer = styled.div`
  display: flex;
  margin: 0 0 0 70px;
`;

const ConfigOptionsContainer = styled.div<{ isSelected: boolean }>`
  border: ${(props) => (props.isSelected ? "none" : "2px solid #FF6262")};
  padding: 20px;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;

const ConfigOptionButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

const ConfigOptionButton = styled.button<{ isActive: boolean }>`
  background-color: #2C2C2C;
  color: white;
  padding: 10px 30px;
  border: 1px solid ${(props) => (props.isActive ? "white" : "#2c2c2c")};
  border-radius: 47px;
  cursor: pointer;
  font-family: Jost;
  font-size: 26px;
  font-weight: 400;
  line-height: 20px;

`;

const ConfigOptionsItemSpan = styled.span`
  font-weight: 300;
  font-size: 26px;
  color: white;
`;
export const ConfigItem: FC<IConfigItemProps> = ({
  name,
  description,
  price,
  config,
}) => {
  const [removed, setRemoved] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedUsbCount, setSelectedUsbCount] = useState<string | null>(null);

  const actionRemoveAddBtn = !removed ? (
    <RemoveIcon stroke={!opened ? "black" : "white"} {...actionRemoveAddDimentions} />
  ) : (
    <AddIcon {...actionOpenCloseDimentions} />
  );

  const actionOpenCloseBtn = !opened ? (
    <OpenIcon stroke={!removed ? "black" : "#B5B5B5"} />
  ) : (
    <CloseIcon stroke={removed ? "#B5B5B5" : (!opened ? "black" : "white")} />
  );

  return (
    <ContentWrapper removed={removed} opened={opened}>
      <Container removed={removed} opened={opened}>
        <HeaderContainer>
          <ActionAddContainer onClick={() => setRemoved(!removed)}>
            {actionRemoveAddBtn}
          </ActionAddContainer>
          <Header removed={removed} opened={opened}>{name}</Header>
        </HeaderContainer>

        <OpenActionContainer
          removed={removed}
          opened={opened}
          onClick={() => setOpened(!opened)}
        >
          {actionOpenCloseBtn}
        </OpenActionContainer>
      </Container>

      <EquipmentInfoContainer display={opened ? "block" : "none"}>
        <CharactersContainer>
          <ImgEquipContainer>
            <ImgEquipSpan>Фото</ImgEquipSpan>
          </ImgEquipContainer>

          <DescriptionContainer>
            {description.map((item, index) => (
              <DescriptionItemContainer key={index}>
                <DescriptionSpan>{item}</DescriptionSpan>
              </DescriptionItemContainer>
            ))}
          </DescriptionContainer>

          <MainDescriptionContainer>
            <MainDescriptionItemContainer>
              <MainDescriptionItemHeader>
                Мощный повербанк модуль
              </MainDescriptionItemHeader>
              {description.map((item, index) => (
                <MainDescriptionItemSpan key={index}>{item}</MainDescriptionItemSpan>
              ))}
            </MainDescriptionItemContainer>
          </MainDescriptionContainer>
        </CharactersContainer>

        {/* Отображение конфигурации, если она есть */}
        {config && (
          <ConfigContainer>
            {Object.entries(config).map(([key, { desc, configOptions }]) => (
              <ConfigOptionsContainer key={key} isSelected={!!selectedUsbCount}>
                <ConfigOptionsItemSpan>Выберите {desc}:</ConfigOptionsItemSpan>
                <ConfigOptionButtonContainer>
                  {Object.entries(configOptions).map(([optionKey, option]) => (
                    <ConfigOptionButton
                      key={optionKey}
                      isActive={selectedUsbCount === optionKey}
                      onClick={() => setSelectedUsbCount(optionKey)}
                    >
                      {option.countUsb}
                    </ConfigOptionButton>
                  ))}
                </ConfigOptionButtonContainer>
              </ConfigOptionsContainer>
            ))}
          </ConfigContainer>
        )}
      </EquipmentInfoContainer>
    </ContentWrapper>
  );
};