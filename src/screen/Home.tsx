import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Linking, Alert } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 20;
const LOGO_PLACEHOLDER = require('../screen/assets/virgo_global_logo.png')
const HERO_IMAGE_PLACEHOLDER = require('../screen/assets/virgoism.png')
const Facebook = require('../screen/assets/facebook.png')
const Instagram = require('../screen/assets/instagram.png')

const Home: React.FC = () => {

    const handleLinkPress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        // if (supported) {
            await Linking.openURL(url);
        // } else {
        //     Alert.alert(`Don't know how to open this URL: ${url}`);
        // }

    }
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={LOGO_PLACEHOLDER}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <TouchableOpacity 
                onPress={()=>handleLinkPress('https://virgohplworld.com/locate-us/')}
                style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Contact Us</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                <Image
                    source={HERO_IMAGE_PLACEHOLDER}
                    style={styles.heroImage}
                    resizeMode="cover"
                />

                {/* Discover Range Section */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>Discover the Complete Range</Text>
                    <Text style={styles.sectionSubtitle}>Creative laminates that redefine spaces.</Text>
                    <TouchableOpacity 
                    onPress={()=>handleLinkPress('https://drive.google.com/uc?export=download&id=1UqwNw7sIfS4f1DxjEdPuD8Y9tOsJbE7x')}
                    style={styles.exploreButton}>
                        <Text style={styles.exploreButtonText}>Explore Catalogue</Text>
                    </TouchableOpacity>
                </View>

                {/* About Section */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>About Virgo Group</Text>
                    <Text style={styles.aboutText}>
                        {`Over the past three decades, Virgo Group has continually expanded its horizons—introducing innovative product lines such as Virgo HPL, Virgo Compacts, Virgo Claddice, Virgo Panel X, and Virgo Aluminum. We have strengthened our manufacturing capabilities, enhanced production scale, and established a robust distribution network that spans Asia, the Middle East, Africa, Europe, and the Americas. Today, Virgo stands as a trusted brand across more than 90 countries, recognized for its commitment to quality, innovation, and global excellence.`}
                        {/* <Text style={styles.boldText}>Virgo Laminates</Text> */}
                    </Text>
                </View>

                {/* Catalogue Section Header */}
                <Text style={[styles.catalogueHeader, { marginLeft: CARD_MARGIN }]}>Our Catalogue</Text>

                {/* New Catalogue Collection Card 1 (Large Image) */}
                <View style={styles.catalogueCardLarge}>
                    <View style={styles.catalogueOverlay}>
                        <Text style={styles.catalogueTitleLarge}>New Catalogue Collection</Text>
                    </View>
                </View>

                {/* New Catalogue Collection Card 2 (Text/Minimal Image) */}
                <TouchableOpacity 
                onPress={()=>handleLinkPress('https://share.google/WuyAtjJIrP3kbDpjd')}
                style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>New Catalogue Collection</Text>
                    <Text style={styles.sectionSubtitle}>A touch of nature's elegance.</Text>
                </TouchableOpacity>

                {/* Why Choose Us Section */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>Why Choose Us</Text>
                    <View style={styles.featureContainer}>
                        <Text style={styles.featureTitle}>Global presence: </Text>
                        <Text style={styles.featureText}>Trusted in 90+ countries</Text>
                    </View>
                    <View style={styles.featureContainer}>
                        <Text style={styles.featureTitle}>Quality & durability: </Text>
                        <Text style={styles.featureText}>Precision-engineered for lasting performance</Text>
                    </View>
                    <View style={styles.featureContainer}>
                        <Text style={styles.featureTitle}>Wide range: </Text>
                        <Text style={styles.featureText}>HPL, compacts, and aluminum surfaces</Text>
                    </View>
                    <View style={styles.featureContainer}>
                        <Text style={styles.featureTitle}>Customer-focused: </Text>
                        <Text style={styles.featureText}>Dedicated support and long-term partnerships</Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2025 Virgo Laminates. All rights reserved.</Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity
                        onPress={()=>handleLinkPress('https://www.facebook.com/VirgoHPLWorld/')}
                        style={styles.socialButton}>
                            <Image source={Facebook} style={styles.iconSty} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>handleLinkPress('https://www.instagram.com/virgo_laminates_/')}

                        style={styles.socialButton}>
                            <Image source={Instagram} style={styles.iconSty} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

// --- Stylesheet ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 20, // Padding at the bottom of the scroll view
    },

    // Header Styles
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: CARD_MARGIN,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'cover'
    },
    contactButton: {
        backgroundColor: '#4A87F5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    contactButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    // Hero Banner Styles
    heroBanner: {
        width: width,
        height: width * 0.55, // Adjust height as needed
        marginBottom: 20,
        position: 'relative',
    },
    heroImage: {
        width: '91%',
        resizeMode: 'contain',
        height: 150,
        padding: 20,
        borderRadius: 8,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: CARD_MARGIN

    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroOverlayLogo: {
        width: '60%',
        height: '40%',
        tintColor: '#fff', // Make the placeholder logo white for contrast
    },

    // Card & Section Styles
    sectionCard: {
        backgroundColor: '#fff',
        marginHorizontal: CARD_MARGIN,
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
        alignItems: 'center', // Center text content
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
        textAlign: 'center',
    },
    aboutText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
        textAlign: 'center',
    },
    boldText: {
        fontWeight: '700',
    },

    // Explore Button Styles
    exploreButton: {
        backgroundColor: '#4A87F5',
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 5,
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    // Catalogue Styles
    catalogueHeader: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
        marginBottom: 15,
    },
    catalogueCardLarge: {
        width: width - (CARD_MARGIN * 2),
        height: width * 0.45,
        marginHorizontal: CARD_MARGIN,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        position: 'relative',
    },
    catalogueImageLarge: {
        ...StyleSheet.absoluteFillObject,
    },
    catalogueOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 15,
    },
    catalogueTitleLarge: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },

    // Why Choose Us Features
    featureContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        alignSelf: 'flex-start', // Align features to the left inside the card
    },
    featureTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black',
    },
    featureText: {
        fontSize: 14,
        color: '#666',
        flexShrink: 1, // Allows text to wrap
    },

    // Footer Styles
    footer: {
        backgroundColor: '#333', // Dark background for the footer
        paddingVertical: 30,
        paddingHorizontal: CARD_MARGIN,
        alignItems: 'center',
    },
    footerText: {
        color: '#ccc',
        fontSize: 12,
        marginBottom: 15,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    iconSty: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    }
});

export default Home;