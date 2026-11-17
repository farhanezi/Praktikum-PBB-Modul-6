import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { tokens } from "../theme/tokens.js";

const { color, radius, shadow, space } = tokens;

// Ganti nama dan NIM berikut sesuai anggota kelompok sebelum pengumpulan.
const TEAM_MEMBERS = [
  { name: "Anggota 1", nim: "NIM anggota 1", role: "Mobile developer" },
  { name: "Anggota 2", nim: "NIM anggota 2", role: "Backend developer" },
  { name: "Anggota 3", nim: "NIM anggota 3", role: "IoT & testing" },
];

function MemberCard({ member, index }) {
  return (
    <View style={styles.memberCard} accessible accessibilityLabel={`${member.name}, ${member.nim}, ${member.role}`}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{index + 1}</Text>
      </View>
      <View style={styles.memberText}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberNim}>{member.nim}</Text>
        <Text style={styles.memberRole}>{member.role}</Text>
      </View>
    </View>
  );
}

export function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Ionicons name="thermometer-outline" size={36} color={color.primary} />
        </View>
        <Text style={styles.heroLabel}>PRAKTIKUM PPB · MODUL 6</Text>
        <Text style={styles.title}>Kelompok 08</Text>
        <Text style={styles.description}>
          LiveTemp adalah aplikasi monitoring suhu IoT dengan pembaruan data real-time dan pengaturan ambang batas.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Ionicons name="hardware-chip-outline" size={21} color={color.primary} />
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Topik proyek</Text>
            <Text style={styles.infoValue}>Monitoring suhu berbasis IoT</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Ionicons name="layers-outline" size={21} color={color.primary} />
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>Teknologi</Text>
            <Text style={styles.infoValue}>Expo · React Native · MQTT · Node.js</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Anggota kelompok</Text>
        <Text style={styles.memberCount}>{TEAM_MEMBERS.length} anggota</Text>
      </View>
      <View style={styles.membersWrap}>
        {TEAM_MEMBERS.map((member, index) => (
          <MemberCard key={member.role} member={member} index={index} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space.lg,
    paddingBottom: 36,
    gap: space.lg,
    backgroundColor: color.bg,
  },
  hero: {
    alignItems: "center",
    paddingHorizontal: space.xl,
    paddingVertical: space.xxl,
    backgroundColor: "#EFF6FF",
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  heroIcon: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    borderRadius: 35,
    backgroundColor: "#DBEAFE",
  },
  heroLabel: {
    color: color.primary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.9,
  },
  title: {
    marginTop: 6,
    color: color.text,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  description: {
    marginTop: 10,
    color: color.text2,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  infoCard: {
    padding: space.lg,
    gap: space.lg,
    backgroundColor: color.surface,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: radius.card,
    boxShadow: shadow.card,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
  },
  infoText: {
    flex: 1,
    gap: 3,
  },
  infoLabel: {
    color: color.text3,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoValue: {
    color: color.text,
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: color.border,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: space.sm,
  },
  sectionTitle: {
    color: color.text,
    fontSize: tokens.type.section,
    fontWeight: "700",
  },
  memberCount: {
    color: color.text3,
    fontSize: 13,
  },
  membersWrap: {
    overflow: "hidden",
    backgroundColor: color.surface,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: radius.card,
    boxShadow: shadow.card,
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
    minHeight: 78,
    padding: space.md,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  avatar: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#DBEAFE",
  },
  avatarText: {
    color: color.primary,
    fontSize: 15,
    fontWeight: "800",
  },
  memberText: {
    flex: 1,
    gap: 2,
  },
  memberName: {
    color: color.text,
    fontSize: 15,
    fontWeight: "700",
  },
  memberNim: {
    color: color.text3,
    fontSize: 13,
  },
  memberRole: {
    color: color.primary,
    fontSize: 12,
    fontWeight: "600",
  },
});
