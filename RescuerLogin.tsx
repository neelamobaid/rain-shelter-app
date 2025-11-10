import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Lock, User, ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';

interface RescuerLoginProps {
  onBack: () => void;
  onLogin: () => void;
  onRegister: () => void;
}

export default function RescuerLogin({ onBack, onLogin, onRegister }: RescuerLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <ChevronLeft size={24} color="#06b6d4" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Water Droplet and Ripples Icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Rescuer Login</Text>
        <Text style={styles.subtitle}>Access your rescue dashboard</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <User size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#475569"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Lock size={20} color="#06b6d4" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#475569"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={onRegister}>
          <Text style={styles.registerButtonText}>Create Rescuer Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 10,
    padding: 8,
  },
  header: {
    paddingTop: 80,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
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
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#06b6d4',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#06b6d4',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
  },
  dividerText: {
    fontSize: 14,
    color: '#64748b',
  },
  registerButton: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#06b6d4',
  },
  footer: {
    marginTop: 40,
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
  },
});
