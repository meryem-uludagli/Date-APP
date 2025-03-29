import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {width, height} from '../utils/constants';

export const InfoScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  scrollContainer: {
    paddingBottom: height * 0.02,
  },
  profileImage: {
    width: '100%',
    height: height * 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  card: {
    backgroundColor: Colors.WHITE,
    margin: width * 0.05,
    padding: width * 0.08,
    borderRadius: 20,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: height * 0.05,
  },
  name: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  location: {
    fontSize: width * 0.04,
    color: Colors.SOFT_GRAY,
    marginVertical: height * 0.005,
  },
  matchContainer: {
    backgroundColor: Colors.LIGHT_GREEN,
    alignSelf: 'flex-start',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: 10,
    marginTop: height * 0.005,
  },
  matchText: {
    color: Colors.DARK_GREEN,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: width * 0.04,
    color: Colors.SOFT_GRAY,
    marginTop: height * 0.02,
    lineHeight: height * 0.03,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
    marginTop: height * 0.02,
  },
  noInterestText: {
    fontSize: width * 0.04,
    color: Colors.SOFT_GRAY,
    marginTop: height * 0.005,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.04,
    marginTop: height * 0.02,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  giftButton: {
    backgroundColor: Colors.LIGHT_ORANGE,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.02,
    alignSelf: 'center',
    borderRadius: 20,
  },
  likeButton: {
    backgroundColor: Colors.LIGHT_RED,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 20,
  },
  shareButton: {
    backgroundColor: Colors.GREEN,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});

export default {InfoScreenStyle};
