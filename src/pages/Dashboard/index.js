import React from 'react';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container, MeetupList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">Novo meetup</button>
      </header>

      <ul>
        <MeetupList>
          <strong>Meetup de React-Native</strong>
          <div>
            <p>24 de junho, às 20h</p>
            <Link to="/">
              <MdAddCircleOutline size={25} color="#FFF" />
            </Link>
          </div>
        </MeetupList>
        <MeetupList>
          <strong>Meetup de React-Native</strong>
          <div>
            <p>24 de junho, às 20h</p>
            <Link to="/">
              <MdAddCircleOutline size={25} color="#FFF" />
            </Link>
          </div>
        </MeetupList>
        <MeetupList>
          <strong>Meetup de React-Native</strong>
          <div>
            <p>24 de junho, às 20h</p>
            <Link to="/">
              <MdAddCircleOutline size={25} color="#FFF" />
            </Link>
          </div>
        </MeetupList>
        <MeetupList>
          <strong>Meetup de React-Native</strong>
          <div>
            <p>24 de junho, às 20h</p>
            <Link to="/">
              <MdAddCircleOutline size={25} color="#FFF" />
            </Link>
          </div>
        </MeetupList>
        <MeetupList>
          <strong>Meetup de React-Native</strong>
          <div>
            <p>24 de junho, às 20h</p>
            <Link to="/">
              <MdAddCircleOutline size={25} color="#FFF" />
            </Link>
          </div>
        </MeetupList>
      </ul>
    </Container>
  );
}
