import React from "react";
import { useSelector } from "react-redux";
import {
  CurrencyContainer,
  CurrencyTableBody,
  CurrencyTableCellHead,
  CurrencyTableHead,
  CurrencyTableHeadRow,
  CurrencyTableWrap,
} from "./CurrencyTableStyle";
import { CurrencyTableRow } from "../CurrencyTableRow/CurrencyTableRow";
// import { data } from "../../mocks/data.json";
import { SmallHidden } from "../../styles/container";
import { getCurrencyListPart } from "../../store/currency/selector";
import { TableMoreButton } from "../TableMoreButton/TableMoreButton";
import { CurrencySortButton } from "../CurrencySortButton/CurrencySortButton";
import { PossibleSortTypes } from "../../store/currency/types";

const CurrencyTable: React.FC = () => {
  const currencyList = useSelector(getCurrencyListPart);

  return (
    <CurrencyContainer>
      <CurrencyTableWrap>
        <CurrencyTableHead>
          <CurrencyTableHeadRow>
            <CurrencyTableCellHead align="center" mobileHideL>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead align="left">
            </CurrencyTableCellHead>
            <CurrencyTableCellHead>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead>
            </CurrencyTableCellHead>
          </CurrencyTableHeadRow>
        </CurrencyTableHead>
        <CurrencyTableBody>
          {currencyList.map((rowData) => (
            <CurrencyTableRow key={rowData.symbol} data={rowData} />
          ))}
        </CurrencyTableBody>
      </CurrencyTableWrap>
      <TableMoreButton />
    </CurrencyContainer>
  );
};

export { CurrencyTable };
