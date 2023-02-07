import Day from './Day';
import Night from './Night';

import { isDayTime } from "../lib/utils";

export default function Time() {
  return (
    <>
      { isDayTime() ?  <Day /> : <Night /> }
    </>
  ); 
}
