import { useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useAnimationContext } from '../../context/AnimationContext/animationContext';

export default function CustomizedConfetti() {

const {isAnimationTrue , setAnimation} = useAnimationContext();

  useEffect(() => {
    const timer = setTimeout(() => {
        setAnimation(false);
    }, 7000); 

    return () => clearTimeout(timer);
  }, [isAnimationTrue , setAnimation]);

  return isAnimationTrue? (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh' }}>
      <ReactConfetti
        numberOfPieces={150}
        colors={['#ff0000', '#00ff00', '#0000ff']}
        tweenDuration={2000}
      />
    </div>
  ) : null; 
}
