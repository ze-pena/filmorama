import classNames from 'classnames';

import { ButtonClick } from '@interfaces/Forms';

import './styles.scss';

type PaginationConfig = {
  currentPage: number;
  totalPages: number;
  clickPagination: (event: ButtonClick) => void;
};

type Page = {
  id: number;
  value: number;
};

function createPagination(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return { pageStart: 1, pageFinish: 5 };
  }

  if (currentPage - 2 < 1) {
    return { pageStart: 1, pageFinish: 5 };
  }

  if (currentPage + 2 > totalPages) {
    return { pageStart: totalPages - 4, pageFinish: totalPages };
  }

  return { pageStart: currentPage - 2, pageFinish: currentPage + 2 };
}

function NumberPagination(props: PaginationConfig) {
  const { currentPage, totalPages, clickPagination } = props;
  const pages: Page[] = [];
  const { pageStart, pageFinish } = createPagination(currentPage, totalPages);

  for (let i = pageStart; i <= pageFinish; i++) {
    pages.push({ id: i - 1, value: i });
  }

  return (
    <div className="number-pagination">
      <menu className="number-pagination__menu">
        {pages.map(page => (
          <li
            key={page.id}
            className={classNames('number-pagination__menu__item', {
              '--current': page.value === currentPage,
            })}>
            <button type="button" value={page.value} onClick={clickPagination}>
              {page.value}
            </button>
          </li>
        ))}
      </menu>
    </div>
  );
}

export default NumberPagination;
