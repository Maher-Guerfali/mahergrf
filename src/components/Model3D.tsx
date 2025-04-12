import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

interface ModelProps {
  onThemeChange: () => void;
}

const synth = new Tone.Synth().toDestination();
const xNotes = ['C4', 'E4', 'G4', 'B4'];
const oNotes = ['D4', 'F4', 'A4'];

const Model2D: React.FC<ModelProps> = ({ onThemeChange }) => {
  const [lastNote, setLastNote] = useState<string>('');
  const [xNoteIndex, setXNoteIndex] = useState(0);
  const [oNoteIndex, setONoteIndex] = useState(0);
  const [pitch, setPitch] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioInitialized = useRef<boolean>(false);
  
  // Track which buttons are currently pressed
  const [activeButtons, setActiveButtons] = useState({
    triangle: false,
    x: false,
    o: false,
    square: false
  });

  // Add a ref to track if a button sound is already playing
  const isPlayingRef = useRef<{[key: string]: boolean}>({
    triangle: false,
    x: false,
    o: false,
    square: false
  });

  useEffect(() => {
    const initializeAudio = async () => {
      if (!audioInitialized.current) {
        try {
          await Tone.start();
          audioInitialized.current = true;
          console.log('Audio context started');
        } catch (error) {
          console.error('Error initializing audio:', error);
        }
      }
    };

    const handleTouch = () => {
      initializeAudio();
    };

    document.addEventListener('touchstart', handleTouch, { once: true });
    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  const playNote = async (note: string) => {
    try {
      if (!audioInitialized.current) {
        await Tone.start();
        audioInitialized.current = true;
      }
      
      const baseNote = note.slice(0, -1);
      const octave = parseInt(note.slice(-1)) + pitch;
      const adjustedNote = `${baseNote}${octave}`;
      synth.triggerAttackRelease(adjustedNote, '8n');
      setLastNote(adjustedNote);
    } catch (error) {
      console.error('Error playing note:', error);
    }
  };

  const handleButtonClick = async (button: string) => {
    // Prevent double triggering by checking if already playing
    if (isPlayingRef.current[button]) return;
    
    isPlayingRef.current[button] = true;
    
    try {
      if (!audioInitialized.current) {
        await Tone.start();
        audioInitialized.current = true;
      }
      
      switch (button) {
        case 'triangle':
          onThemeChange();
          setPitch((prev) => (prev + 1) % 3);
          synth.triggerAttackRelease(`E${4 + pitch}`, '8n');
          break;
        case 'x':
          playNote(xNotes[xNoteIndex]);
          setXNoteIndex((prev) => (prev + 1) % xNotes.length);
          break;
        case 'o':
          playNote(oNotes[oNoteIndex]);
          setONoteIndex((prev) => (prev + 1) % oNotes.length);
          break;
        case 'square':
          if (lastNote) {
            synth.triggerAttackRelease(lastNote, '8n');
          }
          break;
      }
    } catch (error) {
      console.error('Error handling button click:', error);
    }
  };

  // Handle button press down
  const handleButtonDown = (button: string) => {
    setActiveButtons(prev => ({ ...prev, [button]: true }));
    handleButtonClick(button);
  };

  // Handle button press up
  const handleButtonUp = (button: string) => {
    setActiveButtons(prev => ({ ...prev, [button]: false }));
    // Reset the playing status when button is released
    isPlayingRef.current[button] = false;
  };

  return (
    <div ref={containerRef} className="relative w-full md:h-[500px] h-[400px] flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Triangle Button (Top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <button
            onMouseDown={() => handleButtonDown('triangle')}
            onMouseUp={() => handleButtonUp('triangle')}
            onMouseLeave={() => handleButtonUp('triangle')}
            onTouchStart={(e) => {
              e.preventDefault(); // Prevent default to avoid double triggers
              handleButtonDown('triangle');
            }}
            onTouchEnd={(e) => {
              e.preventDefault(); // Prevent default to avoid double triggers
              handleButtonUp('triangle');
            }}
            className="ps-button transition-transform duration-150"
            style={{ transform: activeButtons.triangle ? 'scale(0.9)' : 'scale(1)' }}
          >
            <img
              src="/assets/buttons/triangle.png"
              alt="Triangle Button"
              className="w-16 h-16 object-contain"
              style={{ transform: 'translateY(-6px)' }} // Lift the image upward
            />
          </button>
        </div>

        {/* Circle Button (Right) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button
            onMouseDown={() => handleButtonDown('o')}
            onMouseUp={() => handleButtonUp('o')}
            onMouseLeave={() => handleButtonUp('o')}
            onTouchStart={(e) => {
              e.preventDefault();
              handleButtonDown('o');
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleButtonUp('o');
            }}
            className="ps-button transition-transform duration-150"
            style={{ transform: activeButtons.o ? 'scale(0.9)' : 'scale(1)' }}
          >
            <img
              src="/assets/buttons/circle.png"
              alt="Circle Button"
              className="w-16 h-16 object-contain"
              style={{ transform: 'translateY(-6px)' }}
            />
          </button>
        </div>

        {/* Square Button (Left) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button
            onMouseDown={() => handleButtonDown('square')}
            onMouseUp={() => handleButtonUp('square')}
            onMouseLeave={() => handleButtonUp('square')}
            onTouchStart={(e) => {
              e.preventDefault();
              handleButtonDown('square');
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleButtonUp('square');
            }}
            className="ps-button transition-transform duration-150"
            style={{ transform: activeButtons.square ? 'scale(0.9)' : 'scale(1)' }}
          >
            <img
              src="/assets/buttons/square.png"
              alt="Square Button"
              className="w-16 h-16 object-contain"
              style={{ transform: 'translateY(-6px)' }}
            />
          </button>
        </div>

        {/* Cross Button (Bottom) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <button
            onMouseDown={() => handleButtonDown('x')}
            onMouseUp={() => handleButtonUp('x')}
            onMouseLeave={() => handleButtonUp('x')}
            onTouchStart={(e) => {
              e.preventDefault();
              handleButtonDown('x');
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleButtonUp('x');
            }}
            className="ps-button transition-transform duration-150"
            style={{ transform: activeButtons.x ? 'scale(0.9)' : 'scale(1)' }}
          >
            <img
              src="/assets/buttons/cross.png"
              alt="Cross Button"
              className="w-16 h-16 object-contain"
              style={{ transform: 'translateY(-6px)' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model2D;