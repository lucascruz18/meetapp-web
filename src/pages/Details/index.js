import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import { MdModeEdit, MdDeleteForever, MdToday, MdPlace } from 'react-icons/md';
import api from '../../services/api';
import history from '../../services/history';

import Loading from '../../components/Loading';

import { Container } from './styles';

export default function Details({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  const dateFormatted = date =>
    format(date, "d 'de' MMMM 'às' H:mm'h'", { locale: pt });

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await api.get(`meetup/${id}`);

      setMeetup({
        ...data,
        date: dateFormatted(parseISO(data.date)),
        banner: data.banner.url,
      });

      setLoading(false);
    }

    loadMeetups();
  }, [id]);

  function handleEdit() {
    history.push(`/edit/${id}`);
  }

  async function handleDelete(idMeetup) {
    try {
      await api.delete(`/meetup/${idMeetup}`);
      toast.success('Meetup cancelado com sucesso!');
      history.push('/');
    } catch (err) {
      toast.error('Erro ao excluir meetup.');
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <header>
            <strong>{meetup.title}</strong>
            <div>
              <button type="button" onClick={handleEdit}>
                <MdModeEdit size={20} color="#FFF" />
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(meetup.id)}>
                <MdDeleteForever size={20} color="#FFF" />
                Cancelar
              </button>
            </div>
          </header>

          <img src={meetup.banner} alt="Banner" />

          <p>{meetup.description}</p>

          <footer>
            <div>
              <MdToday size={20} />
              {meetup.date}
            </div>
            <div>
              <MdPlace size={20} />
              {meetup.location}
            </div>
          </footer>
        </Container>
      )}
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
