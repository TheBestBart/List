import React, { ReactNode } from "react";
import { Arrow } from "./svg";
import Container from "./Container";
import { ReturnedData } from "../services/PaginationService";

const Pagination: React.FC<ReturnedData> = ({ activePage, quantityOfPages, decrementPage, handleClick, incrementPage }) => {

	return (
		<Container>
			<Container handleClick={decrementPage} className={'pagination-single'}>
				<EdgeElement
					activeNumber={activePage}
					max={quantityOfPages}
					isFirst
				/>
			</Container>
			{
				createPages(quantityOfPages, activePage, handleClick)
			}
			<Container handleClick={incrementPage} className={'pagination-single'}>
				<EdgeElement activeNumber={activePage} max={quantityOfPages} rotationDegree={180}/>
			</Container>
		</Container>
	);
};


const createPages = (quantityOfPages: number, activePage: number, action: (number: number) => void): ReactNode[] => {
	let pages: ReactNode[] = [];

	for(let i: number = 1; i <= quantityOfPages; i++) {
		let page = <Container key={i}className={ i === activePage ? 'pagination-active-class-link' : 'pagination-single'} handleClick={() => action(i)}>
			{i}
		</Container>

		pages.push(page);
	}

	return pages
}

export interface EdgeElementProps {
	activeNumber: number;
	max: number;
	rotationDegree?: number;
	isFirst?: boolean;
}

const EdgeElement: React.FC<EdgeElementProps> = ({
	activeNumber,
	max,
	rotationDegree = 0,
	isFirst = true
}) => {
	let condition: boolean = isFirst ? activeNumber < max  : activeNumber > 0;

	return (
		<Arrow
			styles={{ transform: `rotate(${rotationDegree}deg)` }}
			className={condition ? "next-a" : "next-a-disactive"}
		/>
	);
};


export default Pagination;