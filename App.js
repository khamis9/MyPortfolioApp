import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={require('./assets/hussein-profile.jpg')} style={styles.profileImage} />
        </View>
        <Text style={styles.name}>Hussein Khamis</Text>
        <Text style={styles.title}>Computer Science Student</Text>
        <Text style={styles.university}>Haigazian University</Text>
        <Text style={styles.year}>Senior Year • ID: 2320074</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-circle" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.sectionText}>
          I'm a senior Computer Science student at Haigazian University, passionate about 
          technology and software development. I enjoy teaching coding and robotics, 
          helping others discover the world of programming.
        </Text>
      </View>

      {/* Current Studies Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="school" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Current Studies</Text>
        </View>
        
        <View style={styles.courseGrid}>
          <View style={styles.courseCard}>
            <Ionicons name="laptop" size={20} color="#4ECDC4" />
            <Text style={styles.courseText}>Operating Systems</Text>
          </View>
          <View style={styles.courseCard}>
            <Ionicons name="construct" size={20} color="#45B7D1" />
            <Text style={styles.courseText}>Software Engineering</Text>
          </View>
          <View style={styles.courseCard}>
            <Ionicons name="phone-portrait" size={20} color="#FF6B6B" />
            <Text style={styles.courseText}>Mobile App Development</Text>
          </View>
          <View style={styles.courseCard}>
            <Ionicons name="calculator" size={20} color="#9B59B6" />
            <Text style={styles.courseText}>Theory of Computation</Text>
          </View>
          <View style={styles.courseCard}>
            <Ionicons name="stats-chart" size={20} color="#E67E22" />
            <Text style={styles.courseText}>Statistics & Probability</Text>
          </View>
          <View style={styles.courseCard}>
            <Ionicons name="shield-checkmark" size={20} color="#2ECC71" />
            <Text style={styles.courseText}>Network Security</Text>
          </View>
        </View>
      </View>

      {/* Teaching Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="people" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Teaching Experience</Text>
        </View>
        <View style={styles.teachingCard}>
          <Ionicons name="school" size={30} color="#007AFF" />
          <View style={styles.teachingContent}>
            <Text style={styles.teachingTitle}>Coducators Center</Text>
            <Text style={styles.teachingDescription}>
              Teaching coding and robotics to students, helping them develop 
              programming skills and logical thinking.
            </Text>
          </View>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="folder" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Featured Projects</Text>
        </View>
        
        <View style={styles.projectCard}>
          <View style={styles.projectHeader}>
            <Ionicons name="storefront" size={24} color="#4ECDC4" />
            <Text style={styles.projectTitle}>E-commerce Platform</Text>
          </View>
          <Text style={styles.projectDescription}>
            A full-stack e-commerce platform with client-server architecture. Features 
            product management, user authentication, shopping cart, and order processing 
            with Docker containerization support.
          </Text>
          <View style={styles.projectTech}>
            <Text style={styles.techTag}>PHP</Text>
            <Text style={styles.techTag}>JavaScript</Text>
            <Text style={styles.techTag}>Blade</Text>
            <Text style={styles.techTag}>CSS</Text>
            <Text style={styles.techTag}>Docker</Text>
          </View>
          <Text style={styles.projectLink}>github.com/HadiHD17/E-Commerce</Text>
        </View>

        <View style={styles.projectCard}>
          <View style={styles.projectHeader}>
            <Ionicons name="time" size={24} color="#9B59B6" />
            <Text style={styles.projectTitle}>Time Capsule</Text>
          </View>
          <Text style={styles.projectDescription}>
            A personal and social platform where users can write messages and choose 
            when they want the message to be revealed.
          </Text>
          <View style={styles.projectTech}>
            <Text style={styles.techTag}>Blade</Text>
            <Text style={styles.techTag}>Laravel</Text>
            <Text style={styles.techTag}>PHP</Text>
          </View>
          <Text style={styles.projectLink}>github.com/khamis9/time-capsule</Text>
        </View>

        <View style={styles.projectCard}>
          <View style={styles.projectHeader}>
            <Ionicons name="desktop" size={24} color="#45B7D1" />
            <Text style={styles.projectTitle}>RemoteLyx Dashboard</Text>
          </View>
          <Text style={styles.projectDescription}>
            A modern dashboard application built with TypeScript for remote work 
            management and team collaboration.
          </Text>
          <View style={styles.projectTech}>
            <Text style={styles.techTag}>TypeScript</Text>
            <Text style={styles.techTag}>React</Text>
            <Text style={styles.techTag}>Node.js</Text>
          </View>
          <Text style={styles.projectLink}>github.com/khamis9/remotelyx-dashboard</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Skills</Text>
        </View>
        <Text style={styles.sectionText}>
          I'm good with programming languages, software development, mobile app 
          development, and teaching technical concepts to others.
        </Text>
      </View>

      {/* Hobbies Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="heart" size={24} color="#FF6B6B" />
          <Text style={styles.sectionTitle}>Hobbies</Text>
        </View>
        
        <View style={styles.hobbiesGrid}>
          <View style={styles.hobbyItem}>
            <Ionicons name="game-controller" size={24} color="#FF6B6B" />
            <Text style={styles.hobbyText}>Video Games</Text>
          </View>
          <View style={styles.hobbyItem}>
            <Ionicons name="code-slash" size={24} color="#4ECDC4" />
            <Text style={styles.hobbyText}>Coding</Text>
          </View>
          <View style={styles.hobbyItem}>
            <Ionicons name="create" size={24} color="#9B59B6" />
            <Text style={styles.hobbyText}>Writing</Text>
          </View>
          <View style={styles.hobbyItem}>
            <Ionicons name="football" size={24} color="#2ECC71" />
            <Text style={styles.hobbyText}>Football</Text>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="mail" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>Get In Touch</Text>
        </View>
        <Text style={styles.sectionText}>
          Always interested in connecting with fellow developers, students, and 
          anyone passionate about technology!
        </Text>
        
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={20} color="#007AFF" />
            <Text style={styles.contactText}>khamishussein2003@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="logo-github" size={20} color="#333" />
            <Text style={styles.contactText}>@https://github.com/khamis9</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>CSC 279 - Mobile App Development</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: 'center',
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    marginBottom: 5,
  },
  university: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 3,
  },
  year: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  section: {
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 10,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  courseText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    fontWeight: '500',
  },
  teachingCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  teachingContent: {
    flex: 1,
    marginLeft: 15,
  },
  teachingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  teachingDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  projectCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  projectTech: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  techTag: {
    backgroundColor: '#007AFF',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 4,
  },
  projectLink: {
    fontSize: 12,
    color: '#007AFF',
    fontStyle: 'italic',
  },
  hobbiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hobbyItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  hobbyText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    fontWeight: '500',
  },
  contactInfo: {
    marginTop: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
});