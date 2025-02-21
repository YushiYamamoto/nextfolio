import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"  // @からチルダに変更

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>お問い合わせ</DialogTitle>
          <DialogDescription>
            お気軽にお問い合わせください。
          </DialogDescription>
        </DialogHeader>
        <ContactForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
} 