import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const Modal = ({ isOpen, setIsOpen, type, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-black/50 backdrop-blur fixed inset-0 z-50 grid place-items-center overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-lg shadow-lg drop-shadow-md relative"
          >
            {type === "success" ? (
              <FiCheckCircle className="text-brand-600 text-[60px] mx-auto mb-4" />
            ) : (
              <FiAlertCircle className="text-red-500 text-[60px] mx-auto mb-4" />
            )}
            <h3 className="text-2xl font-bold text-center mb-4">
              {type === "success" ? "Success!" : "Error"}
            </h3>
            <p className="text-center text-gray-300 mb-6">{message}</p>
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className={`px-6 py-2 ${
                  type === "success" ? "bg-brand-600" : "bg-red-500"
                } text-white font-semibold rounded hover:opacity-90 transition`}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
