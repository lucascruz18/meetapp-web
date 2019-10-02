import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { creationMeetupRequest } from '../../store/modules/meetups/actions';

import BannerInput from '../../components/BannerInput';
import DateInput from '../../components/DateInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
  banner_id: Yup.number(),
  date: Yup.date(),
});

export default function NewMeetup() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(creationMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          className="text-area"
        />
        <DateInput name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <div>
          <button type="submit">Salvar meetup</button>
        </div>
      </Form>
    </Container>
  );
}
