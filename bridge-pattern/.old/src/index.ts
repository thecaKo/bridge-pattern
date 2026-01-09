import { DataShow } from "./devices/DataShow";
import { Projector } from "./devices/Projector";
import { SmartTV } from "./devices/SmartTV";
import { AdvancedRemote } from "./remotes/advanced-remote";
import { BasicRemote } from "./remotes/basic-remote";

const projector = new Projector();
const tv = new SmartTV();
const datashow = new DataShow();

const basicRemote = new BasicRemote(projector);
const advancedRemote = new AdvancedRemote(tv);

basicRemote.volumeUp();

basicRemote.togglePower();
advancedRemote.mute();
