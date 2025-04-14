import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

export interface LineLoaderProps extends LinearProgressProps {}

const LineLoader = () => (
  <LoaderWrapper>
    <LinearProgress color="secondary" />
  </LoaderWrapper>
);

export default LineLoader;
