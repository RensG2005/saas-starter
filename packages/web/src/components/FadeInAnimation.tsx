import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'

export default function FadeInWhenVisible({ children }: any): JSX.Element {
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
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  }