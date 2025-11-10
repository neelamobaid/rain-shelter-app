import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Shield, MapPin, Users, Bell } from 'lucide-react-native';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onGetStarted: () => void;
}

export default function LoadingScreen({ onGetStarted }: LoadingScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ambientGlow1} />
      <View style={styles.ambientGlow2} />

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.ripple1} />
          <View style={styles.ripple2} />
          <View style={styles.ripple3} />
          <Image
            source={require('@/assets/images/Water Droplet and Ripples Icon.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Rain Shelter</Text>
        <Text style={styles.subtitle}>Your Safety, Our Priority</Text>

        {showContent && (
          <View style={styles.features}>
            <View style={styles.feature}>
              <MapPin size={24} color="#06b6d4" />
              <Text style={styles.featureText}>Find Nearby Shelters</Text>
            </View>
            <View style={styles.feature}>
              <Bell size={24} color="#06b6d4" />
              <Text style={styles.featureText}>Real-Time Alerts</Text>
            </View>
            <View style={styles.feature}>
              <Users size={24} color="#06b6d4" />
              <Text style={styles.featureText}>Connect with Rescuers</Text>
            </View>
            <View style={styles.feature}>
              <Shield size={24} color="#06b6d4" />
              <Text style={styles.featureText}>Emergency SOS</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ambientGlow1: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#06b6d4',
    opacity: 0.1,
    top: -100,
    left: -100,
  },
  ambientGlow2: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#0ea5e9',
    opacity: 0.15,
    bottom: -50,
    right: -50,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    maxWidth: 450,
    width: '100%',
  },
  logoContainer: {
    position: 'relative',
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  ripple1: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#06b6d4',
    opacity: 0.4,
  },
  ripple2: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#0ea5e9',
    opacity: 0.3,
  },
  ripple3: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#14b8a6',
    opacity: 0.2,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 48,
  },
  features: {
    width: '100%',
    gap: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    gap: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#e2e8f0',
    fontWeight: '500',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#06b6d4',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
