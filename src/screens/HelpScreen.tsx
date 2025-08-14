import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HelpScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const helpCategories = [
    {
      id: 'crisis',
      title: 'Crisis Hulp',
      color: '#F44336',
      description: 'Directe hulp bij acute situaties',
      urgent: true,
    },
    {
      id: 'professional',
      title: 'Professionele Hulp',
      color: '#2196F3',
      description: 'Contact met therapeuten en counselors',
      urgent: false,
    },
    {
      id: 'resources',
      title: 'Hulpbronnen',
      color: '#4CAF50',
      description: 'Boeken, websites en andere materialen',
      urgent: false,
    },
    {
      id: 'family',
      title: 'Familie & Vrienden',
      color: '#FF9800',
      description: 'Hoe je naasten kunt betrekken',
      urgent: false,
    },
  ];

  const crisisContacts = [
    {
      name: '113 Zelfmoordpreventie',
      phone: '113',
      description: '24/7 crisis hulplijn',
      available: '24/7',
    },
    {
      name: 'Korrelatie',
      phone: '0900-1450',
      description: 'Anonieme hulplijn voor jongeren',
      available: 'Ma-Vr 9:00-18:00',
    },
    {
      name: 'De Kindertelefoon',
      phone: '0800-0432',
      description: 'Voor kinderen en jongeren tot 18 jaar',
      available: 'Ma-Zo 11:00-21:00',
    },
  ];

  const professionalHelp = [
    {
      name: 'Jellinek',
      description: 'Verslavingszorg voor jongeren',
      website: 'www.jellinek.nl',
      phone: '020-5901330',
    },
    {
      name: 'Novadic-Kentron',
      description: 'Verslavingszorg en preventie',
      website: 'www.novadic-kentron.nl',
      phone: '073-6588888',
    },
    {
      name: 'GGZ Nederland',
      description: 'Geestelijke gezondheidszorg',
      website: 'www.ggznederland.nl',
      phone: '030-2970000',
    },
  ];

  const resources = [
    {
      title: 'Boeken',
      items: [
        'Het Brein van Verslaafden - Nora Volkow',
        'De Kracht van Gewoontes - Charles Duhigg',
        'Mindfulness voor Jongeren - David Dewulf',
      ],
    },
    {
      title: 'Apps',
      items: [
        'Headspace - Meditatie app',
        'Calm - Slaap en ontspanning',
        'I Am Sober - Verslaving tracker',
      ],
    },
    {
      title: 'Websites',
      items: [
        'www.drugsinfo.nl - Informatie over drugs',
        'www.alcoholinfo.nl - Informatie over alcohol',
        'www.verslaving.nl - Algemene informatie',
      ],
    },
  ];

  const familyTips = [
    'Praat open en eerlijk over verslaving',
    'Toon begrip maar stel ook grenzen',
    'Zoek professionele hulp samen',
    'Zorg voor jezelf als naaste',
    'Vier kleine successen',
    'Blijf hoopvol en geduldig',
  ];

  const renderCrisisHelp = () => (
    <View style={styles.categoryContent}>
      <View style={styles.emergencyBanner}>
        <Text style={styles.emergencyText}>
          Als je in een crisis zit, bel direct 113 of 112
        </Text>
      </View>

      {crisisContacts.map((contact, index) => (
        <View key={index} style={styles.contactCard}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactDescription}>{contact.description}</Text>
            <Text style={styles.contactAvailable}>Beschikbaar: {contact.available}</Text>
          </View>
          <View style={styles.callButton}>
            <Text style={styles.callButtonText}>{contact.phone}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderProfessionalHelp = () => (
    <View style={styles.categoryContent}>
      <Text style={styles.sectionDescription}>
        Professionele hulp is beschikbaar. Neem contact op voor een intakegesprek.
      </Text>

      {professionalHelp.map((help, index) => (
        <View key={index} style={styles.helpCard}>
          <Text style={styles.helpName}>{help.name}</Text>
          <Text style={styles.helpDescription}>{help.description}</Text>
          <View style={styles.helpActions}>
            <View style={styles.helpButton}>
              <Text style={styles.helpButtonText}>Bellen</Text>
            </View>
            <View style={styles.helpButton}>
              <Text style={styles.helpButtonText}>Website</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderResources = () => (
    <View style={styles.categoryContent}>
      <Text style={styles.sectionDescription}>
        Hier vind je nuttige hulpbronnen om je te ondersteunen.
      </Text>

      {resources.map((resource, index) => (
        <View key={index} style={styles.resourceSection}>
          <Text style={styles.resourceTitle}>{resource.title}</Text>
          {resource.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.resourceItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.resourceText}>{item}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderFamilyHelp = () => (
    <View style={styles.categoryContent}>
      <Text style={styles.sectionDescription}>
        Tips voor familie en vrienden om iemand met een verslaving te ondersteunen.
      </Text>

      <View style={styles.tipsContainer}>
        {familyTips.map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>

      <View style={styles.familyCard}>
        <Text style={styles.familyCardTitle}>Belangrijk om te weten:</Text>
        <Text style={styles.familyCardText}>
          Verslaving is een ziekte, geen keuze. Schuld en schaamte helpen niet. 
          Focus op steun en begrip, maar stel ook duidelijke grenzen.
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hulp & Ondersteuning</Text>
        <Text style={styles.headerSubtitle}>
          Je hoeft dit niet alleen te doen. Er is hulp beschikbaar.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Help Categories */}
        <View style={styles.categoriesContainer}>
          {helpCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryCard,
                selectedCategory === category.id && styles.selectedCategory,
                category.urgent && styles.urgentCategory,
              ]}
              onPress={() => setSelectedCategory(category.id)}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>{category.description}</Text>
              {category.urgent && (
                <View style={styles.urgentBadge}>
                  <Text style={styles.urgentBadgeText}>URGENT</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Content */}
        {selectedCategory === 'crisis' && renderCrisisHelp()}
        {selectedCategory === 'professional' && renderProfessionalHelp()}
        {selectedCategory === 'resources' && renderResources()}
        {selectedCategory === 'family' && renderFamilyHelp()}

        {/* General Emergency Info */}
        {!selectedCategory && (
          <View style={styles.generalInfo}>
            <Text style={styles.generalInfoTitle}>Wanneer professionele hulp zoeken?</Text>
            <View style={styles.warningSigns}>
              <Text style={styles.warningTitle}>Waarschuwingssignalen:</Text>
              <Text style={styles.warningText}>• Gedachten aan zelfbeschadiging</Text>
              <Text style={styles.warningText}>• Dagelijks gebruik dat niet te stoppen is</Text>
              <Text style={styles.warningText}>• Problemen op school, werk of thuis</Text>
              <Text style={styles.warningText}>• Fysieke of mentale gezondheidsproblemen</Text>
              <Text style={styles.warningText}>• Isolatie van vrienden en familie</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FF5722',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: '#FF5722',
  },
  urgentCategory: {
    borderWidth: 2,
    borderColor: '#F44336',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666666',
    marginTop: 5,
    textAlign: 'center',
  },
  urgentBadge: {
    backgroundColor: '#F44336',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  urgentBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  categoryContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyBanner: {
    backgroundColor: '#F44336',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  emergencyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  contactDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  contactAvailable: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
  },
  callButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  helpCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  helpName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  helpDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    marginBottom: 15,
  },
  helpActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  helpButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  helpButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  resourceSection: {
    marginBottom: 20,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 10,
    marginTop: 2,
  },
  resourceText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  tipsContainer: {
    marginBottom: 20,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  familyCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  familyCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  familyCardText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  generalInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  generalInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  warningSigns: {
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    padding: 15,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 10,
  },
  warningText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
});

export default HelpScreen; 