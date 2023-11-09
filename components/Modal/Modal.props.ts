export interface IModalProps {
  title: string;
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}
