import reducer, {
  toggleInfoModal,
  toggleSettingsModal,
  closeModal,
  toggleLooseModal,
  toggleWinModal,
} from '../store/modal/slicer';
import {ModalState} from '../domain/models/modal';

const initialState : ModalState = {
  isInfoModalOpen: false,
  isSettingsModalOpen: false,
  isLooseModalOpen: false,
  isWinModalOpen: false,
};

test('should Open Sections modal ', () => {
  expect(reducer(initialState, toggleInfoModal())).toEqual(
      {
        ...initialState,
        isInfoModalOpen: true,
      },
  );
});

test('should Open settings modal ', () => {
  expect(reducer(initialState, toggleSettingsModal()))
      .toEqual( {...initialState, isSettingsModalOpen: true} );
});

test('should Open modal Loose modal ', () => {
  expect(reducer(initialState, toggleLooseModal()))
      .toEqual( {...initialState, isLooseModalOpen: true},
      );
});

test('should close modal Loose modal ', () => {
  const previousState = {...initialState, isLooseModalOpen: true};
  expect(reducer(previousState, toggleLooseModal())).toEqual(initialState);
});


test('should Open  Won modal ', () => {
  expect(reducer(initialState, toggleWinModal()))
      .toEqual( {...initialState, isWinModalOpen: true},
      );
});

test('should close modal Won modal ', () => {
  const previousState = {...initialState, isWinModalOpen: true};
  expect(reducer(previousState, toggleWinModal())).toEqual(initialState);
});

test('should close setting modal ', () => {
  const previousState = {...initialState, isSettingsModalOpen: true};
  expect(reducer(previousState, closeModal())).toEqual( initialState );
});

test('should close info modal ', () => {
  const previousState = {...initialState, isInfoModalOpen: true};
  expect(reducer(previousState, closeModal())).toEqual(initialState);
});


test('should close all modal ', () => {
  const previousState = {
    isInfoModalOpen: true,
    isSettingsModalOpen: true,
    isLooseModalOpen: true,
    isWinModalOpen: true,
  };
  expect(reducer(previousState, closeModal())).toEqual( initialState );
});


