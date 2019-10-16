import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { updateMeetupRequest } from '../../store/modules/meetups/actions';

import api from '../../services/api';
import history from '../../services/history';

import Loading from '../../components/Loading';
import BannerInput from '../../components/BannerInput';
import DateInput from '../../components/DateInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
  id_image: Yup.number(),
  date: Yup.date(),
});

export default function EditMeetup({ match }) {
  const dispatch = useDispatch();
  const id = useMemo(() => match.params.id, [match.params.id]);

  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const { data } = await api.get(`meetup/${id}`);
        setMeetup({
          ...data,
          date: parseISO(data.date),
          url: data.banner.url,
        });

        setLoading(false);
      } catch (err) {
        toast.error('Evento inexistente');
        history.push('/');
      }
    }

    loadMeetups();
  }, [id]);

  function handleSubmit(data) {
    data.id = id;
    dispatch(updateMeetupRequest(data));
  }

  return (
    <>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <Container>
          <Form initialData={meetup} onSubmit={handleSubmit} schema={schema}>
            <BannerInput id="banner" name="banner_id" />

            <Input name="title" placeholder="Título do Meetup" />
            <Input
              multiline
              name="description"
              placeholder="Descrição completa"
            />
            <DateInput name="date" placeholder="Data do meetup" />
            <Input name="location" placeholder="Localização" />

            <div>
              <button type="submit">Salvar meetup</button>
            </div>
          </Form>
        </Container>
      )}
    </>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
