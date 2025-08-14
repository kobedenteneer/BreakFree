import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CommunityScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('forum');

  const forumPosts = [
    {
      id: 1,
      author: 'Anoniem',
      content: 'Vandaag 5 dagen clean van roken! Het wordt steeds makkelijker.',
      likes: 12,
      comments: 3,
      time: '2 uur geleden',
    },
    {
      id: 2,
      author: 'Gamer123',
      content: 'Tips nodig: hoe beperk ik mijn game tijd zonder alles te missen?',
      likes: 8,
      comments: 7,
      time: '5 uur geleden',
    },
    {
      id: 3,
      author: 'SoberLife',
      content: '1 maand alcoholvrij! Voel me zoveel beter en heb meer energie.',
      likes: 25,
      comments: 10,
      time: '1 dag geleden',
    },
  ];

  const successStories = [
    {
      id: 1,
      title: 'Van dagelijks roken naar 6 maanden clean',
      author: 'Sarah, 19 jaar',
      excerpt: 'Het was moeilijk in het begin, maar met steun van deze community heb ik het gehaald...',
      daysClean: 180,
    },
    {
      id: 2,
      title: 'Gameverslaving overwonnen',
      author: 'Mike, 17 jaar',
      excerpt: 'Ik speelde 8 uur per dag. Nu heb ik tijd voor vrienden en school...',
      daysClean: 90,
    },
    {
      id: 3,
      title: 'Social media detox succesvol',
      author: 'Emma, 16 jaar',
      excerpt: 'Ik checkte mijn telefoon elke 5 minuten. Nu geniet ik van het echte leven...',
      daysClean: 45,
    },
  ];

  const buddyProfiles = [
    {
      id: 1,
      name: 'Alex',
      age: 18,
      addiction: 'Roken',
      daysClean: 15,
      lookingFor: 'Iemand om mee te chatten en elkaar te motiveren',
    },
    {
      id: 2,
      name: 'Lisa',
      age: 17,
      addiction: 'Social Media',
      daysClean: 8,
      lookingFor: 'Buddy om offline activiteiten mee te doen',
    },
    {
      id: 3,
      name: 'Tom',
      age: 19,
      addiction: 'Gamen',
      daysClean: 30,
      lookingFor: 'Iemand om te sporten en andere hobby\'s mee te delen',
    },
  ];

  const renderForum = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionDescription}>
        Deel je ervaringen en krijg steun van anderen
      </Text>

      {forumPosts.map((post) => (
        <View key={post.id} style={styles.forumPost}>
          <View style={styles.postHeader}>
            <Text style={styles.postAuthor}>{post.author}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
          <Text style={styles.postContent}>{post.content}</Text>
          <View style={styles.postActions}>
            <Text style={styles.actionText}>👍 {post.likes}</Text>
            <Text style={styles.actionText}>💬 {post.comments}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderBuddies = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionDescription}>
        Vind een buddy om elkaar te steunen in je reis naar vrijheid
      </Text>
      
      {buddyProfiles.map((buddy) => (
        <View key={buddy.id} style={styles.buddyCard}>
          <View style={styles.buddyHeader}>
            <View style={styles.buddyInfo}>
              <Text style={styles.buddyName}>{buddy.name}, {buddy.age}</Text>
              <Text style={styles.buddyAddiction}>{buddy.addiction}</Text>
              <Text style={styles.buddyDays}>{buddy.daysClean} dagen clean</Text>
            </View>
          </View>
          <Text style={styles.buddyLookingFor}>{buddy.lookingFor}</Text>
          <TouchableOpacity style={styles.connectButton}>
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderStories = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionDescription}>
        Lees inspirerende verhalen van anderen die hun verslaving hebben overwonnen
      </Text>
      
      {successStories.map((story) => (
        <View key={story.id} style={styles.storyCard}>
          <View style={styles.storyHeader}>
            <Text style={styles.storyTitle}>{story.title}</Text>
            <View style={styles.storyBadge}>
              <Text style={styles.storyBadgeText}>{story.daysClean} dagen</Text>
            </View>
          </View>
          <Text style={styles.storyAuthor}>Door {story.author}</Text>
          <Text style={styles.storyExcerpt}>{story.excerpt}</Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lees meer</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <Text style={styles.headerSubtitle}>
          Je bent niet alleen. Verbind met anderen op dezelfde reis.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'forum' && styles.activeTab]}
            onPress={() => setSelectedTab('forum')}>
            <Text style={[styles.tabText, selectedTab === 'forum' && styles.activeTabText]}>
              Forum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'buddies' && styles.activeTab]}
            onPress={() => setSelectedTab('buddies')}>
            <Text style={[styles.tabText, selectedTab === 'buddies' && styles.activeTabText]}>
              Buddies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'stories' && styles.activeTab]}
            onPress={() => setSelectedTab('stories')}>
            <Text style={[styles.tabText, selectedTab === 'stories' && styles.activeTabText]}>
              Success Stories
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {selectedTab === 'forum' && renderForum()}
        {selectedTab === 'buddies' && renderBuddies()}
        {selectedTab === 'stories' && renderStories()}
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
    backgroundColor: '#9C27B0',
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#9C27B0',
    borderRadius: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  tabContent: {
    flex: 1,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  forumPost: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
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
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  postTime: {
    fontSize: 12,
    color: '#666666',
  },
  postContent: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 22,
    marginBottom: 15,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionText: {
    fontSize: 14,
    color: '#666666',
  },
  buddyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
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
  buddyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buddyInfo: {
    flex: 1,
  },
  buddyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  buddyAddiction: {
    fontSize: 14,
    color: '#666666',
  },
  buddyDays: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  buddyLookingFor: {
    fontSize: 14,
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  connectButton: {
    backgroundColor: '#9C27B0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  storyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
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
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
  },
  storyBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  storyBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storyAuthor: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  storyExcerpt: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 15,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#9C27B0',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CommunityScreen; 