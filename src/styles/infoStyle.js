import {StyleSheet} from 'react-native';

export const InfoScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  card: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#777',
    marginVertical: 5,
  },
  matchContainer: {
    backgroundColor: '#D4F4DD',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  matchText: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  interestTag: {
    backgroundColor: '#FADADD',
    color: '#D63384',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  noInterestText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  giftButton: {
    backgroundColor: '#FFDD57',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',

    borderRadius: 20,
  },
  likeButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default {InfoScreenStyle};
