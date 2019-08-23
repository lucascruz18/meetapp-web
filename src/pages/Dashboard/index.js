import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline } from 'react-icons/md';
import api from '../../services/api';

import { Container, MeetupList } from './styles';

export default function Dashboard() {
  // const [page, setPage] = useState([]);
  const [meetups, setMeetups] = useState([]);
  // const [date, setDate] = useState([]);

  const dateFormatted = date =>
    format(date, "d 'de' MMMM 'às' H:mm'h'", { locale: pt });

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups', {});

      const data = response.data.map(meetup => ({
        ...meetup,
        date: dateFormatted(parseISO(meetup.date)),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, [dateFormatted, meetups]);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newMeetup">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <MeetupList key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.date}</span>
              <Link to="/">
                <MdAddCircleOutline size={25} color="#FFF" />
              </Link>
            </div>
          </MeetupList>
        ))}
      </ul>
    </Container>
  );
}
