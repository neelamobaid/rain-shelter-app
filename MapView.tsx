import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ChevronLeft, MapPin, Navigation, Droplet } from 'lucide-react-native';

interface MapViewProps {
  onBack: () => void;
}

export default function MapView({ onBack }: MapViewProps) {
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
        <Text style={styles.headerTitle}>Shelter Map</Text>
        <View style={styles.liveBadge}>
          <View style={styles.pulseDot} />
          <Text style={styles.liveText}>Live</Text>
        </View>
      </View>

      <View style={styles.mapPlaceholder}>
        <View style={styles.mapOverlay}>
          <Navigation size={48} color="#06b6d4" />
          <Text style={styles.mapText}>Interactive Map View</Text>
          <Text style={styles.mapSubtext}>Showing nearby shelters and safe zones</Text>
        </View>
      </View>

      <ScrollView style={styles.shelterList} showsVerticalScrollIndicator={false}>
        <Text style={styles.listTitle}>Nearby Shelters</Text>

        <View style={styles.shelterCard}>
          <View style={styles.shelterHeader}>
            <MapPin size={24} color="#06b6d4" />
            <View style={styles.availableBadge}>
              <Text style={styles.availableText}>45 spots</Text>
            </View>
          </View>
          <Text style={styles.shelterName}>Community Center East</Text>
          <Text style={styles.shelterAddress}>123 Main Street</Text>
          <View style={styles.shelterDetails}>
            <View style={styles.detail}>
              <Droplet size={16} color="#94a3b8" />
              <Text style={styles.detailText}>Dry Zone</Text>
            </View>
            <Text style={styles.distance}>1.2 km away</Text>
          </View>
          <TouchableOpacity style={styles.navigateButton}>
            <Navigation size={16} color="#000000" />
            <Text style={styles.navigateText}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shelterCard}>
          <View style={styles.shelterHeader}>
            <MapPin size={24} color="#0ea5e9" />
            <View style={styles.availableBadge}>
              <Text style={styles.availableText}>120 spots</Text>
            </View>
          </View>
          <Text style={styles.shelterName}>City Hall Emergency Shelter</Text>
          <Text style={styles.shelterAddress}>456 Government Avenue</Text>
          <View style={styles.shelterDetails}>
            <View style={styles.detail}>
              <Droplet size={16} color="#94a3b8" />
              <Text style={styles.detailText}>Dry Zone</Text>
            </View>
            <Text style={styles.distance}>2.5 km away</Text>
          </View>
          <TouchableOpacity style={styles.navigateButton}>
            <Navigation size={16} color="#000000" />
            <Text style={styles.navigateText}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shelterCard}>
          <View style={styles.shelterHeader}>
            <MapPin size={24} color="#14b8a6" />
            <View style={styles.limitedBadge}>
              <Text style={styles.limitedText}>8 spots</Text>
            </View>
          </View>
          <Text style={styles.shelterName}>St. Mary's Church</Text>
          <Text style={styles.shelterAddress}>789 Chapel Road</Text>
          <View style={styles.shelterDetails}>
            <View style={styles.detail}>
              <Droplet size={16} color="#94a3b8" />
              <Text style={styles.detailText}>Dry Zone</Text>
            </View>
            <Text style={styles.distance}>3.1 km away</Text>
          </View>
          <TouchableOpacity style={styles.navigateButton}>
            <Navigation size={16} color="#000000" />
            <Text style={styles.navigateText}>Get Directions</Text>
          </TouchableOpacity>
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
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    gap: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ef4444',
  },
  liveText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#ef4444',
  },
  mapPlaceholder: {
    height: 280,
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6, 182, 212, 0.1)',
  },
  mapOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 16,
  },
  mapSubtext: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
  },
  shelterList: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  shelterCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 16,
  },
  shelterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  availableBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  availableText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#10b981',
  },
  limitedBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  limitedText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#f59e0b',
  },
  shelterName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  shelterAddress: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 12,
  },
  shelterDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: '#94a3b8',
  },
  distance: {
    fontSize: 12,
    color: '#06b6d4',
    fontWeight: '500',
  },
  navigateButton: {
    flexDirection: 'row',
    backgroundColor: '#06b6d4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  navigateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
