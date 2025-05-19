import SolarPanel from "../../../assets/img/SolarPanelFooter.svg?react";
import styled from "styled-components";
import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth.tsx";

const Text = styled.div`
  font-family: Jost, sans-serif;
  color: #c1c1c1;
  font-size: 20px;
  font-weight: 400;
  width: 369px;
  text-align: left;
  @media (max-width: 1700px) {
    font-size: 18px;
  }
  @media (max-width: 1149px) {
    align-self: flex-end;
    margin-top: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    width: 340px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    width: 290px;
  }
`;

export function CompanyInfo() {
  // @ts-ignore
  const isMobile = useWindowDimensions().width < 1150;

  return isMobile ? (
    <Text>
      ООО "ГелиоТрек" ИНН: 6800007045 ОГРН: 1236800006002 КПП: 680001001
    </Text>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "45px",
        alignItems: "center",
      }}
    >
      <SolarPanel />
      <Text>
        ООО "ГелиоТрек" ИНН: 000000000000 ОГРН: 1236800006002 КПП: 680001001
      </Text>
    </div>
  );
}
