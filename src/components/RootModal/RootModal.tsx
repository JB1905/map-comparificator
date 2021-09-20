import { useModal } from 'hooks/useModal';

import { MODALS } from 'constants/collections/modals';

import './RootModal.scss';

const RootModal = () => {
  const { modalType } = useModal();

  if (!modalType) return null;

  // TODO
  const SpecificModal = MODALS[modalType];

  return <SpecificModal />;
};

// TODO?
export default RootModal;
