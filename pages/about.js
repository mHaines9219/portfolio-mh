import Image from 'next/image';
import styles from '@/styles/About.module.css';
import '../styles/About.module.css';
import { useState } from 'react';

export default function About() {
  const [fontSize, setFontSize] = useState(2);
  return (
    <>
      <h1>About Me</h1>
      <p className={styles.ptag}>Software Engineer</p>
      <img src="alien.png" alt="meirl"></img>

      {/* /dynamic css with js values injected from state  */}

      <style jsx>{`
        .fontSize {
          font-size: ${fontSize}rem;
        }
      `}</style>

      <p className="fontSize">this is my brand statement</p>
      <button onClick={() => setFontSize(fontSize + 1)}> Click Me</button>

      <Image
        src="https://placekitten.com/400/600"
        alt="kitty"
        width={400}
        height={600}
      />
    </>
  );
}


//https://space-book-5ba0b58adc3c.herokuapp.com/profiles spacebook