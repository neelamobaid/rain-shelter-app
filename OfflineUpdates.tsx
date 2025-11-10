import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ChevronLeft, Download, Check, AlertCircle, MapPin, Clock } from 'lucide-react-native';

interface OfflineUpdatesProps {
  onBack: () => void;
}

export default function OfflineUpdates({ onBack }: OfflineUpdatesProps) {
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
        <Text style={styles.headerTitle}>Offline Mode</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.infoCard}>
          <AlertCircle size={24} color="#06b6d4" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Prepare for Emergencies</Text>
            <Text style={styles.infoText}>
              Download maps and shelter information to access them even without internet connection.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Downloads</Text>

          <View style={styles.downloadCard}>
            <View style={styles.downloadHeader}>
              <MapPin size={24} color="#06b6d4" />
              <View style={styles.downloadInfo}>
                <Text style={styles.downloadTitle}>City Shelter Map</Text>
                <Text style={styles.downloadSize}>12.5 MB</Text>
              </View>
            </View>
            <Text style={styles.downloadDescription}>
              Complete map of all emergency shelters in your city with offline navigation.
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Download size={16} color="#000000" />
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downloadCard}>
            <View style={styles.downloadHeader}>
              <MapPin size={24} color="#0ea5e9" />
              <View style={styles.downloadInfo}>
                <Text style={styles.downloadTitle}>Region Evacuation Routes</Text>
                <Text style={styles.downloadSize}>8.2 MB</Text>
              </View>
            </View>
            <Text style={styles.downloadDescription}>
              Safe evacuation routes and high-ground locations in your region.
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Download size={16} color="#000000" />
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downloadCard}>
            <View style={styles.downloadHeader}>
              <AlertCircle size={24} color="#14b8a6" />
              <View style={styles.downloadInfo}>
                <Text style={styles.downloadTitle}>Emergency Procedures</Text>
                <Text style={styles.downloadSize}>2.1 MB</Text>
              </View>
            </View>
            <Text style={styles.downloadDescription}>
              Step-by-step emergency procedures and safety guidelines.
            </Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Download size={16} color="#000000" />
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Downloaded Content</Text>

          <View style={styles.downloadedCard}>
            <View style={styles.downloadedHeader}>
              <View style={styles.downloadedIconContainer}>
                <Check size={20} color="#10b981" />
              </View>
              <View style={styles.downloadedInfo}>
                <Text style={styles.downloadedTitle}>Local Area Map</Text>
                <Text style={styles.downloadedSize}>5.3 MB</Text>
              </View>
            </View>
            <View style={styles.downloadedMeta}>
              <View style={styles.metaItem}>
                <Clock size={14} color="#94a3b8" />
                <Text style={styles.metaText}>Downloaded 2 days ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downloadedCard}>
            <View style={styles.downloadedHeader}>
              <View style={styles.downloadedIconContainer}>
                <Check size={20} color="#10b981" />
              </View>
              <View style={styles.downloadedInfo}>
                <Text style={styles.downloadedTitle}>Emergency Contacts</Text>
                <Text style={styles.downloadedSize}>0.5 MB</Text>
              </View>
            </View>
            <View style={styles.downloadedMeta}>
              <View style={styles.metaItem}>
                <Clock size={14} color="#94a3b8" />
                <Text style={styles.metaText}>Downloaded 1 week ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.storageInfo}>
          <Text style={styles.storageTitle}>Storage Used</Text>
          <View style={styles.storageBar}>
            <View style={styles.storageProgress} />
          </View>
          <Text style={styles.storageText}>5.8 MB of 50 MB used</Text>
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
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 32,
    gap: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 18,
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
  downloadCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 12,
  },
  downloadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  downloadInfo: {
    flex: 1,
  },
  downloadTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  downloadSize: {
    fontSize: 12,
    color: '#94a3b8',
  },
  downloadDescription: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 18,
    marginBottom: 12,
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: '#06b6d4',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  downloadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  downloadedCard: {
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    marginBottom: 12,
  },
  downloadedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  downloadedIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadedInfo: {
    flex: 1,
  },
  downloadedTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  downloadedSize: {
    fontSize: 12,
    color: '#94a3b8',
  },
  downloadedMeta: {
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    color: '#94a3b8',
  },
  removeButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  removeButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ef4444',
  },
  storageInfo: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 40,
  },
  storageTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  storageBar: {
    height: 8,
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  storageProgress: {
    width: '12%',
    height: '100%',
    backgroundColor: '#06b6d4',
  },
  storageText: {
    fontSize: 12,
    color: '#94a3b8',
  },
});
