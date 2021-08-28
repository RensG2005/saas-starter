import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'

export default function FadeInWhenVisible({ children }: any) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }