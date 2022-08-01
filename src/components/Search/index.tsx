import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search_icon.svg';
import closeIcon from '../../assets/img/close_icon.svg';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && <img onClick={onClickClear} className={styles.closeIcon} src={closeIcon} />}
    </div>
  );
};

export default Search;
