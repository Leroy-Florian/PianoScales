import React from 'react';
import {BaseModal} from './BaseModal';

import {useAppDispatch, useAppSelector} from '../../store/type';

import {closeModal} from '../../store/modal/slicer';
import {toggleMajorScale} from '../../store/settings/slicer';


export const SettingsModal = () => {
  const dispatchStore = useAppDispatch();

  const {
    scale,
  } = useAppSelector((state) => state.persistedStore.settingsStore);
  const {isSettingsModalOpen} = useAppSelector((state) => state.nonPersistedStore.modalStore);
  const Major = scale.Major;


  return (
    <BaseModal title="Settings" isOpen={isSettingsModalOpen} handleClose={()=>dispatchStore(closeModal())}>

      <form
        className="relative w-screen max-w-lg mx-auto overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl"
        role="dialog"
        aria-label="Filters"
      >

        <main className="flow-root p-6 overflow-y-auto h-96">
          <div className="-my-8 divide-y divide-gray-100">
            <div className="py-8">
              <fieldset>
                <header className="p-6 text-center">
                  <p className="text-lg font-medium">Gamme Majeur</p>
                  <label className="flex items-center text-sm">
                    {/* <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.allSelected} onChange={()=> Major.allSelected ? dispatchStore(unselectAllMajor()): dispatchStore(selectAllMajor())}/>*/}
                    <span className="ml-3 font-medium">select all</span>
                  </label>
                </header>


                <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.C} onChange={()=>dispatchStore(toggleMajorScale('C'))}/>
                      <span className="ml-3 font-medium">Do</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.D} onChange={()=>dispatchStore(toggleMajorScale('D'))}/>
                      <span className="ml-3 font-medium">Re</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.E} onChange={()=>dispatchStore(toggleMajorScale('E'))}/>
                      <span className="ml-3 font-medium">Mi</span>
                    </label>
                  </li>
                </ul>
                <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">

                  <li>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.F} onChange={()=>dispatchStore(toggleMajorScale('F'))}/>
                      <span className="ml-3 font-medium">Fa</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" checked={Major.G} onChange={()=>dispatchStore(toggleMajorScale('G'))}/>
                      <span className="ml-3 font-medium">Sol</span>
                    </label>
                  </li>

                </ul>
              </fieldset>
            </div>
          </div>
        </main>
      </form>
    </BaseModal>
  );
};


//  <div className="flex flex-col mt-2 divide-y">
//         <SettingsToggle
//           settingName="Minor harmonic"
//           flag={MinorHarmonic}
//           handler={()=>dispatchStore(toggleMinorHarmonic())}
//           description={MINOR_HARMONIC_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Minor Natural"
//           flag={MinorNatural}
//           handler={()=>dispatchStore(toggleMinorNatural())}
//           description={MINOR_NATURAL_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Minor melodic"
//           flag={MinorMelodic}
//           handler={()=>dispatchStore(toggleMinorMelodic())}
//           description={MINOR_MELODIC_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Major"
//           flag={Major}
//           handler={()=>dispatchStore(toggleMajor())}
//           description={MAJOR_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Jazz"
//           flag={Jazz}
//           handler={()=>dispatchStore(toggleJazz())}
//           description={JAZZ_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Blues"
//           flag={Blues}
//           handler={()=>dispatchStore(toggleBlues())}
//           description={BLUES_DESCRIPTION}
//         />
//         <SettingsToggle
//           settingName="Pentatonic"
//           flag={Pentatonic}
//           handler={()=>dispatchStore(togglePentatonic())}
//           description={PENTATONIC_DESCRIPTION}
//         />
//
//       </div>
