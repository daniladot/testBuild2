import classes from "./MobileTitleCard.module.scss"
import { IMobileTextCard } from "../Interfaces"

const MobileTitleCard = (props:IMobileTextCard):JSX.Element => (
  <div className={classes.MobileTitleCard}>{props.text}</div>
)

export default MobileTitleCard