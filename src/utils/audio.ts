// Simple Web Audio API synthesizer for interactive sound effects
// No need to load external MP3 files!

let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const playBubblePop = () => {
  try {
    initAudio();
    if (!audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Bubble pop sound: quick frequency drop
    osc.type = 'sine';
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
    
    // Quick volume envelope
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.5, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.1);
  } catch (e) {
    console.error("Audio error", e);
  }
};

export const playMeow = () => {
  try {
    initAudio();
    if (!audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Meow sound: triangle wave sliding up then down
    osc.type = 'triangle';
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.linearRampToValueAtTime(800, now + 0.2);
    osc.frequency.linearRampToValueAtTime(500, now + 0.5);
    
    // Envelope
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.3);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
    
    osc.start(now);
    osc.stop(now + 0.5);
  } catch (e) {
    console.error("Audio error", e);
  }
};

export const playCoin = () => {
  try {
    initAudio();
    if (!audioCtx) return;
    
    // Coins dropping: two high frequency pings slightly offset
    const now = audioCtx.currentTime;
    
    const playPing = (freq: number, timeOffset: number) => {
      const osc = audioCtx!.createOscillator();
      const gainNode = audioCtx!.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx!.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + timeOffset);
      
      gainNode.gain.setValueAtTime(0, now + timeOffset);
      gainNode.gain.linearRampToValueAtTime(0.2, now + timeOffset + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + timeOffset + 0.3);
      
      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.3);
    };
    
    playPing(2000, 0);
    playPing(2500, 0.05);
  } catch (e) {
    console.error("Audio error", e);
  }
};
