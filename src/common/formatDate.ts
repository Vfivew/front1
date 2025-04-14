import { format } from 'date-fns';

import { DATE_FORMAT } from '@src/constants';

export const formatDate = (dateString: Date): string => {
  return format(new Date(dateString), DATE_FORMAT);
};
