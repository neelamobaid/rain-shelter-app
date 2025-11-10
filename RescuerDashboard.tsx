import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AlertCircle, MapPin, Clock, Users, ChevronLeft, CheckCircle } from 'lucide-react-native';

interface RescuerDashboardProps {
  onBack: () => void;
}

export default function RescuerDashboard({ onBack }: RescuerDashboardProps) {
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
        <Text style={styles.headerTitle}>Rescuer Dashboard</Text>
        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Active</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <AlertCircle size={24} color="#06b6d4" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Active Requests</Text>
          </View>

          <View style={styles.statCard}>
            <Users size={24} color="#0ea5e9" />
            <Text style={styles.statValue}>47</Text>
            <Text style={styles.statLabel}>People Helped</Text>
          </View>

          <View style={styles.statCard}>
            <Clock size={24} color="#14b8a6" />
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Hours Today</Text>
          </View>

          <View style={styles.statCard}>
            <CheckCircle size={24} color="#10b981" />
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Total Rescues</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Requests</Text>

          <View style={styles.requestCard}>
            <View style={styles.requestHeader}>
              <View style={styles.urgentBadge}>
                <AlertCircle size={14} color="#ef4444" />
                <Text style={styles.urgentText}>URGENT</Text>
              </View>
              <Text style={styles.requestTime}>2 min ago</Text>
            </View>

            <Text style={styles.requestTitle}>Family of 4 trapped on roof</Text>
            <Text style={styles.requestDescription}>
              Water level rising rapidly. Children and elderly present.
            </Text>

            <View style={styles.requestLocation}>
              <MapPin size={16} color="#06b6d4" />
              <Text style={styles.locationText}>123 Oak Street, 0.8 km away</Text>
            </View>

            <View style={styles.requestActions}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.requestCard}>
            <View style={styles.requestHeader}>
              <View style={styles.highBadge}>
                <AlertCircle size={14} color="#f59e0b" />
                <Text style={styles.highText}>HIGH</Text>
              </View>
              <Text style={styles.requestTime}>5 min ago</Text>
            </View>

            <Text style={styles.requestTitle}>Elderly person needs evacuation</Text>
            <Text style={styles.requestDescription}>
              Single occupant, mobility issues, first floor flooded.
            </Text>

            <View style={styles.requestLocation}>
              <MapPin size={16} color="#06b6d4" />
              <Text style={styles.locationText}>456 Maple Avenue, 1.2 km away</Text>
            </View>

            <View style={styles.requestActions}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.requestCard}>
            <View style={styles.requestHeader}>
              <View style={styles.mediumBadge}>
                <AlertCircle size={14} color="#3b82f6" />
                <Text style={styles.mediumText}>MEDIUM</Text>
              </View>
              <Text style={styles.requestTime}>12 min ago</Text>
            </View>

            <Text style={styles.requestTitle}>Supplies needed at shelter</Text>
            <Text style={styles.requestDescription}>
              Community shelter requesting food and medical supplies.
            </Text>

            <View style={styles.requestLocation}>
              <MapPin size={16} color="#06b6d4" />
              <Text style={styles.locationText}>Community Center, 2.3 km away</Text>
            </View>

            <View style={styles.requestActions}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Active Missions</Text>

          <View style={styles.missionCard}>
            <View style={styles.missionHeader}>
              <Text style={styles.missionTitle}>Rescue in progress</Text>
              <View style={styles.inProgressBadge}>
                <View style={styles.pulseDot} />
                <Text style={styles.inProgressText}>In Progress</Text>
              </View>
            </View>
            <Text style={styles.missionDescription}>
              Evacuating 2 people from flooded apartment
            </Text>
            <View style={styles.requestLocation}>
              <MapPin size={16} color="#06b6d4" />
              <Text style={styles.locationText}>789 Pine Road</Text>
            </View>
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Status</Text>
            </TouchableOpacity>
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
    paddingBottom: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6, 182, 212, 0.1)',
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 60,
    zIndex: 10,
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
    marginBottom: 12,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10b981',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  requestCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 16,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  urgentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 4,
  },
  urgentText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ef4444',
  },
  highBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 4,
  },
  highText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#f59e0b',
  },
  mediumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 4,
  },
  mediumText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#3b82f6',
  },
  requestTime: {
    fontSize: 12,
    color: '#64748b',
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  requestDescription: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 20,
    marginBottom: 12,
  },
  requestLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 13,
    color: '#06b6d4',
    fontWeight: '500',
  },
  requestActions: {
    flexDirection: 'row',
    gap: 12,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#06b6d4',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  acceptButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  viewButton: {
    flex: 1,
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#06b6d4',
  },
  missionCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 16,
  },
  missionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  inProgressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 6,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#06b6d4',
  },
  inProgressText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#06b6d4',
  },
  missionDescription: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 12,
  },
  updateButton: {
    backgroundColor: '#06b6d4',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  updateButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
