import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProfileStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  section: {
    marginBottom: height * 0.04,
    backgroundColor: 'white',
    padding: width * 0.04,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.015,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: width * 0.045,
    color: '#333',
  },
  text: {
    fontSize: width * 0.045,
    color: '#444',
  },
});
export {ProfileStyle};
