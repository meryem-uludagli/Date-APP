import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';

export const InfoScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
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
    backgroundColor: Colors.WHITE,
    margin: 20,
    padding: 30,
    borderRadius: 20,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  location: {
    fontSize: 16,
    color: Colors.SOFT_GRAY,
    marginVertical: 5,
  },
  matchContainer: {
    backgroundColor: Colors.LIGHT_GREEN,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  matchText: {
    color: Colors.DARK_GREEN,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: Colors.SOFT_GRAY,
    marginTop: 10,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
    marginTop: 20,
  },

  noInterestText: {
    fontSize: 14,
    color: Colors.SOFT_GRAY,
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
    backgroundColor: Colors.LIGHT_ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',

    borderRadius: 20,
  },
  likeButton: {
    backgroundColor: Colors.LIGHT_RED,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  shareButton: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default {InfoScreenStyle};
