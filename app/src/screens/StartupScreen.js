import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

const DISPLAY_TIME_MS = 1200;

export function StartupScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, DISPLAY_TIME_MS);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Animated.View
      style={styles.screen}
      entering={FadeIn.duration(180)}
      exiting={FadeOut.duration(240)}
      accessible
      accessibilityLabel="LiveTemp sedang dimulai"
    >
      <StatusBar style="light" />
      <Animated.View style={styles.mark} entering={ZoomIn.duration(420)}>
        <View style={styles.orbit} />
        <View style={styles.core}>
          <Ionicons name="thermometer" size={50} color="#FFFFFF" />
        </View>
      </Animated.View>
      <Text style={styles.title}>LiveTemp</Text>
      <Text style={styles.subtitle}>Monitoring suhu IoT secara real-time</Text>
      <View style={styles.loadingRow}>
        <View style={[styles.loadingDot, styles.loadingDotActive]} />
        <View style={styles.loadingDot} />
        <View style={styles.loadingDot} />
      </View>
      <Text style={styles.footer}>KELOMPOK 08</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A",
    padding: 24,
  },
  mark: {
    width: 144,
    height: 144,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  orbit: {
    position: "absolute",
    width: 142,
    height: 142,
    borderRadius: 71,
    borderWidth: 1,
    borderColor: "#60A5FA",
    opacity: 0.55,
  },
  core: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    borderWidth: 8,
    borderColor: "#1D4ED8",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1,
  },
  subtitle: {
    marginTop: 8,
    color: "#BFDBFE",
    fontSize: 15,
    textAlign: "center",
  },
  loadingRow: {
    flexDirection: "row",
    gap: 7,
    marginTop: 34,
  },
  loadingDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#475569",
  },
  loadingDotActive: {
    width: 24,
    backgroundColor: "#60A5FA",
  },
  footer: {
    position: "absolute",
    bottom: 42,
    color: "#64748B",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.8,
  },
});
