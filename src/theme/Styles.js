import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';


const Styles = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horzCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarStyle: {
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: Colors.brandPrimary,
    height: Metrics.navBarHeight,
    marginTop: Platform.OS === 'ios' ? -Metrics.statusBarHeight * 2 : 0,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundSecondary,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  topContainer: {
    backgroundColor: Colors.backgroundSecondary,
    padding: Metrics.defaultPadding * 2,
    shadowColor: Colors.backgroundPrimary,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  contentContainer: {
    flex: 1,
    padding: Metrics.defaultPadding * 2,
  },

  // Dropdown Styles
  dropdownContainer: {
    position: 'relative',
  },
  dropdown: {
    backgroundColor: Colors.backgroundThird,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.borderThird,
  },
  dropdownIcon: {
    position: 'absolute',
    right: Metrics.defaultPadding,
    top: Metrics.defaultPadding,
    color: Colors.textPrimary,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  dropdownText: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    color: Colors.textPrimary,
    backgroundColor: Colors.backgroundThird,
    width: '100%',
    height: '100%',
    padding: Metrics.defaultPadding,
    paddingRight: Metrics.defaultMargin * 2,
    fontSize: 14,
  },
  dropdownBox: {
    backgroundColor: Colors.textThird,
  },
  dropdownItem: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.itemColor,
  },
  dropdownItemInner: {
    backgroundColor: Colors.textThird,
    flex: 1,
    flexDirection: 'row',
    height: Metrics.dropdownItemHeight,
    paddingLeft: Metrics.defaultPadding * 2,
    paddingRight: Metrics.defaultPadding * 2,
  },
  dropdownItemInnerHighlight: {
    backgroundColor: Colors.backgroundThird,
    flex: 1,
    flexDirection: 'row',
    height: Metrics.dropdownItemHeight,
    paddingLeft: Metrics.defaultPadding * 2,
    paddingRight: Metrics.defaultPadding * 2,
  },
  dropdownItemIcon: {
    fontSize: 14,
    color: Colors.backgroundPrimary,
    marginTop: 6,
  },
  dropdownItemIconHighlight: {
    fontSize: 14,
    color: Colors.textThird,
    marginTop: 6,
  },
  dropdownItemText: {
    fontSize: 14,
    color: Colors.backgroundPrimary,
    marginLeft: Metrics.defaultMargin,
    marginTop: 4,
  },
  dropdownItemTextHighlight: {
    fontSize: 14,
    color: Colors.textThird,
    marginLeft: Metrics.defaultMargin,
    marginTop: 4,
  },

  // Button Styles
  button: {
    backgroundColor: Colors.backgroundThird,
    borderWidth: 1,
    borderColor: Colors.borderThird,
    borderRadius: 2,
    paddingTop: Metrics.defaultPadding * 0.8,
    paddingLeft: Metrics.defaultPadding * 4,
    paddingBottom: Metrics.defaultPadding * 0.8,
    paddingRight: Metrics.defaultPadding * 4,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.textThird,
  },
  buttonIcon: {
    fontSize: 20,
    color: Colors.textThird,
  },

  // Slider Styles
  slider: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: -Metrics.defaultMargin,
  },
  sliderLeftIcon: {
    color: Colors.textThird,
    fontSize: 20,
    marginRight: Metrics.defaultMargin,
  },
  sliderRightIcon: {
    color: Colors.textThird,
    fontSize: 20,
    marginLeft: Metrics.defaultMargin,
  },
  sliderTrack: {
    height: 2,
    borderRadius: 2,
  },
  sliderThumb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.textThird,
  },
  sliderThumbTouch: {
    width: 8,
    height: 8,
  },
};

export default Styles;
