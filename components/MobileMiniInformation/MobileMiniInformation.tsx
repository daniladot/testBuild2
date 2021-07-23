import classes from './MobileMiniInformation.module.scss';
import { IMobileMiniInformation } from '../Interfaces';

const MobileMiniInformation = (props: IMobileMiniInformation): JSX.Element | null => (
  props.platform
    ? <div className={classes.MobileMiniInformation}>
      <a href={props.url ? props.url : '#'} className={classes.MobileMiniInformation_PlatformText}>{props.platform}</a>
    </div>
    : props.price ? <div className={classes.MobileMiniInformation}>от {props.price} ₽</div>
    : props.genre ? <div className={classes.MobileMiniInformation}>{props.genre}</div>
      : null
);

export default MobileMiniInformation;