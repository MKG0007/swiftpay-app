import React from 'react'
import { AlertTriangle } from 'lucide-react'
import Modal from './Modal'

export default function ConfirmModal({ open, onClose, onConfirm, title = 'Confirm', message, confirmLabel = 'Confirm', confirmClass = 'btn-danger', loading = false }) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle size={20} className="text-red-500" />
          </div>
          <p className="text-sm text-gray-600 pt-2">{message}</p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={onClose} className="btn-secondary flex-1" disabled={loading}>
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className={`${confirmClass} flex-1`} disabled={loading}>
            {loading ? 'Please wait...' : confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  )
}
