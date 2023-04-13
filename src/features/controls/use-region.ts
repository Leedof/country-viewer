import { useSelector } from 'react-redux';
import { setRegion } from './controls-slice';
import { selectRegion } from './controls-selectors';
import { useAppDispatch } from 'store';
import { RegionOption } from './CustomSelect';
import { Regions } from 'types';
import { SingleValue } from 'react-select';

type onSelect = (reg: SingleValue<RegionOption>) => void;

export const useRegion = (): [Regions | '', onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(''));
    }
  };
  return [region, handleSelect];
};
