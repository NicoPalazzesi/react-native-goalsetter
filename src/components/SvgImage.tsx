import React from 'react';
import { SvgProps } from 'react-native-svg';

import AccountCircleIcon from '../assets/images/account-circle-icon.svg';
import EmailIcon from '../assets/images/email-icon.svg';
import FamilyBanking from '../assets/images/family-banking.svg';
import FlyingMoneyAndStars from '../assets/images/flying-money-and-stars.svg';
import UnlockedIcon from '../assets/images/unlocked-icon.svg';

const SVG_IMAGES = {
  'account-circle-icon': AccountCircleIcon,
  'email-icon': EmailIcon,
  'family-banking': FamilyBanking,
  'flying-money-and-stars': FlyingMoneyAndStars,
  'unlocked-icon': UnlockedIcon,
};

export type SvgImageName = keyof typeof SVG_IMAGES;

type SvgImageProps = SvgProps & {
  name: SvgImageName;
}

const SvgImage = ({name, ...props}: SvgImageProps) => {
  const SelectedSvgImage = SVG_IMAGES[name];

  return <SelectedSvgImage {...props} />;
};

export default SvgImage;