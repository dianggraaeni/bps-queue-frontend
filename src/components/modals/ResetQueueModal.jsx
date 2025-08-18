import React, { useState } from "react";
import ConfirmModal from "../guest/ConfirmModal";
import { resetQueue } from "../../service/api/api";
import { toast } from "react-toastify";

const ResetQueueModal = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await resetQueue(); // ⬅️ panggil API reset antrian
      toast.success("Nomor antrian berhasil direset!");
      onClose();
    } catch (err) {
      console.error("Gagal reset antrian:", err);
      toast.error("Gagal mereset antrian. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfirmModal
      show={show}
      onClose={onClose}
      onConfirm={handleConfirm}
      message="Yakin ingin mereset nomor antrian saat ini?"
      modalTitle="Konfirmasi"
      loading={loading} // kalau ConfirmModal punya prop loading bisa dipass
    />
  );
};

export default ResetQueueModal;
