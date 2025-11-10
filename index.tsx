import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoadingScreen from '@/components/LoadingScreen';
import LandingPage from '@/components/LandingPage';
import UserDashboard from '@/components/UserDashboard';
import RescuerLogin from '@/components/RescuerLogin';
import RescuerRegistration from '@/components/RescuerRegistration';
import RescuerDashboard from '@/components/RescuerDashboard';
import MapView from '@/components/MapView';
import OfflineUpdates from '@/components/OfflineUpdates';

type Screen =
  | 'loading'
  | 'landing'
  | 'userDashboard'
  | 'rescuerLogin'
  | 'rescuerRegistration'
  | 'rescuerDashboard'
  | 'mapView'
  | 'offlineUpdates';

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <LoadingScreen onGetStarted={() => setCurrentScreen('landing')} />;

      case 'landing':
        return (
          <LandingPage
            onNeedHelp={() => setCurrentScreen('userDashboard')}
            onCanHelp={() => setCurrentScreen('rescuerLogin')}
          />
        );

      case 'userDashboard':
        return (
          <UserDashboard
            onBack={() => setCurrentScreen('landing')}
            onSOS={() => console.log('SOS activated')}
            onViewMap={() => setCurrentScreen('mapView')}
            onOfflineMode={() => setCurrentScreen('offlineUpdates')}
          />
        );

      case 'rescuerLogin':
        return (
          <RescuerLogin
            onBack={() => setCurrentScreen('landing')}
            onLogin={() => setCurrentScreen('rescuerDashboard')}
            onRegister={() => setCurrentScreen('rescuerRegistration')}
          />
        );

      case 'rescuerRegistration':
        return (
          <RescuerRegistration
            onBack={() => setCurrentScreen('rescuerLogin')}
            onRegister={() => setCurrentScreen('rescuerDashboard')}
          />
        );

      case 'rescuerDashboard':
        return (
          <RescuerDashboard
            onBack={() => setCurrentScreen('landing')}
          />
        );

      case 'mapView':
        return (
          <MapView
            onBack={() => setCurrentScreen('userDashboard')}
          />
        );

      case 'offlineUpdates':
        return (
          <OfflineUpdates
            onBack={() => setCurrentScreen('userDashboard')}
          />
        );

      default:
        return <LoadingScreen onGetStarted={() => setCurrentScreen('landing')} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
