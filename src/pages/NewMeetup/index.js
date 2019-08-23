import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { creationMeetupRequest } from '../../store/modules/meetups/actions';

import BannerInput from '../../components/BannerInput';
import DatePicker from '../../components/DatePicker';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(creationMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          className="text-area"
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <div>
          <button type="submit">Salvar meetup</button>
        </div>
      </Form>
    </Container>
  );
}
