import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex mt-6">
      <motion.div
        className="p-6 flex flex-col gap-8"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-7xl leading-[5rem] tracking-wider drop-shadow-xl"
          style={{ color: '#1E3A8A' }} // Dark blue
        >
          SDE Resources Hub
        </h1>
        <h2
          className="text-4xl leading-[4rem] tracking-wider drop-shadow-xl"
          style={{ color: '#2563EB' }} // Medium blue
        >
          Get Empowered <span style={{ color: '#2563EB' }}> with </span> <br />
          Web Development
          <br />
          <span style={{ color: '#2563EB' }}> Resources </span>
        </h2>
        <p className="text-lg w-4/5" style={{ color: '#60A5FA' }}> {/* Lighter blue */}
          Explore our vast collection of web development resources, designed to
          give you the knowledge and tools you need to
          <br />
          succeed in the world of web development!
        </p>
      </motion.div>
    </div>
  );
}
