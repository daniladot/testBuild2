import classes from './MobileInterestEventBig.module.scss';
import { IMobileInterestEventBig } from '../Interfaces';
import MobileArrow from '../MobileArrow/MobileArrow';
import MobileTitleCard from '../MobileTitleCard/MobileTitleCard';
import MobileTextCard from '../MobileTextCard/MobileTextCard';
import MobileMiniInformation from '../MobileMiniInformation/MobileMiniInformation';

const MobileInterestEventBig = (props: IMobileInterestEventBig): JSX.Element => {
  return (
    <div className={classes.MobileInterestEventBig}>
      {/*<img src={} className={classes.MobileInterestEventBig_Image}/>*/}
      <div className={classes.MobileInterestEventBig_ImageDiv} />
      <div className={classes.MobileInterestEventBig_InformationBlock}>
        <div className={classes.MobileInterestEventBig_InformationWrapper}>
          <MobileTitleCard text={props.title} />
          <div className={classes.MobileInterestEventBig_InformationText}>
            <MobileTextCard text={props.text} />
          </div>
          <div className={classes.MobileInterestEventBig_AboutEvent}>
            <MobileMiniInformation platform={props.platform} />
            <MobileMiniInformation price={props.price} />
            <MobileMiniInformation genre={props.genre} />
          </div>
        </div>
        <MobileArrow />
      </div>
    </div>
  );
};

export default MobileInterestEventBig;