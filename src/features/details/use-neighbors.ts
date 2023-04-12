import { useSelector } from 'react-redux';
import { loadNeighborsByBorder } from './details-slice';
import { useEffect } from 'react';
import { selectNeighbors } from './details-selectors';
import { useAppDispatch } from 'store';

export const useNeighbors = (borders: string[] = []): string[] => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);

  if (neighbors.length) return neighbors.map((country) => country.name.common);
  return [];
};
