// React Icons
import { AiFillCloseCircle, AiFillCloseSquare } from 'react-icons/ai';
import { BiBell, BiCog, BiCopy, BiPlus, BiSupport } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight, CgProfile, CgSpinner } from 'react-icons/cg';
import { CiFileOn, CiImageOn } from 'react-icons/ci';
import {
  FaChevronDown,
  FaChevronUp,
  FaCopy,
  FaExclamation,
  FaHome,
  FaRegSave,
  FaRegSmileWink,
  FaSpinner,
} from 'react-icons/fa';
import {
  FiEdit2,
  FiHelpCircle,
  FiInfo,
  FiLogOut,
  FiRefreshCcw,
  FiSettings,
  FiTrash,
  FiTrash2,
  FiUploadCloud,
} from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineGlobeEuropeAfrica } from 'react-icons/hi2';
import {
  IoArrowBack,
  IoChatbubbleEllipsesOutline,
  IoClose,
  IoKeyOutline,
  IoMenuOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoWalletOutline,
} from 'react-icons/io5';
import {
  LuFileText,
  LuTextCursorInput,
  LuTrash2,
  LuUser,
  LuUsers,
} from 'react-icons/lu';
import {
  MdChevronLeft,
  MdChevronRight,
  MdErrorOutline,
  MdLockOutline,
  MdMailOutline,
  MdOutlineChat,
  MdOutlineDynamicForm,
  MdOutlineInsertChart,
  MdOutlineShowChart,
  MdPieChartOutlined,
} from 'react-icons/md';
import {
  PiFilmStripLight,
  PiHouse,
  PiPaletteBold,
  PiPlusCircleBold,
} from 'react-icons/pi';
import { RiHome6Line, RiLoader2Line, RiNotionFill } from 'react-icons/ri';
import {
  RxAvatar,
  RxCheck,
  RxDotFilled,
  RxEnterFullScreen,
  RxEnvelopeOpen,
  RxExitFullScreen,
} from 'react-icons/rx';
import { TbBulb, TbMessageQuestion } from 'react-icons/tb';
import { TiTicket } from 'react-icons/ti';
import { VscChromeMinimize, VscSend } from 'react-icons/vsc';

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
  HOME_2: PiHouse,
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
  SEND_MESSAGE: VscSend,
  X: IoClose,
  MINIMIZE: VscChromeMinimize,
  PASSWORD: IoKeyOutline,
  LOGOUT: FiLogOut,
  MENU: IoMenuOutline,
  CHAT: MdOutlineChat,
  ENVELOPE_OPEN: RxEnvelopeOpen,
  SPINNER: FaSpinner,
  SPINNER_2: CgSpinner,
  BELL: BiBell,
  CHEVRON_DOWN: FaChevronDown,
  CHEVRON_UP: FaChevronUp,
  CHART: MdOutlineShowChart,
  FORM: MdOutlineDynamicForm,
  MAIL: MdMailOutline,
  HOME_LINE: RiHome6Line,
  SETTINGS: FiSettings,
  CHECK: RxCheck,
  DOT: RxDotFilled,
  GLOBE: HiOutlineGlobeEuropeAfrica,
  TEXT_INPUT: LuTextCursorInput,
  FILE: LuFileText,
  QUESTION: TbMessageQuestion,
  NOTION: RiNotionFill,
  TRASH: FiTrash,
  TRASH_2: FiTrash2,
  LOADING: RiLoader2Line,
  UPLOAD_FILE: CiFileOn,
  UPLOAD_IMAGE: CiImageOn,
  UPLOAD_VIDEO: PiFilmStripLight,
  BULB: TbBulb,
  UPLOAD_TRASH: LuTrash2,
  LOCK: MdLockOutline,
  SAVE: FaRegSave,
  MESSAGE: IoChatbubbleEllipsesOutline,
  PLUS_CIRCLE: PiPlusCircleBold,
  PALETTE: PiPaletteBold,
  CHEVRON_LEFT: MdChevronLeft,
  CHEVRON_RIGHT: MdChevronRight,
  INSERT_CHART: MdOutlineInsertChart,
  AVATAR: CgProfile,
  SMILE_WINK: FaRegSmileWink,
  COPY_2: FaCopy,
  COPY: BiCopy,
  ERROR: MdErrorOutline,
  EXCLAMATION: FaExclamation,
  UPLOAD_CLOUD: FiUploadCloud,
  EYE: BsEye,
  EDIT: FiEdit2,
  DELETE: FiTrash,
  PLUS: BiPlus,
  REFRESH: FiRefreshCcw,
};

export default ICONS;
