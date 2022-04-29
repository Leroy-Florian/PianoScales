import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import {
    BLUES_DESCRIPTION,
    JAZZ_DESCRIPTION,
    MAJOR_DESCRIPTION,
    MINOR_HARMONIC_DESCRIPTION,
    MINOR_MELODIC_DESCRIPTION,
    MINOR_NATURAL_DESCRIPTION, PENTATONIC_DESCRIPTION
} from "../../constants/strings";
import {dispatchStore, useAppSelector} from "../../store/type";
import {
    toggleBlues,
    toggleJazz,
    toggleMajor,
    toggleMinorHarmonic,
    toggleMinorMelodic,
    toggleMinorNatural,
    togglePentatonic
} from "../../store/Settings/Slicer";
import {closeModal}from "../../store/Modal/Slicer";



export const SettingsModal = () => {
    const {
        MinorHarmonic ,
        MinorNatural,
        MinorMelodic,
        Jazz ,
        Major,
        Pentatonic,
        Blues
    }
    = useAppSelector(state => state.persistedStore.settingsStore)
    const {isSettingsModalOpen} = useAppSelector(state => state.persistedStore.modalStore);

    return (
        <BaseModal title="Settings" isOpen={isSettingsModalOpen} handleClose={()=>dispatchStore(closeModal())}>
    <div className="flex flex-col mt-2 divide-y">
    <SettingsToggle
        settingName="Minor harmonic"
    flag={MinorHarmonic}
    handler={()=>dispatchStore(toggleMinorHarmonic())}
    description={MINOR_HARMONIC_DESCRIPTION}
    />
    <SettingsToggle
    settingName="Minor Natural"
    flag={MinorNatural}
    handler={()=>dispatchStore(toggleMinorNatural())}
    description={MINOR_NATURAL_DESCRIPTION}
    />
    <SettingsToggle
    settingName="Minor melodic"
    flag={MinorMelodic}
    handler={()=>dispatchStore(toggleMinorMelodic())}
    description={MINOR_MELODIC_DESCRIPTION}
    />
    <SettingsToggle
    settingName="Major"
    flag={Major}
    handler={()=>dispatchStore(toggleMajor())}
    description={MAJOR_DESCRIPTION}
    />
    <SettingsToggle
    settingName="Jazz"
    flag={Jazz}
    handler={()=>dispatchStore(toggleJazz())}
    description={JAZZ_DESCRIPTION}
    />
    <SettingsToggle
    settingName="Blues"
    flag={Blues}
    handler={()=>dispatchStore(toggleBlues())}
    description={BLUES_DESCRIPTION}
    />
        <SettingsToggle
            settingName="Pentatonic"
            flag={Pentatonic}
            handler={()=>dispatchStore(togglePentatonic())}
            description={PENTATONIC_DESCRIPTION}
        />

    </div>
    </BaseModal>
)
}
