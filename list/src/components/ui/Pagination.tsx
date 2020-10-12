import React, { ReactNode } from "react";
import { Arrow } from "./svg";
import Container from "./Container";
import { ReturnedData } from "../services/PaginationService";

const Pagination: React.FC<ReturnedData> = ({
  activePage,
  quantityOfPages,
  decrementPage,
  handleClick,
  incrementPage
}) => {
  return (
    <Container>
      <Container handleClick={decrementPage} className={"pagination-single"}>
        <EdgeElement disabledCondition={activePage === 1} />
      </Container>
      {createPages(quantityOfPages, activePage, handleClick)}
      <Container handleClick={incrementPage} className={"pagination-single"}>
        <EdgeElement
          rotationDegree={180}
          disabledCondition={activePage === quantityOfPages}
        />
      </Container>
    </Container>
  );
};

const createPages = (
  quantityOfPages: number,
  activePage: number,
  action: (number: number) => void
): ReactNode[] => {
  let pages: ReactNode[] = [];

  for (let i: number = 1; i <= quantityOfPages; i++) {
    let page = (
      <Container
        key={i}
        className={
          i === activePage
            ? "pagination-active-class-link"
            : "pagination-single single-hide"
        }
        handleClick={() => action(i)}
      >
        {i}
      </Container>
    );

    pages.push(page);
  }

  return pages;
};

export interface EdgeElementProps {
  rotationDegree?: number;
  disabledCondition?: boolean;
}

const EdgeElement: React.FC<EdgeElementProps> = ({
  rotationDegree = 0,
  disabledCondition
}) => {
  return (
    <Arrow
      styles={{ transform: `rotate(${rotationDegree}deg)` }}
      className={disabledCondition ? "next-a-disactive" : "next-a"}
    />
  );
};

export default Pagination;
