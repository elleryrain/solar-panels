import { FC } from "react";
import styled from "styled-components";
import { ConfigItem } from "./ConfigItem";

interface IConfiguratorProps {
  idWorkstation: number;
}
interface IConfigItem {
  [key: string]: {
    price: number;
    countUsb: number;
  };
}

export interface IModule {
  price: number;
  description: string[];
  config?: {
    [key: string]: {
      desc: string;
      configOptions: IConfigItem;
    };
  };
}
export enum ConfiguratorModules {
  quickChargeModule = "Модуль быстрой зарядки для телефона",
  invertorModule = "Модуль инвертора 200 Вт",
  leadBattery12VChargingModule = "Модуль зарядки свинцовых аккумуляторов 12В",
  powerbankModule = "Модуль powerbank",
  jumpStarterModule = "Модуль jump starter для автомобиля",
  universalVoltageModule = "Модуль универсальный с регулируемым напряжением",
  solarPanelModule = "Солнечная панель",
  solarTrackerModule = "Установка с гелиотрекером",
}
export type ModuleKeys = keyof typeof ConfiguratorModules;
export interface IWorkstationInfo {
  name: string;
  description: string[];
  quickChargeModule: IModule;
  invertorModule: IModule;
  leadBattery12VChargingModule: IModule;
  powerbankModule: IModule;
  jumpStarterModule: IModule;
  universalVoltageModule: IModule;
  solarPanelModule: IModule;
  solarTrackerModule: IModule;
}
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const StyledContainer = styled.div`
  display: block;
  max-width: 1620px;
`;
const Header = styled.h1`
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 20px;
`;
const StyledDescription = styled.p`
  font-weight: 300;
  font-size: 26px;
  margin-bottom: 15px;
`;
const DescriptionContainer = styled.div`
  margin-bottom: 50px;
`;
export const Configurator: FC = () => {
  const workStation: IWorkstationInfo = {
    name: "Кемпинг версия",
    description: [
      "Солнечная панель для тех, кто любит получать от отдыха максимум, с возможностью запитать любые электро приборы, подзарядить машину, сохранять долго энергию.",
      "8 модулей в компактом корпусе и чёрном исполнении.",
    ],
    quickChargeModule: {
      description: ["123", "123"],
      price: 15000,
    },
    invertorModule: { description: ["123", "123"], price: 15000 },
    leadBattery12VChargingModule: {
      description: ["123", "123"],
      price: 15000,
      config: {
        usb: {
          desc: "Количество usb-портов",
          configOptions: {
            "1": {
              price: 2000,
              countUsb: 1,
            },
            "2": {
              price: 5000,
              countUsb: 2,
            },
            "3": {
              price: 6000,
              countUsb: 3,
            },
          },
        },
      },
    },
    powerbankModule: {
      description: ["Позволяет зарядить до 3 устр-ств одновременно", "Выдаваемая мощность до 5 Ватт"],
      price: 15000,
      config: {
        usb: {
          desc: "Количество usb-портов",
          configOptions: {
            "1": {
              price: 2000,
              countUsb: 1,
            },
            "2": {
              price: 5000,
              countUsb: 2,
            },
            "3": {
              price: 6000,
              countUsb: 3,
            },
          },
        },
      },
    },
    jumpStarterModule: {
      description: ["123", "123", "123", "123"],
      price: 15000,
    },
    universalVoltageModule: { description: ["123", "123"], price: 15000 },
    solarPanelModule: { description: ["123", "123"], price: 15000 },
    solarTrackerModule: { description: ["123", "123"], price: 15000 },
  };

  const moduleKeys = Object.keys(workStation).filter(
    (key): key is ModuleKeys => key !== "name" && key !== "description"
  );

  return (
    <ContentWrapper>
      <StyledContainer>
        <Header>{workStation.name}</Header>
        <DescriptionContainer>
          {workStation.description.map((desc) => (
            <StyledDescription>{desc}</StyledDescription>
          ))}
        </DescriptionContainer>

        {moduleKeys.map((key) => (
          <ConfigItem
            key={key}
            name={ConfiguratorModules[key]}
            price={workStation[key].price}
            description={workStation[key].description}
            config={workStation[key].config}
          />
        ))}
      </StyledContainer>
    </ContentWrapper>
  );
};
