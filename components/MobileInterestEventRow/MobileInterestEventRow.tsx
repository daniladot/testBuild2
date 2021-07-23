import { IInterestEventRowMobile } from '../Interfaces';
import classes from './MobileInterestEventRow.module.scss';
import MobileArrow from '../MobileArrow/MobileArrow';
import Image from 'next/image';
import MobileTextCard from '../MobileTextCard/MobileTextCard';
import MobileTitleCard from '../MobileTitleCard/MobileTitleCard';
import InterestImage from '/public/image/InterestEventRowMobile/image.png';


const MobileInterestEventRow = (props: IInterestEventRowMobile): JSX.Element => {
  return (
    <div className={classes.InterestEventRowMobile}>
      {/*<img src={props.image} className={classes.InterestEventRowMobile_Image}/>*/}
      <Image src={InterestImage} alt='' className={classes.InterestEventRowMobile_Image} />
      {/*<div className={classes.InterestEventRowMobile_ImageDiv} />*/}
      <div className={classes.InterestEventRowMobile_MainInformationWrapper}>
        <MobileTitleCard text={props.title} />
        <div className={classes.InterestEventRowMobile_MainInformationText}>
          <MobileTextCard text={props.text} />
        </div>
      </div>
      <MobileArrow />
    </div>
  );
};

export default MobileInterestEventRow;
