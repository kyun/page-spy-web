import { useClientInfoFromMsg } from '@/utils/brand';
import { ReactComponent as StorageSvg } from '@/assets/image/storage.svg';
import { ReactComponent as CookieSvg } from '@/assets/image/cookie.svg';
import { ReactComponent as DatabaseSvg } from '@/assets/image/database.svg';
import { SpyDevice, SpyStorage } from '@huolala-tech/page-spy-types';
import { FunctionComponent } from 'react';

const STORAGE_TYPES: {
  name: SpyStorage.DataType | 'indexedDB';
  label: string;
  icon: FunctionComponent;
  visible: (browser?: SpyDevice.Browser) => boolean;
}[] = [
  {
    name: 'localStorage',
    label: 'Local Storage',
    icon: StorageSvg,
    visible: (browser) => !browser?.startsWith('mp-'),
  },
  {
    name: 'sessionStorage',
    label: 'Session Storage',
    icon: StorageSvg,
    visible: (browser) => !browser?.startsWith('mp-'),
  },
  {
    name: 'cookie',
    label: 'Cookies',
    icon: CookieSvg,
    visible: (browser) => !browser?.startsWith('mp-'),
  },
  {
    name: 'indexedDB',
    label: 'IndexedDB',
    icon: DatabaseSvg,
    visible: (browser) => !browser?.startsWith('mp-'),
  },
  {
    name: 'mpStorage',
    label: '小程序 Storage',
    icon: StorageSvg,
    visible: (browser) => !!browser?.startsWith('mp-'),
  },
];

export const useStorageTypes = () => {
  const clientInfo = useClientInfoFromMsg();
  return STORAGE_TYPES.filter((s) => {
    return s.visible(clientInfo?.browser.type);
  });
};
