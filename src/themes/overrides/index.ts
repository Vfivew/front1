import { Theme } from '@mui/material/styles';

import Button from './Button';
import InputBase from './InputBase';
import Link from './Link';
import Pagination from './Pagination';
import TextField from './TextField';
import Typography from './Typography';

export default function ComponentsOverrides(theme: Theme) {
  return {
    ...Button(theme),
    ...InputBase(),
    ...TextField(theme),
    ...Typography(),
    ...Pagination(theme),
    ...Link(),
  };
}
