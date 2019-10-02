import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetups;
        break;
      }

      default:
    }
  });
}
