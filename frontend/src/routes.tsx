import {
  Home,
  SetupMultiMode,
  SinglePlayer,
  MultiPlayer,
  SetupSingleMode,
  RecordsList,
} from './pages';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/setup-single-mode',
    element: <SetupSingleMode />,
  },
  {
    path: '/setup-multi-mode',
    element: <SetupMultiMode />,
  },
  {
    path: '/single-player',
    element: <SinglePlayer />,
  },
  {
    path: '/multi-player',
    element: <MultiPlayer />,
  },
  {
    path: '/records-list',
    element: <RecordsList />,
  },
];
