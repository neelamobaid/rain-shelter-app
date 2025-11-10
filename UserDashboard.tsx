import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MapPin, AlertTriangle, Phone, Map, Wifi, WifiOff, ChevronLeft } from 'lucide-react-native';

interface UserDashboardProps {
  onBack: () => void;
  onSOS: () => void;
  onViewMap: () => void;
  onOfflineMode: () => void;
}

export default function UserDashboard({ onBack, onSOS, onViewMap, onOfflineMode }: UserDashboardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#06b6d4" />
        </TouchableOpacity>
        <Image
          source={require('@/assets/images/Water Droplet and Ripples Icon.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Your Safety Dashboard</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.sosButton} onPress={onSOS}>
          <View style={styles.sosIconContainer}>
            <AlertTriangle size={64} color="#000000" strokeWidth={3} />
          </View>
          <Text style={styles.sosText}>EMERGENCY SOS</Text>
          <Text style={styles.sosSubtext}>Tap for immediate help</Text>
        </TouchableOpacity>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity style={styles.actionCard} onPress={onViewMap}>
            <View style={styles.actionIcon}>
              <Map size={28} color="#06b6d4" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>View Shelter Map</Text>
              <Text style={styles.actionDescription}>Find nearest safe locations</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={onOfflineMode}>
            <View style={styles.actionIcon}>
              <WifiOff size={28} color="#0ea5e9" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Offline Mode</Text>
              <Text style={styles.actionDescription}>Download maps for offline use</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Phone size={28} color="#14b8a6" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Emergency Contacts</Text>
              <Text style={styles.actionDescription}>Quick dial rescue services</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.statusSection}>
          <Text style={styles.sectionTitle}>Current Status</Text>

          <View style={styles.statusCard}>
            <View style={styles.statusBadge}>
              <Wifi size={16} color="#10b981" />
              <Text style={styles.statusBadgeText}>Connected</Text>
            </View>
            <Text style={styles.statusText}>You're connected to emergency services</Text>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusBadgeWarning}>
              <AlertTriangle size={16} color="#f59e0b" />
              <Text style={styles.statusBadgeTextWarning}>Weather Alert</Text>
            </View>
            <Text style={styles.statusText}>Heavy rainfall expected in your area</Text>
          </View>
        </View>

        <View style={styles.nearbySection}>
          <Text style={styles.sectionTitle}>Nearby Shelters</Text>

          <View style={styles.shelterCard}>
            <MapPin size={24} color="#06b6d4" />
            <View style={styles.shelterInfo}>
              <Text style={styles.shelterName}>Community Center East</Text>
              <Text style={styles.shelterDistance}>1.2 km away • 45 spots available</Text>
            </View>
          </View>

          <View style={styles.shelterCard}>
            <MapPin size={24} color="#06b6d4" />
            <View style={styles.shelterInfo}>
              <Text style={styles.shelterName}>City Hall Shelter</Text>
              <Text style={styles.shelterDistance}>2.5 km away • 120 spots available</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6, 182, 212, 0.1)',
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 60,
    padding: 8,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sosButton: {
    backgroundColor: '#06b6d4',
    padding: 40,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.5,
    shadowRadius: 32,
    elevation: 16,
  },
  sosIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sosText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 1,
    marginBottom: 8,
  },
  sosSubtext: {
    fontSize: 14,
    color: '#001a1f',
    fontWeight: '500',
  },
  quickActions: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 13,
    color: '#94a3b8',
  },
  statusSection: {
    marginBottom: 32,
  },
  statusCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.15)',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
    gap: 6,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10b981',
  },
  statusBadgeWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
    gap: 6,
  },
  statusBadgeTextWarning: {
    fontSize: 12,
    fontWeight: '600',
    color: '#f59e0b',
  },
  statusText: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },
  nearbySection: {
    marginBottom: 40,
  },
  shelterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    gap: 16,
  },
  shelterInfo: {
    flex: 1,
  },
  shelterName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  shelterDistance: {
    fontSize: 13,
    color: '#94a3b8',
  },
});
