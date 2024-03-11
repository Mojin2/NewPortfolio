import { Sphere, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export const BubbleAnimation = (props) => {
  const { section, viewport } = props;
  return (
    <group>
      <motion.group
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          y: section === 1 ? 1 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
      <motion.group
        initial={{ opacity: 0, scale: 0, x: 0.7, z: -0.3 }}
        animate={{
          y: section === 1 ? 0.9 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
      <motion.group
        initial={{ opacity: 0, scale: 0, x: -0.3 }}
        animate={{
          y: section === 1 ? 0.9 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
      <motion.group
        initial={{ opacity: 0, scale: 0, x: 0.6, z: -0.3 }}
        animate={{
          y: section === 1 ? 0.9 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 3 }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
      <motion.group
        initial={{ opacity: 0, scale: 0, x: 0.2, z: -0.3 }}
        animate={{
          y: section === 1 ? 0.9 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 4 }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
      <motion.group
        initial={{ opacity: 0, scale: 0, x: -0.9, z: -0.3 }}
        animate={{
          y: section === 1 ? 0.9 : -2,
          scale: section === 1 ? 0.8 : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 5 }}
      >
        <Sphere scale={0.1} position={[0, -viewport.height + 10, 0.3]}>
          <meshPhongMaterial transparent opacity={0.3} color="green" />
        </Sphere>
      </motion.group>
    </group>
  );
};
