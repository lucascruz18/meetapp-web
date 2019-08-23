export function creationMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function creationMeetupSuccess() {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
  };
}

export function meetupFailure() {
  return {
    type: '@auth/MEETUP_FAILURE',
  };
}
