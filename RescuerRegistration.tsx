import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { User, Lock, Mail, Phone, MapPin, ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';

interface RescuerRegistrationProps {
  onBack: () => void;
  onRegister: () => void;
}

export default function RescuerRegistration({ onBack, onRegister }: RescuerRegistrationProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
  });

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
        <Text style={styles.title}>Join as Rescuer</Text>
        <Text style={styles.subtitle}>Help save lives during emergencies</Text>
      </View>

      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputContainer}>
            <User size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#475569"
              value={formData.fullName}
              onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <User size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Choose a username"
              placeholderTextColor="#475569"
              value={formData.username}
              onChangeText={(text) => setFormData({ ...formData, username: text })}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Mail size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor="#475569"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Phone size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="+1 (555) 000-0000"
              placeholderTextColor="#475569"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.inputContainer}>
            <MapPin size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="City, State"
              placeholderTextColor="#475569"
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Lock size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Create a strong password"
              placeholderTextColor="#475569"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Lock size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              placeholderTextColor="#475569"
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            As a registered rescuer, you'll be able to receive emergency requests, coordinate relief efforts, and help people in need during floods.
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={onRegister}>
          <Text style={styles.registerButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </Text>
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
    zIndex: 10,
    padding: 8,
  },
  logo: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#ffffff',
  },
  infoBox: {
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    marginBottom: 24,
  },
  infoText: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 20,
  },
  registerButton: {
    backgroundColor: '#06b6d4',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.5,
  },
  footer: {
    marginBottom: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
  },
});
