import reducer, {toggleInfoModal, toggleSettingsModal, closeModal} from '../store/modal/slicer';


test('should Toggle Sections modal ', () => {
  const previousState = {
    isInfoModalOpen: false,
    isSettingsModalOpen: false,
  };
  expect(reducer(previousState, toggleInfoModal())).toEqual(
      {
        isInfoModalOpen: true,
        isSettingsModalOpen: false,
      },
  );
});


test('should Toggle settings modal ', () => {
  const previousState = {
    isInfoModalOpen: false,
    isSettingsModalOpen: false,
  };
  expect(reducer(previousState, toggleSettingsModal())).toEqual(
      {
        isInfoModalOpen: false,
        isSettingsModalOpen: true,
      },
  );
});


test('should close setting modal ', () => {
  const previousState = {
    isInfoModalOpen: false,
    isSettingsModalOpen: true,
  };
  expect(reducer(previousState, closeModal())).toEqual(
      {
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
      },
  );
});

test('should close info modal ', () => {
  const previousState = {
    isInfoModalOpen: true,
    isSettingsModalOpen: false,
  };
  expect(reducer(previousState, closeModal())).toEqual(
      {
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
      },
  );
});
test('should close all modal ', () => {
  const previousState = {
    isInfoModalOpen: true,
    isSettingsModalOpen: true,
  };
  expect(reducer(previousState, closeModal())).toEqual(
      {
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
      },
  );
});


