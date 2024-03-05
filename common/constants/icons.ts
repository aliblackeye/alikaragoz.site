// Custom Icons

// React Icons
import { AiFillCloseCircle, AiFillCloseSquare } from 'react-icons/ai';
import { BiCog, BiSupport } from 'react-icons/bi';
import { BsSend } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight, CgSpinner } from 'react-icons/cg';
import { FaHome, FaSpinner } from 'react-icons/fa';
import { FiHelpCircle, FiInfo } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import {
  IoArrowBack,
  IoChatboxOutline,
  IoClose,
  IoExitOutline,
  IoKeyOutline,
  IoMenuOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoWalletOutline,
} from 'react-icons/io5';
import { LuUser, LuUsers } from 'react-icons/lu';
import { MdPieChartOutlined } from 'react-icons/md';
import {
  RxEnterFullScreen,
  RxEnvelopeOpen,
  RxExitFullScreen,
} from 'react-icons/rx';
import { TiTicket } from 'react-icons/ti';
import { VscChromeMinimize } from 'react-icons/vsc';

import EN_FLAG from '@icons/EN';
import TR_FLAG from '@icons/TR';

const CUSTOM_ICONS = {
  TR: TR_FLAG,
  EN: EN_FLAG,
};

const ICONS = {
  ...CUSTOM_ICONS,
  CLOSE_SQUARE: AiFillCloseSquare,
  CLOSE_CIRCLE: AiFillCloseCircle,
  DASHBOARD: MdPieChartOutlined,
  SERVICES: BiCog,
  USERS: LuUsers,
  SUPPORT: FiHelpCircle,
  LIVE_SUPPORT: BiSupport,
  TICKETS: TiTicket,
  INCOME: IoWalletOutline,
  HOME: FaHome,
  ABOUT: FiInfo,
  CONTACT: HiOutlineMail,
  USER: LuUser,
  COLLAPSE_RIGHT: CgMenuRight,
  COLLAPSE_LEFT: CgMenuLeft,
  FULL_SCREEN_EXIT: RxExitFullScreen,
  FULL_SCREEN_ENTER: RxEnterFullScreen,
  MOON: IoMoonOutline,
  SUN: IoSunnyOutline,
  BACK: IoArrowBack,
  SEND_MESSAGE: BsSend,
  X: IoClose,
  MINIMIZE: VscChromeMinimize,
  PASSWORD: IoKeyOutline,
  LOGOUT: IoExitOutline,
  MENU: IoMenuOutline,
  CHAT: IoChatboxOutline,
  ENVELOPE_OPEN: RxEnvelopeOpen,
  SPINNER: FaSpinner,
  SPINNER_2: CgSpinner,
};

export default ICONS;
