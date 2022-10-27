import {useRouter} from 'next/router';

export const useRouteCheck = () => {
  const router = useRouter();

  return (path: string) => {
    const {asPath} = router;

    if (asPath) {
      const item = asPath.split('/')[1].replace('#', '');
      return item === path ? 'active' : '';
    }
  };
};
