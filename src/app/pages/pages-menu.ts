import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/',
    home: true,
  },
  {
    title: 'RESOURCES',
    group: true,
  },
  {
    title: 'Contacts',
    link: '/pages/contacts',
    icon: 'people-outline'
  },
];
