import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.upperFooter}>
        <Text style={styles.upperFooterText}>Romania</Text>
      </View>
      <View style={styles.lowerFooter}>
        <Text
          style={styles.lowerFooterText}
          onPress={() =>
            Linking.openURL('https://policies.google.com/privacy?hl=en-RO&fg=1')
          }>
          Privacy
        </Text>
        <Text
          style={styles.lowerFooterText}
          onPress={() =>
            Linking.openURL('https://policies.google.com/terms?hl=en-RO&fg=1')
          }>
          Terms
        </Text>
        <Text
          style={styles.lowerFooterText}
          onPress={() =>
            Linking.openURL(
              'https://ads.google.com/intl/en_ro/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1',
            )
          }>
          Advertising
        </Text>
        <Text
          style={styles.lowerFooterText}
          onPress={() =>
            Linking.openURL(
              'https://www.google.ro/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none',
            )
          }>
          Business
        </Text>
        <Text
          style={styles.lowerFooterText}
          onPress={() =>
            Linking.openURL(
              'https://about.google/?utm_source=google-RO&utm_medium=referral&utm_campaign=hp-footer&fg=1',
            )
          }>
          About
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  upperFooter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#cbc6c6',
    borderBottomWidth: 0.5,
  },
  upperFooterText: {
    fontSize: 15,
    color: '#747272',
  },
  lowerFooter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerFooterText: {
    fontSize: 14,
    color: '#747272',
  },
});
