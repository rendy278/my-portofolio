import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#87CEFA" },
          opacity: { value: 0.8, random: false },
          size: { value: 8, random: true },
          links: {
            enable: true,
            distance: 100,
            color: "#808080",
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            random: false,
            straight: false,
            outMode: "bounce", // Ubah 'out_mode' menjadi 'outMode'
          },
        },
        interactivity: {
          detectsOn: "canvas", // Ubah 'detect_on' menjadi 'detectsOn'
          events: {
            onHover: { enable: true, mode: "bubble" }, // Ubah 'onhover' menjadi 'onHover'
            onClick: { enable: true, mode: "repulse" }, // Ubah 'onclick' menjadi 'onClick'
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              size: 20,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
            remove: { quantity: 2 },
          },
        },
        background: { color: "#F5F5F5" },
        detectRetina: false, // Ubah 'retina_detect' menjadi 'detectRetina'
      }}
    />
  );
};

export default ParticlesBackground;
