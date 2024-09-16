import { useMediaQuery } from 'react-responsive';
import TopNavBar from '../TopNavBar/TopNavBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
export default function MainHeader() {
    const isMobile = useMediaQuery({ query: '(min-width: 600px)' });
  return (
    <div className="main_header">
         {isMobile ? (
        <>
          <TopNavBar />
          <BottomNavBar />
        </>
      ) : (
        <MobileNavBar />
      )}
    </div>
  )
}
