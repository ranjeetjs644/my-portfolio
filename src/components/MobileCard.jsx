// New component for mobile-optimized cards
import { motion } from 'framer-motion';
const MobileCard = ({ children, className }) => (
    <motion.div
        whileTap={{ scale: 0.98 }}
        className={`bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-md 
    border border-gray-800/50 shadow-lg rounded-2xl p-4 
    hover:border-blue-500/30 transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

export default MobileCard;