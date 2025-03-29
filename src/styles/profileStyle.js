import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {height, width} from '../utils/constants';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  darkBackground: {
    backgroundColor: Colors.BLACK,
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
    borderColor: Colors.MEDIUM_GRAY,
  },
  section: {
    marginBottom: height * 0.04,
    backgroundColor: 'white',
    padding: width * 0.04,
    borderRadius: 10,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.015,
    color: Colors.DARKER_GRAY,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  value: {
    fontSize: width * 0.045,
    color: Colors.DARKER_GRAY,
  },
  text: {
    fontSize: width * 0.045,
    color: Colors.DARK_GRAY,
  },
});
export {ProfileStyle};
