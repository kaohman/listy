import { setLoading, setError, updateNote, togglePopup } from '../actions';
import API from '../utils/api';

export const putNote = (note) => {
  const { id, title, issues } = note;
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await API.fetchData(`notes/${id}`, 'PUT', { title, issues });
      dispatch(setLoading(false));
      dispatch(updateNote(note));
      dispatch(togglePopup(false));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}