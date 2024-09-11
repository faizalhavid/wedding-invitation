'use client'
import { Suspense, useEffect, useRef, useState } from 'react';
import { Invitation } from './pages/invitation';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Introduction from './pages/introduction';
import Calendar from './pages/calendar';
import Location from './pages/location';
import DigitalEnvelope from './pages/digital-envelope';
import BarTimer from '@/components/BarTimer';
import RSVP from './pages/rsvp';
import BottomNavigator from '@/components/BottomNavigator';
import { CalendarDateRangeIcon, CheckBadgeIcon, GlobeEuropeAfricaIcon, HomeIcon, LinkIcon } from '@heroicons/react/16/solid';
import { MinusSmallIcon } from '@heroicons/react/20/solid';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guestName');
  const [showInvitation, setShowInvitation] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      component: <Invitation key="invitation" guestName={guestName || 'Tamu'} showInvitation={showInvitation} setShowInvitation={setShowInvitation} />,
      duration: 8000,
      icon: HomeIcon
    },
    {
      component: <Introduction key="introduction" />,
      duration: 8000,
      icon: LinkIcon
    },
    {
      component: <Calendar key="calendar" />,
      duration: 10000,
      icon: CalendarDateRangeIcon
    },
    {
      component: <Location key="location" />,
      duration: 15000,
      icon: GlobeEuropeAfricaIcon
    },
    {
      component: <DigitalEnvelope key="digital-envelope" />,
      duration: 8000,
      icon: MinusSmallIcon
    },
    {
      component: <RSVP key="rsvp" />,
      duration: 8000,
      icon: CheckBadgeIcon
    },
  ];

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Error attempting to play audio:', error);
        });
      }
    };
    playAudio();
    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  useEffect(() => {
    if (!showInvitation) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => {
          const nextPage = prevPage + 1;
          if (nextPage >= pages.length) {
            clearInterval(interval); // Clear the interval when the last page is reached
            return prevPage; // Stay on the last page
          }
          return nextPage;
        });
      }, pages[currentPage].duration);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showInvitation, currentPage]);

  const handleNavigate = (page: number) => {
    if (page >= 0 && page < pages.length) {
      setCurrentPage(page);
    }
  };

  function renderLoading() {
    return (
      <p>
        Loading ...
      </p>
    );
  }

  const icons = pages.map(page => page.icon);

  return (
    <main className="flex min-h-screen flex-col relative bg-black">
      <audio ref={audioRef} loop>
        <source src="/background-music.m4a" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Suspense fallback={renderLoading()}>
        <AnimatePresence>
          {/* <BarTimer key="bar-timer" start={!showInvitation} time={pages[currentPage].duration / 1000} countPage={pages.length} currentPage={currentPage} /> */}
          {pages[currentPage].component}
        </AnimatePresence>
      </Suspense>

      {/* <BottomNavigator
        currentPage={currentPage}
        totalPages={pages.length}
        onNavigate={handleNavigate}
        icons={icons}
      /> */}
    </main>
  );
}