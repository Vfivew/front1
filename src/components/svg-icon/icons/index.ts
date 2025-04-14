import Add from './Add';
import ArrowLeft from './ArrowLeft';
import Checkbox from './Checkbox';
import CheckboxChecked from './CheckboxChecked';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Logout from './Logout';
import Upload from './Upload';

export const icons = {
  Eye,
  EyeClosed,
  ArrowLeft,
  Checkbox,
  CheckboxChecked,
  Logout,
  Add,
  Upload,
};

export type IconTypes = keyof typeof icons;
