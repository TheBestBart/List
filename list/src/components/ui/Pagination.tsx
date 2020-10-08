import React, { ReactNode } from "react";
import ReactPaginate from "react-paginate";
import { Arrow } from "./svg";

export interface PaginationProps {
  pageCount: number;
  onPageChange: () => void;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  initialPage: number;
}

export interface EdgeElementProps {
	activeNumber: number,
	max: number,
	rotationDegree?: number,
	isFirst?: boolean
}

const Ellipsis: string | React.ReactNode = () => {
  return (
    <>
      <div className="ui-fadvs-pag-elipsis" />
      <div className="ui-fadvs-pag-elipsis" />
      <div className="ui-fadvs-pag-elipsis" />
    </>
  );
};

const EdgeElement: React.FC<EdgeElementProps> = ({
  activeNumber,
  max,
	rotationDegree = 0,
	isFirst = true
}) => {
	let condition: boolean = isFirst ? activeNumber < max - 1 : activeNumber > 0
  return (
    <Arrow
      styles={{ transform: `rotate(${rotationDegree}deg)` }}
      className={condition ? "next-a" : "next-a-disactive"}
    />
  );
};

const Pagination: React.FC<PaginationProps> = props => {
	let { initialPage, pageCount } = props;
	let nextLabel = <div className='pagination-single'><EdgeElement activeNumber={initialPage} max={pageCount} rotationDegree={180} isFirst/></div>
	let previousLabel = <div className='pagination-single'><EdgeElement activeNumber={initialPage} max={pageCount} /></div>

  return (
    <div className='pagination-box'>
			<ReactPaginate 
				{...props} 
				breakLabel={Ellipsis}
				activeLinkClassName={'pagination-active-class-link'} 
				containerClassName={'pagination-pages-box'}
				nextLabel={nextLabel}
				previousLabel={previousLabel}
				pageLinkClassName={'pagination-single'}
				nextLinkClassName={'pagination-edge-link'}
				previousLinkClassName={'pagination-edge-link'}
			/>
    </div>
  );
};

export {
	Pagination,
	Ellipsis,
	EdgeElement
};
