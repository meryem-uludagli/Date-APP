import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {height, width} from '../utils/constants';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: -30,
  },

  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  location: {
    fontSize: 18,
    color: Colors.SOFT_GRAY,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: Colors.SOFT_GRAY,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    position: 'absolute',
    bottom: 100,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export {HomeStyle};
