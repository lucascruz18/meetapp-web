import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  creationMeetupSuccess,
  updateMeetupSuccess,
  meetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner_id } = payload.data;

    yield call(api.post, 'meetups', {
      title,
      description,
      date,
      location,
      file_id: banner_id,
    });

    toast.success('Meetup criada com sucesso');

    yield put(creationMeetupSuccess());

    history.push('dashboard');
  } catch (err) {
    toast.error('Falha ao criar meetup');
    yield put(meetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, date, location, banner_id } = payload.data;

    yield call(api.put, `meetup/${id}`, {
      title,
      description,
      date,
      location,
      file_id: banner_id,
    });

    toast.success('Meetup editada com sucesso');

    yield put(updateMeetupSuccess());

    history.push('dashboard');
  } catch (err) {
    toast.error('Falha ao editar meetup, verifique os dados');
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
