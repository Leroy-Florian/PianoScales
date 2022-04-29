import { BaseModal } from './BaseModal'
import {dispatchStore, useAppSelector} from "../../store/type";
import {closeModal} from "../../store/Modal/Slicer";



export const InfoModal = () => {
    const {isInfoModalOpen} = useAppSelector(state => state.persistedStore.modalStore);
    return (
        <BaseModal title="How to play" isOpen={isInfoModalOpen} handleClose={()=> dispatchStore(closeModal())}>
    <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
    change to show how close your guess was to the word.
    </p>

    <div className="flex justify-center mb-1 mt-4">

        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
    </p>

    <div className="flex justify-center mb-1 mt-4">

        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
    </p>

    <div className="flex justify-center mb-1 mt-4">

        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
    </p>

    </BaseModal>
)
}
