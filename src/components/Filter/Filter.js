import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/seletors';
import { setFilterValue } from 'redux/actions';
import { Label, Button } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleSearch = e => dispatch(setFilterValue(e.target.value));

  return (
    <>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleSearch}
        />
      </Label>
      <Button onClick={handleSearch}>New search</Button>
    </>
  );
};
