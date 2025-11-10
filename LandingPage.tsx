import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Shield, Users, MapPin, AlertCircle } from 'lucide-react-native';

interface LandingPageProps {
  onNeedHelp: () => void;
  onCanHelp: () => void;
}

export default function LandingPage({ onNeedHelp, onCanHelp }: LandingPageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Water Droplet and Ripples Icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Rain Shelter</Text>
        <Text style={styles.subtitle}>Emergency Flood Relief System</Text>
      </View>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.cardPrimary} onPress={onNeedHelp}>
          <View style={styles.iconContainer}>
            <Shield size={48} color="#000000" strokeWidth={2.5} />
          </View>
          <Text style={styles.cardTitle}>I Need Help</Text>
          <Text style={styles.cardDescription}>
            Find nearby shelters, request rescue, and get emergency assistance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardSecondary} onPress={onCanHelp}>
          <View style={styles.iconContainerSecondary}>
            <Users size={48} color="#06b6d4" strokeWidth={2.5} />
          </View>
          <Text style={styles.cardTitleSecondary}>I Can Help</Text>
          <Text style={styles.cardDescriptionSecondary}>
            Volunteer as a rescuer, manage requests, and coordinate relief efforts
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trustIndicators}>
        <View style={styles.indicator}>
          <MapPin size={20} color="#06b6d4" />
          <Text style={styles.indicatorText}>Real-time tracking</Text>
        </View>
        <View style={styles.indicator}>
          <AlertCircle size={20} color="#06b6d4" />
          <Text style={styles.indicatorText}>24/7 Emergency support</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
  },
  cards: {
    gap: 16,
    marginBottom: 32,
  },
  cardPrimary: {
    backgroundColor: '#06b6d4',
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#001a1f',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardSecondary: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
  iconContainerSecondary: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
  cardTitleSecondary: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  cardDescriptionSecondary: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 20,
  },
  trustIndicators: {
    gap: 12,
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
  },
  indicatorText: {
    fontSize: 14,
    color: '#cbd5e1',
    fontWeight: '500',
  },
});
