import {
  Home,
  SetupMultiMode,
  SinglePlayer,
  SetupSingleMode,
  RecordsList,
  MultiPlayer,
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
    path: '/single-player/:id',
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
