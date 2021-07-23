import classes from "./MobileTextCard.module.scss"
import { IMobileTextCard } from "../Interfaces"

const MobileTextCard = (props: IMobileTextCard): JSX.Element => (
  <div className={classes.MobileTextCard}>{props.text}</div>
)

export default MobileTextCard